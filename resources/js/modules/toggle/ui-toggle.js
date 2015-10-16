import Helpers from '../../utils/helpers';
import App from '../../app';
import AppModule from '../_global/module';

var $ = App.$;

class Toggle extends AppModule {
	constructor(obj) {
		let options = {
			open: false, // array: viewport names - eg.: ['mobile', 'tablet', 'desktop-small', 'desktop']
			activeClass: 'is-visible',
			dataMaxAttr: 'data-js-max-height',
			removeStyles: true,
			singleOpen: false
		};

		super(obj, options);
	}

	get _height() {
		let element = this.el;
		let elStyle = window.getComputedStyle(element);
		let elDisplay = elStyle.display;
		let elPosition = elStyle.position;
		let elVisibility = elStyle.visibility;
		let elMaxHeight = elStyle.maxHeight.replace('px', '').replace('%', '');
		let wantedHeight = 0;


		// the element is hidden so:
		// making the el block so we can meassure its height but still be hidden
		element.style.position = 'absolute';
		element.style.visibility = 'hidden';
		element.style.display = 'block';

		wantedHeight = element.offsetHeight;

		// reverting to the original values
		element.style.display = elDisplay;
		element.style.position = elPosition;
		element.style.visibility = elVisibility;

		return wantedHeight;
	}

	initialize() {
		this.elId = this.$el.attr('id');

		// call super
		super.initialize();
	}

	/**
	 * Bind all evente
	 */
	bindEvents() {
		App.Vent.on(App.Events.toggleGlobal, this.toggleContent.bind(this));
		App.Vent.on(App.Events.toggleContext, this.toggleSlide.bind(this));
		App.Vent.on(App.Events.resize, Helpers.throttle(() => {
			this.$el.removeAttr(this.options.dataMaxAttr).removeAttr('style').removeClass(this.options.activeClass);
			this.toggleSlide();
		}, 300));

	}

	toggleContent(obj) {
		let toggleId = obj.options.id;

		if (this._checkId(toggleId)) {
			this.toggleSlide();
		}
	}

	/**
	 * toggleSlide mimics the jQuery version of slideDown and slideUp
	 * all in one function comparing the max-heigth to 0
	 */
	toggleSlide(el) {
		let element = el || this.el;
		let elMaxHeight = 0;

		if (element.getAttribute(this.options.dataMaxAttr)) {
			// we've already used this before, so everything is setup
			if (element.style.maxHeight.replace('px', '').replace('%', '') === '0') {
				element.style.maxHeight = element.getAttribute(this.options.dataMaxAttr);
			} else {
				element.style.maxHeight = '0';
			}
		} else {
			elMaxHeight = this._height + 'px';
			element.style.overflowY = 'hidden';
			element.style.maxHeight = '0';
			element.setAttribute(this.options.dataMaxAttr, elMaxHeight);
			element.style.display = 'block';

			// we use setTimeout to modify maxHeight later than display (to we have the transition effect)
			setTimeout(function () {
				element.style.maxHeight = elMaxHeight;
			}, 10);
		}

		this.$el.toggleClass(this.options.activeClass);
	}

	_checkId(id) {
		if (this.elId === id) return true;
	}

	render() {
		if (this.options.open === 'true') {
			this.$el.removeClass('is-unresolved');
			this.toggleSlide();
		}
	}
}

// Returns constructor
export default Toggle;