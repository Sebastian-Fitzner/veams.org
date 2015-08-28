import Helpers from '../../utils/helpers';
import App from '../../app';
var $ = App.$;

class AppModule {

	constructor(obj, options) {
  this.el = obj.el;
  this.$el = $(obj.el);
  this.options = options;

  this._options = obj.options;
  this.initialize();
	}

	get _options() {
  return this.options;
	}

	set _options(options) {
  this.options = Helpers.defaults(options || {}, this.options);
	}

	initialize() {
  this.bindEvents();
	}

	bindEvents() {
	}

	render() {
	}
}

export default AppModule;
