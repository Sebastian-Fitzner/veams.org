// Main Requirements
import App from './app';
import Helpers from './utils/helpers';
var HLJS = require('highlight.js');

require('respimage');

var $ = App.$;

// ES6 Modules
import Sticky from './modules/sticky/sticky';
import Navigation from './modules/navigation/navigationView';
import TOC from './modules/toc/tocView';
import ButtonInit from './modules/button/button-init';
import Toggle from './modules/toggle/ui-toggle';
import EqualRows from './modules/equal-row-height/equal-row-heights';

"use strict";

// Main Functionality
class Core {
	constructor() {
		this.initialize();
	}

	/**
	 * Initialize our core functionality
	 * This function will only be executed once.
	 */
	initialize() {
		console.log('App initialized with version: ', App.version);

		/**
		 * Set (no-)touch class
		 */
		if (!App.support.touch) {
			$('html').addClass('no-touch');
		}
	}

	render(context) {

		$('pre code', context).each(function (i, block) {
			let height = $(this).outerHeight(),
				heightMax = 230;

			HLJS.highlightBlock(block);

			if (height > heightMax) {
				$(this).addClass('is-close').attr('data-max-height', height).css('height', heightMax).parent().append('<button class="c-cta--code-toggle" data-js-atom="toggle-code" />');
			}
		});

		$('[data-js-atom="toggle-code"]', context).on('click', function () {
			let el = $(this).prev('code'),
				elData = el.data('max-height');

			if (el.outerHeight() > 230) {
				el.css('height', '230px');
			} else {
				el.css('height', elData + 30);
			}

			$(this).toggleClass('is-active').prev('code').toggleClass('is-close');

		});

		/**
		 * Init Sticky
		 */
		Helpers.loadModule({
			el: '[data-js-module="sticky"]',
			Module: Sticky,
			context: context
		});

		/**
		 * Init Navigation
		 */
		Helpers.loadModule({
			el: '[data-js-module="navigation"]',
			Module: Navigation,
			context: context
		});

		/**
		 * Init TOC
		 */
		Helpers.loadModule({
			el: '[data-js-module="toc"]',
			Module: TOC,
			context: context
		});

		/**
		 * Init Buttons
		 */
		Helpers.loadModule({
			el: '[data-js-module="button"]',
			Module: ButtonInit,
			context: context
		});

		/**
		 * Init Toggle
		 */
		Helpers.loadModule({
			el: '[data-js-module="toggle"]',
			Module: Toggle,
			render: false,
			context: context
		});

		/**
		 * Init Equal Rows
		 */
		Helpers.loadModule({
			el: '[data-js-module~="equal"]',
			Module: EqualRows,
			render: false,
			cb: function (module, options) {
				if (options && options.delayInit) {
					$(window).load(function () {
						module._reinit(module);
					});
				}
			},
			context: context
		});
	}
}

document.addEventListener("DOMContentLoaded", function () {
	var core = new Core();

	/**
	 * Render modules
	 */
	core.render();

	/**
	 * Initialize modules which are loaded after initial load
	 * via custom event 'DOMchanged'
	 */
	App.Vent.on('DOMchanged', (context) => {
		Helpers.querySelectorArray({
			el: context
		}).forEach((itemContext) => {
			console.log('Dom has changed. Initialising new modules in: ', itemContext);
			core.render(itemContext);
		});
	});
});
