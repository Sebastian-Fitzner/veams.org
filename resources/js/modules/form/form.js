import Helpers from '../../utils/helpers';
import App from '../../app';
import AppModule from '../_global/moduleView';

var $ = App.$;

class Form extends AppModule {
	constructor(obj) {
  var options = {};

  super(obj, options);
	}

	initialize() {
  this.form = this.$el.find('form');
	}

	render() {}
}

// Returns constructor
export default Form;
