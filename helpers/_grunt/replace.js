module.exports = {
	spriteUrl: {
		src: ['<%= paths.src %>/scss/icons/_sprites-icons-sprite.scss'],             // source files array (supports minimatch)
		dest: '<%= paths.src %>/scss/icons/_sprites-icons-sprite.scss',               // destination directory or file
		replacements: [
			{
				from: '../../assets/img/',                                      // string replacement
				to: '../img/'
			}
		]
	}
};