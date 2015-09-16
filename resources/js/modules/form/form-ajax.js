import Helpers from '../../utils/helpers';
import App from '../../app';
import AppModule from '../_global/module';

var $ = App.$;

class FormAjax extends AppModule {
	constructor(obj) {
  let options = {
    submitOnChange: true,
    eventName: 'form:complete'
  };

  super(obj, options);
	}

	initialize() {
  this.form = this.$el;
  this.fields = $('input', this.form);

  super.initialize();
	}

	bindEvents() {
  this.form.on('submit', this.fetchData.bind(this));

  if (this.options.submitOnChange) {
    this.fields.on('blur change', this.fetchData.bind(this));
    App.Vent.on('select:changed', this.fetchData.bind(this));
  }
	}

	fetchData(e) {
  let el;

  if (e && e.preventDefault) {
    el = e.currentTarget;
    e.preventDefault();
  } else {
    el = e;
  }

  let action = this.form.attr('action');
  let method = this.form.attr('method');
  let serialize = this.form.serialize();
  let url = action + '?' + serialize;

  $.ajax({
    dataType: "json",
    url: url
  })
			.done((data) => {
  App.Vent.trigger(this.options.eventName, {
    data: data,
    el: el
  });
			}).
			fail(function() {
  console.log("error");
			});
	}

	render() {
	}
}

// Returns constructor
export default FormAjax;
