var libs = [
	'jquery',
	'exoskeleton',
	'handlebars',
	'respimage',
	'touchswipe'
];

module.exports = {
	options: {
		external: [
			'backbone',
			'underscore'
		],  // Reset this here because it's not needed
		transform: [
			[
				"babelify", {
				"stage": 0,
				"ignore": ['<%= paths.src %>/js/vendor/highlight.pack.js']
			}
			]
		]
	},
	dev: {
		options: {
			browserifyOptions: {
				debug: true
			},
			watch: true
		},
		files: {
			'<%= paths.dev %>/js/main.js': ['<%= paths.src %>/js/main.js', '!<%= paths.src %>/js/vendor/**/*.js']
		}
	},
	dist: {
		options: {
			external: [
				'backbone',
				'underscore'
			]
		},
		files: {
			'<%= paths.dev %>/js/main.js': ['<%= paths.src %>/js/main.js', '!<%= paths.src %>/js/vendor/**/*.js']
		}
	}
};