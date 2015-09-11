/**
 * Represents Helper Functions.
 * @module Helpers
 *
 * @author Sebastian Fitzner
 */

"use strict";

/**
 * @alias module:Helper
 */
var Helpers = {};

// ----------------------------------
// MODULE HELPERS
// ----------------------------------

/**
 * Initialize a module and render it and/or provide a callback function
 *
 * @param {Object} obj - Definition of our module
 * @param {string} obj.el - Required: element
 * @param {Object} obj.Module - Required: class which will be used to render your module
 * @param {boolean} obj.render - Optional: render the class, if false the class will only be initialized
 * @param {function} obj.cb - Optional: provide a function which will be executed after initialisation
 * @param {Object} obj.context - Optional: context of module
 *
 */
Helpers.loadModule = function (obj) {
	if (!obj.el) throw new Error('In order to work with loadModule you need to define an element as string!');
	if (!obj.Module) throw new Error('In order to work with loadModule you need to define a Module!');

	var moduleList = Helpers.querySelectorArray({
		el: obj.el,
		context: obj.context
	});
	var renderOnInit = obj.render !== false;

	Helpers.forEach(moduleList, (i, el) => {
		var attrs = el.getAttribute('data-js-options');
		var options = JSON.parse(attrs);

		var module = new obj.Module({
			el: el,
			options: options
		});

		// Render after initial module loading
		if (renderOnInit) module.render();
		// Provide callback function in which you can use module and options
		if (obj.cb && typeof(obj.cb) === "function") obj.cb(module, options);
	});
};

// ----------------------------------
// EXTENDING HELPERS
// ----------------------------------

/**
 * Simple extend method to extend the properties of an object.
 *
 * @param {Object} obj - object which will be extended
 *
 * @return {Object} obj - extended object
 */
Helpers.extend = function extend(obj) {
	[].slice.call(arguments, 1).forEach((item) => {
		for (var key in item) obj[key] = item[key];
	});
	return obj;
};

/**
 * Simple extend method, which extends an object.
 *
 * @param {Object} obj - object which will be extended
 *
 * @return {Object} obj - extended object
 */
Helpers.defaults = function defaults(obj) {
	[].slice.call(arguments, 1).forEach((item) => {
		for (var key in item)
			if (obj[key] === undefined)
				obj[key] = item[key];
	});
	return obj;
};

/**
 * Merge views method functions.
 *
 * @param {Object} from - Mixin object which will be merged via Helpers.defaults with the methods of our view
 */
Helpers.viewMixin = function (from) {

	var to = this.prototype;

	/** Add those methods which exists on `from` but not on `to` to the latter */
	Helpers.defaults(to, from);

	/** we do the same for events */
	Helpers.defaults(to.events, from.events);

	/** Extend `to`'s `render` */
	Helpers.extendMethod(to, from, 'render');
	/** Extend `to`'s `initialize` */
	Helpers.extendMethod(to, from, 'initialize');
};

/**
 * Helper method to extend an already existing method.
 *
 * @param {Object} to - view which will be extended
 * @param {Object} from - methods which comes from mixin
 * @param {string} methodName - function name
 */
Helpers.extendMethod = function (to, from, methodName) {
	function isUndefined(value) {
		return typeof value == 'undefined';
	}

	// if the method is defined on from ...
	if (!isUndefined(from[methodName])) {
		var old = to[methodName];

		// ... we create a new function on to
		to[methodName] = function () {

			// wherein we first call the method which exists on `to`
			var oldReturn = old.apply(this, arguments);

			// and then call the method on `from`
			from[methodName].apply(this, arguments);

			// and then return the expected result,
			// i.e. what the method on `to` returns
			return oldReturn;

		};
	}
};

// ----------------------------------
// FUNCTIONAL HELPERS
// ----------------------------------

/**
 * Get dom elements in an array
 *
 * @param {Object} obj - Selector and context
 * @param {Object} obj.el - Required: selector
 * @param {Object} obj.context - Optional: context
 *
 * @return {Array}
 */
Helpers.querySelectorArray = function (obj) {
	if (!obj.el) throw new Error('In order to work with querySelectorAll you need to define an element as string!');
	var el = obj.el;
	var context = (obj.context) || document;

	return Array.prototype.slice.call((context).querySelectorAll(el));
};

/**
 * Simple forEach method
 *
 * @param {Array} array - array of objects
 * @param {function} callback - callback function
 * @param {string} scope - scope of function
 */
Helpers.forEach = function (array, callback, scope) {
	for (var i = 0; i < array.length; i++) {
		callback.call(scope, i, array[i]);
	}
};

/**
 * Find index of a specific item in an array.
 *
 * @param {Array} array - array in which we search for
 * @param {Object} item - item which will be searched
 */
Helpers.indexOf = function (array, item) {
	if (array == null) return -1;
	var i, l;

	for (i = 0, l = array.length; i < l; i++)
		if (array[i] === item) return i;
	return -1;
};

/**
 * Return new RegExp
 *
 * @param {string} regEx - Regular Expression
 *
 * @return {RegExp}
 */
Helpers.regExp = function (regEx) {
	return new RegExp("(^|\\s+)" + regEx + "(\\s+|$)");
};

/**
 * Throttle method for resize events and more
 *
 * @param {function} func - Function which will be executed.
 * @param {number} wait - number to wait in milliseconds.
 * @param {boolean} immediate - execute function immediately.
 */

Helpers.throttle = function (func, wait, immediate) {
	var timeout;

	return function () {
		let context = this;
		let args = arguments;
		let callNow = immediate && !timeout;
		let later = function () {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};

		clearTimeout(timeout);

		timeout = setTimeout(later, wait);

		if (callNow) func.apply(context, args);
	};
};

// ----------------------------------
// DETECTION HELPERS
// ----------------------------------

/**
 * Touch Detection
 */
Helpers.isTouch = function () {
	return 'ontouchstart' in window;
};

/**
 * Detect transitionend event.
 */
Helpers.transitionEndEvent = function () {
	var t;
	var el = document.createElement('fakeelement');
	var transitions = {
		'transition': 'transitionend',
		'OTransition': 'oTransitionEnd',
		'MozTransition': 'transitionend',
		'WebkitTransition': 'webkitTransitionEnd'
	};

	for (t in transitions) {
		if (el.style[t] !== undefined) {
			return transitions[t];
		}
	}
};

/**
 * Detect animationend event.
 */
Helpers.animationEndEvent = function () {
	var t;
	var el = document.createElement('fakeelement');
	var transitions = {
		'animation': 'animationend',
		'OAnimation': 'oAnimationEnd',
		'MozAnimation': 'animationend',
		'WebkitAnimation': 'webkitAnimationEnd'
	};

	for (t in transitions) {
		if (el.style[t] !== undefined) {
			return transitions[t];
		}
	}
};

/**
 * Request animation frame
 *
 * @return {function}
 */
Helpers.requestAniFrame = function () {
	return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		function (callback) {
			window.setTimeout(callback, 1000 / 60);
		};
};

// ----------------------------------
// CHECK HELPERS
// ----------------------------------

/**
 * based on https://github.com/inuyaksa/jquery.nicescroll/blob/master/jquery.nicescroll.js
 *
 * @return {boolean}
 */
Helpers.hasParent = function (e, p) {
	if (!e) return false;
	var el = e.target || e.srcElement || e || false;
	while (el && el != p) {
		el = el.parentNode || false;
	}
	return (el !== false);
};

/**
 * Check if element is in a specific context
 * and return state as boolean
 *
 * @param {Object} el - Element, which will be checked
 * @param {Object} context - Context element, in which our element could persists
 *
 * @return {boolean}
 */
Helpers.checkElementInContext = function (el, context) {
	var state = el.closest(context).length === 1;

	return state;
};

/**
 * Check if node is really the same
 *
 * @param {Object} obj1 - Object, which we want to check
 * @param {Object} obj2 - Element, which we want to check against equality
 *
 * @return {boolean}
 */
Helpers.checkNodeEquality = function (obj1, obj2) {
	return (obj1 === obj2);
};


/**
 * Check if element is in viewport
 *
 * @param {Object} el - Object, which we want to check
 * @param {boolean} useBounds - if true, whole element must be visible
 *
 * @return {boolean}
 */
Helpers.isInViewport = function (el, useBounds) {
	var el = el[0];
	var top = el.offsetTop;
	var left = el.offsetLeft;
	var width = el.offsetWidth;
	var height = el.offsetHeight;
	var cond = false;

	while (el.offsetParent) {
		el = el.offsetParent;
		top += el.offsetTop;
		left += el.offsetLeft;
	}

	if (useBounds) {
		cond = top >= window.pageYOffset && left >= window.pageXOffset && (top + height) <= (window.pageYOffset + window.innerHeight) && (left + width) <= (window.pageXOffset + window.innerWidth);
	} else {
		cond = top < (window.pageYOffset + window.innerHeight) && left < (window.pageXOffset + window.innerWidth) && (top + height) > window.pageYOffset && (left + width) > window.pageXOffset;
	}

	return cond;
};

// ----------------------------------
// LAYOUT HELPERS
// ----------------------------------

/**
 * Calculates the outer height for the given DOM element, including the
 * contributions of margin.
 *
 * @param {Object} el - the element of which to calculate the outer height
 * @param {boolean} outer - add padding to height calculation
 *
 * @return {number}
 */
Helpers.getOuterHeight = function (el, outer) {
	var height = el[0].offsetHeight;

	if (outer) {
		var style = getComputedStyle(el[0]);
		height += parseInt(style.paddingTop) + parseInt(style.paddingBottom);
	}
	return height;
};

/**
 * Templatizer cleans up template tags and insert the inner html before the tag
 *
 * @param {Object} obj - Contains all properties
 * @param {string} obj.templateName - Defines the template name which is a selector from the element
 */
Helpers.templatizer = function (obj) {
	if (!'content' in document.createElement('template')) return;
	if (!obj && !obj.templateName) throw new Error('You need to path a template namespace as string!');

	Helpers.querySelectorArray({
		el: obj.templateName
	}).forEach(function (tpl) {
		let parent = tpl.parentNode;
		let content = tpl.content.children[0];

		parent.insertBefore(content, tpl);
	});
};

// ----------------------------------
// OTHER HELPERS
// ----------------------------------

/**
 * Determine click handler.
 *
 * @return {string}
 */
Helpers.clickHandler = function () {
	return Helpers.isTouch() ? 'touchstart' : 'click';
};

/**
 * Check if script is already added,
 * and returns true or false
 *
 * @param {string} url - URL to your script
 *
 * @return {boolean}
 */
Helpers.checkScript = function (url) {
	var x = document.getElementsByTagName("script");
	var scriptAdded = false;

	for (var i = 0; i < x.length; i++) {
		if (x[i].src == url) {
			scriptAdded = true;
		}
	}
	return scriptAdded;
};

/**
 * Load scripts asynchronous,
 * check if script is already added,
 * optional check if script is fully loaded and
 * execute callack function.
 *
 * @param {string} url - URL to your script
 * @param {function} callbackFn - callback function
 * @param {Object} callbackObj - this context
 */
Helpers.loadScript = function (url, callbackFn, callbackObj) {
	var scriptAdded = Helpers.checkScript(url);

	if (scriptAdded === false) {
		var script = document.createElement("script");
		script.src = url;
		document.body.appendChild(script);
	}

	if (callbackFn && typeof(callbackFn) === "function") {
		if (scriptAdded === true) {
			callbackFn.apply(callbackObj);
		} else {
			script.onreadystatechange = function () {
				if (x.readyState == 'complete') {
					callbackFn.apply(callbackObj);
				}
			};
			script.onload = function () {
				callbackFn.apply(callbackObj);
			};
		}
	}

	return false;
};

if ('classList' in document.documentElement) {
	Helpers.hasClass = function (elem, c) {
		return elem.classList.contains(c);
	};
	Helpers.addClass = function (elem, c) {
		elem.classList.add(c);
	};
	Helpers.removeClass = function (elem, c) {
		elem.classList.remove(c);
	};
} else {
	Helpers.hasClass = function (elem, c) {
		return Helpers.regExp(c).test(elem.className);
	};
	Helpers.addClass = function (elem, c) {
		if (!Helpers.hasClass(elem, c)) {
			elem.className = elem.className + ' ' + c;
		}
	};
	Helpers.removeClass = function (elem, c) {
		elem.className = elem.className.replace(Helpers.regExp(c), ' ');
	};
}

/**
 * Add/Update parameters for given url
 *
 * @param {url} url - URL on which parameters should be added / changed
 * @param {string} paramName - parameter name
 * @param {string} paramValue - parameter value
 *
 * @return {string} url
 */
Helpers.addParamToUrl = function (url, paramName, paramValue) {
	var urlParts = url.split('?');
	var i = 0;
	var baseUrl;
	var params;

	if (urlParts.length === 1) {
		return (url + '?' + paramName + '=' + paramValue);
	}

	baseUrl = urlParts[0];
	params = urlParts[1].split('&');

	for (i; i < params.length; i++) {
		if (params[i].indexOf(paramName + '=') > -1) {
			params[i] = paramName + '=' + paramValue;
			return (baseUrl + '?' + params.join('&'));
		}
	}

	return (baseUrl + '?' + params.join('&') + '&' + paramName + '=' + paramValue);
};

export default Helpers;