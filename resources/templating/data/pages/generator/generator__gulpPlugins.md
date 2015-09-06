### General

For Gulp and our Gulpfile Veams use the node module [require-dir](https://www.npmjs.com/package/require-dir) to split up the file in multiple task files. 
You can find these task files in the following directory:

```
helpers/_gulp
```

### General Gulp Plugins

Veams provides standard (Gulp) plugins. These are:

* [del](https://www.npmjs.com/package/del) - Clean your directories.
* [gulp-sequence](https://www.npmjs.com/package/gulp-sequence) - Run gulp tasks in a sequence.
* [browser-sync](https://www.npmjs.com/package/browser-sync) - Sync and auto-reload your local server over multiple devices
* [gulp-notify](https://www.npmjs.com/package/gulp-notify) - Add notifications.
* [gulp-minify-css](https://www.npmjs.com/package/gulp-minify-css) - Minify your CSS.
* [gulp-filesize](https://www.npmjs.com/package/gulp-filesize) - Return the filesize in your console.

### Optional Gulp Plugins

***But you can also apply additional Gulp plugins to your project. Just choose specific ones:***

* [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) - Autoprefixer parses CSS and adds vendor-prefixed CSS properties using the Can I Use database.
* [gulp-bless](https://www.npmjs.com/package/gulp-bless) - Split your css after you reach size limit for ie9.
* [gulp-combine-mq](https://www.npmjs.com/package/gulp-combine-mq) - When you use mixins for media queries in your SASS files, you can combine your media queries with this module.
* [gulp-htmlmin](https://www.npmjs.com/package/gulp-htmlmin) - Minify your HTML files.
* [gulp-iconify](https://www.npmjs.com/package/gulp-iconify) - A mystical CSS icon solution, grunticon-like build system.
* [gulp-requirejs-optimize](https://www.npmjs.com/package/gulp-requirejs-optimize) - Optimize AMD modules in javascript files using the requirejs optimizer.
* [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) - Minify files with UglifyJS.