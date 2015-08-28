// Main Requirements
import App from './app';
import Helpers from './utils/helpers';
var HLJS = require('highlight.js');

require('respimage');

var $ = App.$;

// ES6 Modules
import ButtonInit from './modules/button/button-init';
import Toggle from './modules/toggle/ui-toggle';
import EqualRows from './modules/equal-row-height/equal-row-heights';
import Form from './modules/form/form';
import FormAjax from './modules/form/form-ajax';

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
		} else {
			$('html').addClass('touch');
		}


	}

	render(context) {

		$('pre code', context).each(function(i, block) {
			var height = $(this).outerHeight(),
				heightMax = 230;

			HLJS.highlightBlock(block);

			if (height > heightMax) {
				$(this).addClass('js-close').attr('data-max-height', height).css('height', heightMax).parent().append('<button class="js-toggle"/>');
			}
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
		 * Init Forms
		 */
		Helpers.loadModule({
			el: '[data-js-module~="form"]',
			Module: Form,
			context: context
		});

		/**
		 * Init AjaxForm
		 */
		Helpers.loadModule({
			el: '[data-js-module~="form-ajax"]',
			Module: FormAjax,
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
