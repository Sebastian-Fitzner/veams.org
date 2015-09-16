/**
 * @module initButton
 *
 * @author Sebastian Fitzner
 */

import App from '../../app';
import ButtonView from './button';
import AppModule from '../_global/module';

var $ = App.$;

class ButtonInit extends AppModule {
	/**
	 * Constructor fn for our class
	 *
	 * @see module.js
	 *
	 * @param {obj} obj - Object which is passed to our class
	 * @param {obj.el} obj - element which will be saved in this.el
	 * @param {obj.options} obj - options which will be passed in as JSON object
	 */
	constructor(obj) {
  var options = {};
  super(obj, options);
	}

	/**
	 * Initialize class
	 */
	initialize() {
  this.button = new ButtonView({
    el: this.$el,
    options: this.options
  });

  this.button.clickHandler = () => {
    App.Vent.trigger(this.options.globalEvent, {
      el: this.$el,
      options: this.options
    });
  };
	}

	render() {
  this.button.render();
	}
}

export default ButtonInit;
