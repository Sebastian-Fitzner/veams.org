module.exports = {
	options: {
		outputStyle: 'nested',
		sourceMap: true
	},
	defaults: {
		cwd: '<%= paths.src %>/scss/',
		src: [
			'styles-veams.scss',
			'styles-veams-generator.scss',
			'styles-veams-methodology.scss',
			'styles-veams-js.scss',
			'styles-veams-components.scss',
			'styles-veams-sass.scss'
		],
		dest: '<%= paths.dev %>/css/',
		expand: true,
		ext: '.css'
	}
};