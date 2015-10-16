/**
 * Represents a button with custom click handlers.
 * @module button
 *
 * @author Sebastian Fitzner
 */

import Helpers from '../../utils/helpers';
import App from '../../app';
const $ = App.$;

class ButtonView extends App.ComponentView {

	/**
	 * Options for the view
	 */
	get _options() {
		return {
			activeClass: 'is-active',
			context: false,
			singleOpen: false
		}
	}

	set _options(opts) {
		this.options = opts;
	}

	/**
	 * Events method
	 */
	get events() {
		return {
			click: 'onClick'
		}
	}

	/**
	 * Initialize the view and merge options
	 *
	 * @param {obj} obj - contains options as JSON which will be merged with predefined options
	 */
	initialize(obj) {
		this._options = Helpers.defaults(obj.options || {}, this._options); // get/set default options

		this.bindEvents();
	}

	/**
	 * Bind events
	 *
	 * Listen to open and close events
	 */
	bindEvents() {
		this.listenTo(App.Vent, App.Events.btnClose, this.close);
		this.listenTo(App.Vent, App.Events.btnOpen, this.open);
	}

	// Renders the view's template to the UI
	render() {
		// Maintains chainability
		return this;
	}

	/**
	 * Handle classes
	 *
	 * Trigger events so that each button can listen to that and react by option singleOpen
	 */
	handleClasses() {
		this.$el.is('.' + this.options.activeClass) ? App.Vent.trigger(App.Events.btnClose, {
			'el': this.$el
		}) : App.Vent.trigger(App.Events.btnOpen, {
			'el': this.$el
		});
	}

	/**
	 * Close method
	 *
	 * When the node is equal the object we remove the active class
	 *
	 * @param {obj} obj - the event object with our element
	 * @param {obj} obj.el - element
	 */
	close(obj) {
		if (Helpers.checkNodeEquality(this.$el[0], obj.el[0])) {
			if (this.options.activeClass) this.$el.removeClass(this.options.activeClass);
			if (this.options.context) this.$el.closest(this.options.context).removeClass(this.options.activeClass);
		}
	}

	/**
	 * Open method
	 *
	 * When the node is equal the object we add the active class
	 * When furthermore the options singleOpen is defined,
	 * we remove all active classes on elements in the same context
	 *
	 * @param {obj} obj - the event object with our element
	 * @param {obj} obj.el - element
	 */
	open(obj) {
		if (Helpers.checkNodeEquality(this.$el[0], obj.el[0])) {
			if (this.options.activeClass) this.$el.addClass(this.options.activeClass);
			if (this.options.context) this.$el.closest(this.options.context).addClass(this.options.activeClass);
		} else {
			if (Helpers.checkElementInContext(obj.el, this.options.context) && this.options.singleOpen === "true") {
				if (this.options.activeClass) this.$el.removeClass(this.options.activeClass);
			}
		}
	}

	/**
	 * Click event method
	 *
	 * This method should be overriden when you want to use the button view
	 * @see button-init.js
	 *
	 * @param {event} e - event object
	 */
	onClick(e) {
		e.preventDefault();

		if (typeof this.clickHandler === 'function') {
			this.clickHandler.apply(this, arguments);
			if (this.options.activeClass) this.handleClasses();
		} else {
			console.log('You need to inherit from ' + this + ' and override the onClick method or pass a function to ' + this + '.clickHandler !');
		}
	}
}

export default ButtonView;