module.exports = {
	dist: {
		options: {
			config: "<%= paths.helpers %>/task-configs/jscs.airbnb.json",
			force: false,
			fix: true
		},
		src: [
			"<%= paths.src %>/js/**/*.js"
		]
	}
};