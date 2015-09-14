module.exports = {
	options: {
		log: true
	},
	combineIt: {
		options: {
			beautify: false
		},
		expand: true,
		cwd: '<%= paths.dev %>/css/',
		src: '*.css',
		dest: '<%= paths.dev %>/css/'
	}
};