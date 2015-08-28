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
			'underscore'
		],
		transform: [
			[
				"babelify", {
				"stage": 0
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
			'<%= paths.dev %>/js/main.js': '<%= paths.src %>/js/main.js'
		}
	},
	dist: {
		files: {
			'<%= paths.dev %>/js/main.js': '<%= paths.src %>/js/main.js'
		}
	}
};