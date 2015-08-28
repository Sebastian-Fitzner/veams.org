module.exports = {
	'teaser-home': {
		options: {
			sizes: [
				{
					name: '-320',
					width: 320,
					quality: 80
				},
				{
					name: '-320_2x',
					width: 640,
					quality: 40
				},
				{
					name: '-480',
					width: 480,
					quality: 80
				},
				{
					name: '-480_2x',
					width: 960,
					upscale: true,
					quality: 40
				},
				{
					name: '-640',
					width: 320,
					quality: 80
				},
				{
					name: '-640_2x',
					width: 640,
					upscale: true,
					quality: 40
				},
				{
					name: '-768',
					width: 400,
					quality: 80
				},
				{
					name: '-768_2x',
					width: 800,
					quality: 40
				},
				{
					name: '-769',
					width: 500,
					quality: 80
				},
				{
					name: '-769_2x',
					width: 1000,
					upscale: true,
					quality: 40
				}
			]
		},
		files: [
			{
				expand: true,
				src: ['**.{jpg,gif,png}'],
				cwd: '<%= paths.src %>/assets/img/temp/base/teaser-home',
				dest: '<%= paths.src %>/assets/img/temp/pictures/teaser-home'
			}
		]
	}
};