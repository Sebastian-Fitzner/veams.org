import Helpers from '../../utils/helpers';
import App from '../../app';
import AppModule from '../_global/module';

var $ = App.$;

class Accordion extends AppModule {
	constructor(obj) {
		let options = {
			open: false, // array: viewport names - eg.: ['mobile', 'tablet', 'desktop-small', 'desktop']
			activeClass: 'is-active',
			openClass: 'is-open',
			closeClass: 'is-closed',
			dataMaxAttr: 'data-js-max-height',
			accordionBtn: '[data-js-atom="accordion-btn"]',
			accordionContent: '[data-js-atom="accordion-content"]',
			removeStyles: true,
			singleOpen: false
		};

		super(obj, options);
	}

	initialize() {
		this.accordionContents = $(this.options.accordionContent, this.$el);
		this.accordionBtns = $(this.options.accordionBtn, this.$el);

		// call super
		super.initialize();
	}

	/**
	 * Bind all events
	 */
	bindEvents() {
		let fnToggleContent = this.toggleContent.bind(this);

		this.$el.on('click', this.options.accordionBtn, fnToggleContent);

		App.Vent.on(App.Events.resize, Helpers.throttle(() => {
			this.render();
		}, 300));
	}

	render() {
		this.resetStyles();

		this.accordionContents.each((idx, item) => {
			this.saveHeight(item);
			this.controlDisplay(item);
		});
	}

	toggleContent(e) {
		let ref = $(e.currentTarget).data('js-ref');
		let $target = $('[data-js-id="' + ref + '"]');

		if($target.hasClass(this.options.openClass)) {
			this.slideUp($target);
		} else {
			this.slideDown($target);
		}
	}

	slideUp($item) {
		$item.css('height', 0).removeAttr('style').removeClass(this.options.openClass).addClass(this.options.closeClass);
	}

	slideDown($item) {
		$item.css('height', $item.data('js-height')).removeClass(this.options.closeClass).addClass(this.options.openClass);
	}

	resetStyles() {
		this.accordionContents.removeClass(this.options.closeClass).removeAttr('style');
	}
	saveHeight(item) {
		$(item).attr('data-js-height', Helpers.getOuterHeight(item));
	}

	controlDisplay(item) {
		let $el = $(item);

		if (!$el.hasClass(this.options.openClass)) {
			$el.addClass(this.options.closeClass);
		}
	}
}

// Returns constructor
export default Accordion;