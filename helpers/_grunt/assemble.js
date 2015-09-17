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
			'category',
			'categoryType',
			'type'
		]
	},
	veamsSass: {
		options: {
		},
		files: [{
			cwd: '<%= paths.src %>/templating/pages/sass',
			dest: '<%= paths.dev %>/sass',
			expand: true,
			flatten: false,
			src: ['**/*.hbs']
		}]
	},
	veamsJS: {
		options: {
		},
		files: [{
			cwd: '<%= paths.src %>/templating/pages/javascript',
			dest: '<%= paths.dev %>/js',
			expand: true,
			flatten: false,
			src: ['**/*.hbs']
		}]
	},
	veamsComponents: {
		options: {
		},
		files: [{
			cwd: '<%= paths.src %>/templating/pages/components',
			dest: '<%= paths.dev %>/components',
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
			dest: '<%= paths.dev %>/methodology',
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