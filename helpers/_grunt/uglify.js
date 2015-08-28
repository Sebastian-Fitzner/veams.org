module.exports = {
	options: {
		compress: {
			global_defs: {
				"DEBUG": false
			},
			dead_code: true
		},
		sourceMap: false
	},
	dist: {
		files: [
			{
				expand: true,
				cwd: '<%= paths.dev %>/js/',
				src: '**/*.js',
				dest: '<%= paths.dev %>/js/'
			}
		]
	}
};