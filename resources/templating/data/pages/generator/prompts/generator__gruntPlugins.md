### General

For Grunt and our Gruntfile Veams uses the grunt module [load-grunt-configs](https://github.com/creynders/load-grunt-configs/) to split up the file in multiple task files. 
You can find these task files in the following directory:

```
helpers/_grunt
```

### General Grunt Plugins

Veams provides standard Grunt plugins. These are:

 * [grunt-concurrent](https://github.com/sindresorhus/grunt-concurrent) - Run grunt tasks concurrently.
 * [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean) - Clean your directories.
 * [grunt-contrib-cssmin](https://github.com/gruntjs/grunt-contrib-cssmin) - Minify your CSS.
 * [grunt-sass-globber](https://github.com/Sebastian-Fitzner/grunt-sass-globber) - This module provides a simple globbing functionality for Sass files like the ruby gem `sass-globbing`.
 * [jit-grunt](https://github.com/shootaroo/jit-grunt) - A JIT(Just In Time) plugin loader for Grunt.
 * [time-grunt](https://github.com/sindresorhus/time-grunt) - Displays the execution time of grunt tasks.

### Optional Grunt Plugins

***But you can also apply additional Grunt plugins to your project. Just choose specific ones:***

* [grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer) - Autoprefixer parses CSS and adds vendor-prefixed CSS properties using the Can I Use database.
* [grunt-bless](https://github.com/stefanjudis/grunt-bless) - Split your css after you reach size limit for ie9.
* [grunt-browser-sync](https://npmjs.org/package/grunt-browser-sync) - Sync and auto-reload your local server over multiple devices.
* [grunt-browserify](https://github.com/jmreidy/grunt-browserify) - Use a node-style require() to organize your browser code and load modules installed by npm.
* [grunt-combine-mq](https://github.com/frontendfriends/grunt-combine-mq) - When you use mixins for media queries in your Sass files, you can combine your media queries with this module.
* [grunt-connect-proxy](https://github.com/drewzboto/grunt-connect-proxy) - a preconfigured proxy for developing clientside API interfaces in your web app, with CORS, Basic Authentication support and http methods.
* [grunt-contrib-handlebars](https://www.npmjs.com/package/grunt-contrib-handlebars) - Precompile Handlebars templates to JST file.
* [grunt-contrib-htmlmin](https://github.com/gruntjs/grunt-contrib-htmlmin) - Minify your HTML files.
* [grunt-contrib-requirejs](https://github.com/gruntjs/grunt-contrib-requirejs) - Optimize RequireJS projects using r.js.
* [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify) - Minify files with UglifyJS.
* [grunt-csscomb](https://github.com/csscomb/grunt-csscomb) - The grunt plugin for sorting CSS properties in specific order.
* [grunt-dr-svg-sprites](https://github.com/drdk/grunt-dr-svg-sprites) - Generate SVG Sprites with scss files. We provide a custom template to generate mixins and extends.
* [grunt-grunticon](https://github.com/filamentgroup/grunticon) - Generate SVG-URI-SASS files with png fallbacks.
* [grunt-image-size-export](https://github.com/Sebastian-Fitzner/grunt-image-size-export) - Pass a folder of images to this module and get information like width, height, filename, path and breakpoints.
* [grunt-modernizr](https://github.com/Modernizr/grunt-modernizr) - grunt-modernizr sifts through your project files, gathers up your references to Modernizr tests and outputs a lean, mean Modernizr machine.
* [grunt-phantomas](https://github.com/stefanjudis/grunt-phantomas) - PhantomJS-based web performance metrics collector and monitoring tool.
* [grunt-photobox](https://github.com/stefanjudis/grunt-photobox) - Take snapshots from homepage
* [grunt-postcss-separator](https://github.com/Sebastian-Fitzner/grunt-postcss-separator) - Split up your Data-URI or anything else into a separate CSS file.
* [grunt-responsive-images](https://github.com/andismith/grunt-responsive-images) - Produces images at different sizes (be sure you have installed GraphicsMagick).
* [grunt-svgmin](https://github.com/sindresorhus/grunt-svgmin) - Minify SVG using SVGO.
* [grunt-version](https://github.com/kswedberg/grunt-version) - Grunt task to handle versioning of a project.