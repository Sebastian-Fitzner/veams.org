module.exports = {
	bsFiles: {
		src: [
			'<%= paths.dev %>/css/*.css',
			'<%= paths.dev %>/js/**/*.js',
			'<%= paths.dev %>/**/*.html'
		]
	},
	options: {
		port: 3002,
		host: "localhost",
		server: {
			baseDir: '<%= paths.dev %>',
			index: "index.html"
		},
		watchTask: true,
		ghostMode: {
			clicks: true,
			scroll: true,
			links: true,
			forms: true
		}
	}
};