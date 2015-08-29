import Helpers from './utils/helpers';
var $ = require('jquery');
var Exoskeleton = require('exoskeleton');

// require('backbone.touch');

export default (function () {
	'use strict';

	// ----------------------------------
	// GLOBAL NAMESPACE
	// ----------------------------------

	// Save a reference to the global object
	var root = window;
	root.Backbone = {};
	root.Backbone.$ = $;

	// @borrow objects
	var App = root.App = Helpers.extend(window.App || {}, {
		Vent: Helpers.extend({}, Exoskeleton.Events),
		ui: {}
	});

	// Add globals
	App.Exoskeleton = Exoskeleton;
	App.$ = $;

	/**
	 * Create custom view with own properties and
	 * take this view in our modules
	 * register only one reference to our global library Exoskeleton
	 */
	App.ComponentView = function (options) {
		Exoskeleton.View.call(this, options);
	};
	App.ComponentModel = function (options) {
		Exoskeleton.Model.call(this, options);
	};
	App.ComponentCollection = function (options) {
		Exoskeleton.Collection.call(this, options);
	};

	Helpers.extend(App.ComponentView.prototype, Exoskeleton.View.prototype, {});
	Helpers.extend(App.ComponentModel.prototype, Exoskeleton.Model.prototype, {});
	Helpers.extend(App.ComponentCollection.prototype, Exoskeleton.Collection.prototype, {});

	App.ComponentView.extend = Exoskeleton.View.extend;
	App.ComponentModel.extend = Exoskeleton.Model.extend;
	App.ComponentCollection.extend = Exoskeleton.Collection.extend;
	/**
	 * Add our Mixin to our Exoskeleton.View object.
	 */
	App.ComponentView.mixin = Helpers.viewMixin;

	// Feature detection
	App.support = App.support || {};
	App.support.touch = Helpers.isTouch();
	App.clickHandler = Helpers.clickHandler();

	// Versioning
	App.version = "0.1.0";
	App.settings = {};

	// ----------------------------------
	// CHECKING
	// ----------------------------------

	// Media Query
	var head = document.querySelectorAll('head');
	App.currentMedia = window.getComputedStyle(head[0], null).getPropertyValue('font-family');

	// disable devmode logging if not on ie9 and parameter "devmode" not present
	if (document.querySelectorAll('html')[0].className.indexOf('ie9') < 0) {
		if (document.location.search.indexOf('devmode') < 0) {
			// hide all warnings and logs if not in devmode
			console.log = console.warn = function () {
			};
		} else {
			App.devmode = true;
		}
	} else {
		// IE9 FIX: in ie9 window.console seems to be undefined until you open dev tools
		if (!window.console) {
			window.console = {};
			console.log = console.warn = function () {
			};
		}
	}

	// ----------------------------------
	// GLOBAL EVENTS
	// ----------------------------------

	/**
	 * Triggers
	 */

		// Resize event
	window.onresize = function (e) {
		var currentMedia = window.getComputedStyle(head[0], null).getPropertyValue('font-family');

		if (currentMedia !== App.currentMedia) {
			var oldMedia = App.currentMedia;

			App.currentMedia = currentMedia;
			console.log('App.currentMedia: ', App.currentMedia);

			App.Vent.trigger('mediachange', {
				type: 'mediachange',
				currentMedia: currentMedia,
				oldMedia: oldMedia
			});
		}

		App.Vent.trigger('resize', e);
	};

	// Scroll event
	document.onscroll = function (e) {
		App.Vent.trigger('scroll', e);
	};

	/**
	 * Listeners
	 */

		// Redirect
	App.Vent.on('dom:redirect', (obj) => {
		if (!obj && !obj.url) throw new Error('Object is not defined. Please provide an url in your object!');

		// Redirect to page
		window.location.href = String(obj.url);
	});

	return App;

}).call(this);
