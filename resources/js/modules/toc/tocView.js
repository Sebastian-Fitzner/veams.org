/**
 * Represents a view.
 * @class tocView
 *
 * Use the get keyword to make our methods serve as getters for a property.
 * This means they will be accessible as properties, but defined as methods,
 * retaining compatibility with any existing references if you're converting existing code.
 *
 * @author
 */

import App from '../../app';
import Helpers from '../../utils/helpers';
import Tpl from '../../templates/templates';

let Handlebars = require('handlebars/runtime')['default'];
let $ = App.$;
let Template = Tpl(Handlebars);

// Creates a new view class object
class TOC extends App.ComponentView {
	get template() {
		return Template['TOC']; // Setting the view's template property using the handlebars template method
	}

	// options property
	get _options() {
		return {
			contentRef: '[data-js-id="toc"]',
			tocList: '[data-js-atom="toc-list"]'
		}
	}

	// set options
	set _options(opts) {
		this.options = opts;
	}

	/**
	 * Events property
	 */
	get events() {
		return {
			'click [data-js-atom="toc-link"]': 'goToContent'
		}
	}

	get _data() {
		var _this = this;
		this.data = [];

		$('h3', this.contentRef).each(function () {
			var id = $(this).attr('id');
			var text = $(this).text();

			_this.data.push({
				id: id,
				text: text
			});
		});

		return this.data;
	}

	initialize(obj) {
		this._options = Helpers.defaults(obj.options || {}, this._options);
		this.tocList = this.$el.find(this.options.tocList);
		this.contentRef = $(this.options.contentRef);

		this.bindEvents();
	}

	/**
	 * Bind all events
	 */
	bindEvents() {
	}

	// Renders the view's template to the UI
	render() {
		// Dynamically updates the UI with the view's template
		this.tocList.html(this.template(this._data));

		// Maintains chainability
		return this;
	}

	goToContent(e) {
		console.log('test: ');
	}
}

// Returns the view class
export default TOC;