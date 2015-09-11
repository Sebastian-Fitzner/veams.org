/**
 * Represents a view.
 * @class navigationView
 *
 * Use the get keyword to make our methods serve as getters for a property.
 * This means they will be accessible as properties, but defined as methods,
 * retaining compatibility with any existing references if you're converting existing code.
 *
 * @author
 */

import App from '../../app';
import Helpers from '../../utils/helpers';
let $ = App.$;

// Creates a new view class object
class navigationView extends App.ComponentView {
	// options property
	get _options() {
		return {
			activeClass: 'is-active'
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
	}

	initialize(obj) {
		this._options = Helpers.defaults(obj.options || {}, this._options);
		this.offset = App.settings.height;

		this.bindEvents();
	}

	/**
	 * Bind all events
	 */
	bindEvents() {
		App.Vent.on('navigation:toggle', this.toggleNavigation.bind(this))
	}

	// Renders the view's template to the UI
	render() {
		this.$el.css({
			top: this.offset
		});

		// Maintains chainability
		return this;
	}

	toggleNavigation(e) {
		if (e && e.preventDefault) e.preventDefault();

		this.$el.toggleClass(this.options.activeClass);
	}
}

// Returns the view class
export default navigationView;