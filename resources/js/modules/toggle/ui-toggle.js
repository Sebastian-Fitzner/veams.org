/**
 * @module toggle
 *
 * @author Sebastian Fitzner
 */

import Helpers from '../../utils/helpers';
import App from '../../app';
var $ = App.$;
import ImageLoader from '../../utils/mixins/imageLoader';

var Toggle = App.ComponentView.extend({
  options: {
    open: false, // array: viewport names - eg.: ['mobile', 'tablet', 'desktop-small', 'desktop']
    activeClass: 'is-visible',
    useMaxHeight: App.support.touch ? 10000 : false, // number => 10000
    singleOpen: false,
    togglePush: false, // data-js-ref="toggle-push"
    index: false // number: index of toggle in context, used in showNext mode
  },

  // View constructor
  initialize: function(obj) {
    this.options = Helpers.defaults(obj.options || {}, this.options);
    this.elId = this.$el.attr('id');
    this.heightProp = this.options.useMaxHeight !== false ? 'max-height' : 'height';

    if (this.options.togglePush) {
      this.pushEl = this.$el.closest('[data-js-ref="toggle-push"]');

      if (!this.pushEl.length) {
        this.pushEl = this.$el.parent();
      }
    }

    this._bindEvents();
  },

  _computeElHeight: function() {
    if (!this.options.useMaxHeight) {
      this.elClone = this._cloneIt();

      clearTimeout(this.timeout);

      this.timeout = setTimeout(() => {
        this.elHeight = this.elClone.outerHeight(true);
        this.elClone.remove();
        this.$el.removeAttr('data-cloned');

        if (this.$el.is('.' + this.options.activeClass)) {
          this.$el.css('height', this.elHeight);
        }
      }, 0);

    } else {
      this.elHeight = this.options.useMaxHeight;
    }
  },

  _cloneIt: function() {
    var width = this.$el.outerWidth(true);
    var styles = {
      position: 'absolute',
      display: 'block',
      left: -9999,
      width: width,
      height: 'auto'
    };

    return this.$el.attr('data-cloned', true).clone().css(styles).appendTo(document.body);
  },

  _checkOpening: function() {
    var falsy = false;
    this.options.open.forEach(function(el) {
      if (el === App.currentMedia) {
        falsy = true;
      }
    });

    if (this.options.open === 'true' || falsy !== false) {
      this.openElement();
    } else {
      this.closeElement();
    }
  },

  _bindEvents: function() {
    var that = this;

    this.listenTo(App.Vent, 'toggle:toggleContent', this.toggleContent);
    this.listenTo(App.Vent, 'toggle:showNextContent', this.showNextContent);
    this.listenTo(App.Vent, 'resize', Helpers.throttle(() => {
      that._computeElHeight();
    }));
  },

  showNextContent: function(obj) {
    var context = obj.options.context;

    if (Helpers.checkElementInContext(this.$el, context)) {
      if (obj.options.showNextIndex === this.options.index) {
        this.openElement();

        if (this.$el.is(':last-of-type')) {
          obj.el.trigger('toggle:lastopened');
        }
      }
    }
  },

  toggleContent: function(obj) {
    var toggleId = obj.options.id;
    var context = obj.options.context;
    var toggleAll = obj.options.toggleAll === 'true';

    if (Helpers.checkElementInContext(this.$el, context)) {
      if (toggleAll) {
        obj.el.is('.' + obj.options.activeClass) ? this.closeElement() : this.openElement();
      } else {
        if (this.options.singleOpen === 'true') {
          if (this._checkId(toggleId)) {
            this.$el.is('.' + this.options.activeClass) ? this.closeElement() : this.openElement();
          } else {
            this.closeElement();
          }
        } else {
          if (this._checkId(toggleId)) {
            this.$el.is('.' + this.options.activeClass) ? this.closeElement() : this.openElement();
          }
        }
      }
    }
  },

  _checkId: function(id) {
    if (this.elId === id) return true;
  },

  openElement: function() {
    if (this.options.togglePush) {
      this.pushEl.css('padding-bottom', this.elHeight);
    }

    this.$el.addClass(this.options.activeClass).css(this.heightProp, this.elHeight);
  },

  closeElement: function() {
    this.$el.removeClass(this.options.activeClass).css(this.heightProp, 0);

    if (this.options.togglePush) {
      this.pushEl.css('padding-bottom', 0);
    }
  },

  // Renders the view's template to the UI
  render: function() {
    this._computeElHeight();
    this.$el.removeClass('is-unresolved').css(this.heightProp, 0);
    if (this.options.open) this._checkOpening();

    // Maintains chainability
    return this;
  }
});

/** Use mixin to extend our view with `ImageLoader` */
Toggle.mixin(ImageLoader);

// Returns the View class
export default Toggle;
