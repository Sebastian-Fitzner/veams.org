module.exports = {
	options: {
		assets: '<%= paths.dev %>',
		data: '<%= paths.src %>/templating/data/**/*.json',
		helpers: '<%= paths.src %>/templating/helpers/**/*.js',
		layoutdir: '<%= paths.src %>/templating/layouts/',
		layout: false, 
		partials: [
			'<%= paths.src %>/templating/partials/**/*.hbs',
			'<%= paths.src %>/templating/layouts/*.hbs'
		],
		collections: [
			'sitemap',
			'type'
		]
	},
	veamsSCSS: {
		options: {
		},
		files: [{
			cwd: '<%= paths.src %>/templating/pages/scss',
			dest: '<%= paths.dev %>/veams-scss',
			expand: true,
			flatten: false,
			src: ['**/*.hbs']
		}]
	},
	veamsMethodology: {
		options: {
		},
		files: [{
			cwd: '<%= paths.src %>/templating/pages/methodology',
			dest: '<%= paths.dev %>/veams-methodology',
			expand: true,
			flatten: false,
			src: ['**/*.hbs']
		}]
	},
	veamsGenerator: {
		options: {
		},
		files: [{
			cwd: '<%= paths.src %>/templating/pages/generator',
			dest: '<%= paths.dev %>/generator',
			expand: true,
			flatten: false,
			src: ['**/*.hbs']
		}]
	},
	veams: {
		options: {
		},
		files: [{
			cwd: '<%= paths.src %>/templating/pages/',
			dest: '<%= paths.dev %>/',
			expand: true,
			flatten: false,
			src: ['*.hbs']
		}]
	}
};