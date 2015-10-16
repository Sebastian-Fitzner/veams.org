/*
 * Generated on 2015-08-27
 * generator-veams v6.0.0
 * http://prototype-generator.com/
 *
 * Copyright (c) 2015 Sebastian Fitzner
 * Licensed under the MIT license.
 */

'use strict';

/*
 * PERFORMANCE
 * 
 * 1. For performance reasons you should only matching one level down, if possible. 
 * 2. Try to keep your watch task clean. Do NOT watch everything (like icons).
 * 3. Add "spawn: false" to your watch task when you need to speed up your build.
 *
 */

var config = require('./helpers/config');

module.exports = function (grunt) {

	// load only used tasks and add fallbacks for those which cannot be find
	require('jit-grunt')(grunt, {
		'replace': 'grunt-text-replace'
	});
	// measures the time each task takes
	require('time-grunt')(grunt);

	// Load grunt configurations automatically
	var configs = require('load-grunt-configs')(grunt, config.options);

	// Define the configuration for all the tasks
	grunt.initConfig(configs);

	/*
	 *	SIMPLE TASKS
	 */

	// SASS Task
	grunt.registerTask('watchCSS', [
		'sassGlobber:dev',
		'sass:defaults'
	]);

	// Sprites Task
	grunt.registerTask('icons', [
		'dr-svg-sprites',
		'replace:spriteUrl'
	]);

	// JS Task
	grunt.registerTask('jsDev', [
		'handlebars',
		'replace:jsTemplates',
		'browserify:dev'
	]);// JS Task
	grunt.registerTask('jsDist', [
		'handlebars',
		'replace:jsTemplates',
		'browserify:dist',
		'uglify'
	]);

	// Picture Task (This task creates an additional JSON file with the path to your picture)
	grunt.registerTask('pictures', [
		'responsive_images',
		'imageSizeExport'
	]);

	// Build HTML Task
	grunt.registerTask('build-html', [
		'assemble'
	]);

	// HTML Hint Task (Check your HTML)
	grunt.registerTask('check-html', [
		'htmlhint'
	]);
	// JS Hint Task (Check you JS)
	grunt.registerTask('check-js', [
		'jshint'
	]);

	/*
	 *	ADVANCED TASKS	
	 */
	grunt.registerTask('server', [
		'jsDev',
		// 'jscs',
		'newer:assemble',
		'concurrent:syncing',
		'watchCSS',
		// 'connect:livereload',
		'browserSync',
		'watch'
	]);

	grunt.registerTask('build', [
		'clean:dev',
		'handlebars',
		'replace:jsTemplates',
		'browserify:dist',
		'uglify',
		'concurrent:syncing',
		'sassGlobber:dist',
		'sass:defaults',
		'combine_mq',
		'autoprefixer',
		'cssmin',
		'assemble',
		'sassdoc:dist',
		'concurrent:build'
	]);

	grunt.registerTask('default', [
		'server'
	]);

	// alias serve by grunt convention
	grunt.registerTask('serve', [
		'server'
	]);

	grunt.registerTask('dist', [
		'clean',
		'version:prerelease',
		'build',
		'copy:dist'
	]);

	grunt.registerTask('e2e', [
		'webdriver:e2e'
	]);


};