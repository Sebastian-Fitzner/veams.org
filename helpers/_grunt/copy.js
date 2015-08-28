module.exports = { 
	dist: {
		cwd: '<%= paths.dev %>/',
		dest: '<%= paths.dist %>',
		expand: true,
		src: ['**']
	}
};