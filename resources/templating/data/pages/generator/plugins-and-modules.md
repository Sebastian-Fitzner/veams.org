### General Modules

There are standard grunt modules we use. These are:

 * [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean) - Clean your directories.
 * [grunt-concurrent](https://github.com/sindresorhus/grunt-concurrent) - Run grunt tasks concurrently.
 * [grunt-contrib-cssmin](https://github.com/gruntjs/grunt-contrib-cssmin) - Minify your CSS.
 * [grunt-htmlhint](https://github.com/yaniswang/grunt-htmlhint) - Check your html for errors.
 * [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint) - Check your js for errors.
 * [grunt-jsbeautifier](https://github.com/vkadam/grunt-jsbeautifier) - Format your js and html files.
 * [grunt-combine-mq](https://github.com/frontendfriends/grunt-combine-mq) - When you use mixins for media queries in your SASS files, you can combine your media queries with this module.
 * [jit-grunt](https://github.com/shootaroo/jit-grunt) - A JIT(Just In Time) plugin loader for Grunt.
 * [time-grunt](https://github.com/sindresorhus/time-grunt) - Displays the execution time of grunt tasks.

### Optional Grunt Modules

***But you can also apply additional addons and grunt modules to your project. Just choose specific ones:***

* [grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer) - Autoprefixer parses CSS and adds vendor-prefixed CSS properties using the Can I Use database.
* [grunt-bless](https://github.com/stefanjudis/grunt-bless) - Split your css after you reach size limit for ie9.
* [grunt-browser-sync](https://npmjs.org/package/grunt-browser-sync) - Sync and auto-reload your local server over multiple devices.
* [grunt-connect-proxy](https://github.com/drewzboto/grunt-connect-proxy) - A preconfigured proxy for developing clientside API interfaces in your prototype, with CORS, Basic Authentication support and http methods.
* [grunt-contrib-compass](https://github.com/gruntjs/grunt-contrib-compass) - Come on, use Node-SASS instead of Compass.
* [grunt-contrib-htmlmin](https://github.com/gruntjs/grunt-contrib-htmlmin) - Minify your HTML files.
* [grunt-contrib-requirejs](https://github.com/gruntjs/grunt-contrib-requirejs) - Optimize RequireJS projects using r.js.
* [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify) - Minify files with UglifyJS.
* [grunt-csscomb](https://github.com/csscomb/grunt-csscomb) - The grunt plugin for sorting CSS properties in specific order.
* [grunt-dr-svg-sprites](https://github.com/drdk/grunt-dr-svg-sprites) - Generate SVG Sprites with css files. We created a fork to get placeholders in scss files.
* [grunt-grunticon](https://github.com/filamentgroup/grunticon) - Generate SVG-URI-SASS files with png fallbacks.
* [grunt-image-size-export](https://github.com/Sebastian-Fitzner/grunt-image-size-export) - Pass a folder of images to this module and get infos like width, height, filename, path and breakpoints.
* [grunt-jsdoc](https://github.com/krampstudio/grunt-jsdoc) - This plugin enables you to integrate the generation of comments based documentation into your Grunt build.
* [grunt-modernizr](https://github.com/Modernizr/grunt-modernizr) - grunt-modernizr sifts through your project files, gathers up your references to Modernizr tests and outputs a lean, mean Modernizr machine.
* [grunt-packager](https://github.com/bobbor/grunt-packager) (only executable when your project.jspackcfg is configured) - package your js.
* [grunt-phantomas](https://github.com/stefanjudis/grunt-phantomas) - PhantomJS-based web performance metrics collector and monitoring tool.
* [grunt-photobox](https://github.com/stefanjudis/grunt-photobox) - Take snapshots from homepage.
* [grunt-postcss-separator](https://github.com/Sebastian-Fitzner/grunt-postcss-separator) - Split up your Data-URI or anything else into a separate CSS file.
* [grunt-sass](https://github.com/sindresorhus/grunt-sass) - You want to use Libsass instead of Compass to render your stylesheets 10 times faster? Here you go!
* [grunt-svgmin](https://github.com/sindresorhus/grunt-svgmin) - Minify SVG using SVGO.
* [grunt-version](https://github.com/kswedberg/grunt-version) - Grunt task to handle versioning of a project.

### Assemble

We use Assemble as template engine. Assemble is a component and static site generator that makes it dead simple to build modular sites, documentation and components from reusable templates and data.
You want to know more? Here you go: [assemble.io](http://assemble.io)

In your installation routine you can choose specific modules for Assemble:

 * assemble-contrib-permalinks
 * assemble-contrib-sitemap
 * assemble-related-pages