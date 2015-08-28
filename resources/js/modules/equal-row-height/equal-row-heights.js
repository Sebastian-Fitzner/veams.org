/**
 * A module which takes elements and set the height of the elements equal.
 * @module Equal Height
 *
 * @author Sebastian Fitzner
 */
import Helpers from '../../utils/helpers';
import App from '../../app';
import ImageLoader from '../../utils/mixins/imageLoader';

var $ = App.$;

var EqualHeight = App.ComponentView.extend({

  options: {
    childElements: 'li',
    lastRowClass: 'is-last-row',
    addPadding: false
  },

  initialize: function(obj) {
    this.options = Helpers.defaults(obj.options || {}, this.options); // get/set default options

    this._bindEvents();
  },

  _bindEvents: function() {
    var timer;

    App.Vent.on('resize', () => {
      this._reinit(this, timer);
    });
  },

  _reinit: function(that, timer) {
    clearTimeout(timer);
    timer = setTimeout(that.render.bind(this), 250);
  },

  _resetStyles: function(el) {
    el.removeAttr('style');
  },

  _setLastRowClass: function(element) {
    Helpers.forEach($(element), (el) => {
      $(el).addClass(this.options.lastRowClass);
    });
  },

  buildRow: function(el) {
    var that = this;
    var rows = [];
    var posArray = [];
    var firstElTopPos = $(this.options.childElements).eq(0).offsetTop;

    Helpers.forEach(el, (i, element) => {
      var el = $(element);

      that._resetStyles(el);

      if (el.offsetTop === firstElTopPos) {
        posArray.push(el);
      } else {
        rows.push(posArray);
        posArray = [];
        posArray.push(el);
        firstElTopPos = el.offsetTop;
      }

    });

    rows.push(posArray);
    this.defineRowHeight(rows);
  },

  defineRowHeight: function(rows) {
    var that = this,
    i = 0,
    padding = ~~this.options.addPadding;

    for (i; i < rows.length; i++) {
      var height = that.getRowHeight(rows[i]);

      that.setHeight(rows[i], height, padding);

      if (i > 0 && i === rows.length - 1) {
        that._setLastRowClass(rows[i]);
      }
    }
  },

  getRowHeight: function(elements) {
    var height = 0;

    Helpers.forEach(elements, (i, el) => {
      height = Helpers.getOuterHeight(el) > height ? Helpers.getOuterHeight(el) : height;
    });

    return height;
  },

  setHeight: function(elements, height, padding) {
    var addPadding = padding || 0;

    Helpers.forEach(elements, (i, el) => {
      el[0].style.height = height + addPadding + 'px';
    });
  },

  // Renders the view's template to the UI
  render: function() {
    var listEl = $(this.options.childElements, this.$el);

    this.buildRow(listEl);

    setTimeout(() => {
      App.Vent.trigger('equal:render', {
        el: this.$el,
        childElements: this.options.childElements
      });
    }, 0);

    // Maintains chainability
    return this;
  }
});

EqualHeight.mixin(ImageLoader);

// Returns the View class
export default EqualHeight;
