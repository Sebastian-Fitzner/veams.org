module.exports = {
	icons: {
		options: {
			selector: function (filename, tokens) {
				var parts = [filename];
				if (tokens.prefix) {
					parts.unshift(tokens.prefix);
				}
				return parts.join("-");
			},
			template: "<%= paths.helpers %>/templates/svg-sprites/stylesheet.hbs",
			spriteElementPath: '<%= paths.src %>/assets/img/svg/icons',
			spritePath: "<%= paths.src %>/assets/img/sprites",
			cssPath: "<%= paths.src %>/scss/icons",
			// cssSvgPrefix: "svg",
			cssPngPrefix: "no-svg",
			cssPrefix: "_sprites",
			prefix: "sprites",
			sizes: {
				medium: 100
			},
			refSize: "medium",
			unit: 5,
			cssSuffix: "scss"
		}
	}
};