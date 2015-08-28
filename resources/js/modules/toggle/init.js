var $ = require('jquery');
var App = require('../../app');
var Toggle = require('./ui-toggle');

"use strict";

var ui = App.ui;

ui.ToggleInit = Object.create(HTMLElement.prototype);

ui.ToggleInit.options = {};

ui.ToggleInit.View = null;

ui.ToggleInit.createdCallback = function() {

};

ui.ToggleInit.attachedCallback = function() {
  var options;

  if ($(this).data('cloned')) return;

  this.options = $(this).data('js-options');
  options = this.options;

  this.View = new Toggle({
    el: $(this),
    options: this.options
  });
};

ui.ToggleInit.detachedCallback = function() {
  if (!this.View) return;

  this.View.remove();
};

ui.ToggleInit.attributeChangedCallback = function(name, previousValue, value) {
  // implement code for handling attribute changes
};

document.registerElement('ui-toggle', {
  prototype: ui.ToggleInit
});

module.exports = ui.ToggleInit;
