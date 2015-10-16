module.exports = {
	ajax: {
		files: '<%= paths.src %>/ajax/**/*.{json,html}',
		tasks: 'sync:ajax'
	},
	handlebars: {
		files: '<%= paths.src %>/js/modules/**/*.hbs',
		tasks: ['handlebars', 'replace:jsTemplates']
	},
	assets: {
		files: [
			'<%= paths.src %>/assets/**/*'
			],
		tasks: 'sync:assets'
	},
	scss: {
		files: '<%= paths.src %>/scss/**/*',
		tasks: 'sass:defaults',
	    options: {
			spawn: false
		}
	},
	sassdoc: {
		files: '<%= paths.src %>/bower-components/veams-sass/**/*.scss',
		tasks: 'sassdoc',
	    options: {
			spawn: false
		}
	},
	universal: {
		files: '<%= paths.src %>/scss/universal.scss',
		tasks: 'sass:universal'
	},
	templating: {
		files: ['<%= paths.src %>/{templating/data,templating/layouts,templating/partials,templating/pages}/**/{,*/}*.{md,hbs,json}'],
	    tasks: ['assemble'],
	    options: {
			spawn: false
		}
	}
};