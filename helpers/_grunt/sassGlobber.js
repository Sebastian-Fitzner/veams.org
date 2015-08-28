module.exports = {
	options: {
		sassRoot: '<%= paths.src %>/scss',
		source: 'styles.scss',
		output: 'styles.tmp.scss'
	},
	dev: {
		options: {
			watch: true
		}
	},
	dist: {
		options: {
			watch: false
		}
	}
};