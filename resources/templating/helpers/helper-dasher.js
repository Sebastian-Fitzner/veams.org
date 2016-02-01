var Alias = require('./alias');

(function () {
	module.exports.register = function (Handlebars, options) {

		/*
		 * Dasher helper.
		 *
		 * @return String
		 */
		Handlebars.registerHelper('dasher', function (block) {
			var content = block.replace(' ', '-');
			return content;
		});
	};
}).call(this);
