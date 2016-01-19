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
		files: [
			'<%= paths.src %>/scss/**/*',
			'veams-components/**/*.scss'
		],
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
		files: [
			'veams-components/**/{,*/}*.{md,hbs,json}',
			'<%= paths.src %>/{templating/data,templating/layouts,templating/partials}/**/{,*/}*.{md,hbs,json}'
		],
		tasks: ['assemble'],
		options: {
			spawn: false
		}
	},
	tplComponents: {
		files: [
			'<%= paths.src %>/templating/pages/components/**/{,*/}*.{md,hbs,json}'
		],
		tasks: ['assemble:veamsComponents'],
		options: {
			spawn: false
		}
	},
	tplGenerator: {
		files: [
			'<%= paths.src %>/templating/pages/veams-cli/**/{,*/}*.{md,hbs,json}'
		],
		tasks: ['assemble:veamsCli'],
		options: {
			spawn: false
		}
	},
	tplJS: {
		files: [
			'<%= paths.src %>/templating/pages/js/**/{,*/}*.{md,hbs,json}'
		],
		tasks: ['assemble:veamsJS'],
		options: {
			spawn: false
		}
	},
	tplMethodology: {
		files: [
			'<%= paths.src %>/templating/pages/methodology/**/{,*/}*.{md,hbs,json}'
		],
		tasks: ['assemble:veamsMethodology'],
		options: {
			spawn: false
		}
	},
	tplVeams: {
		files: [
			'<%= paths.src %>/templating/pages/*.{md,hbs,json}'
		],
		tasks: ['assemble:veams'],
		options: {
			spawn: false
		}
	},
	tplSasss: {
		files: [
			'<%= paths.src %>/templating/pages/sass/**/*.{md,hbs,json}'
		],
		tasks: ['assemble:veamsSass'],
		options: {
			spawn: false
		}
	}
};