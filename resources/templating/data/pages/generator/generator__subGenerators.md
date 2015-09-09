### Grunt-Plugins
This Sub-Generator gives you the possibility to scaffold a general task file which will be placed in your _helpers/_grunt_ folder.
Just install them with:

``` bash
yo veams:grunt
```

#### Here is an example
You want to add another grunt module like `grunt-image-size-export`. Just execute `yo veams:grunt` and choose your grunt-plugin. Press `Enter` and the task file will be placed in your *_grunt* folder. All dependencies will be automatically installed.

If you want to add the task to your `build` process, just modify your Gruntfile.js. That's it!

### Handlebars Template Helpers
This sub generator gives you the possibility to scaffold our custom HnadlebarsJS helper files to your custom helpers directory.
Just install them with:

``` bash
yo veams:templating
```

#### Example
You want to add our `wrapWith` helper. Just execute `yo veams:templating` and choose the helper. Press `Enter` and the helper file will be placed in your *templating* folder. All dependencies will be automatically installed.

### Backbone|Exoskeleton|Ampersand

We have integrated a Sub-Generator which you can pass one argument and one option to create a model, view or collection. 

#### Arguments (required)

The sub generator expects any of the following arguments:
* `Model`
* `Collection`
* `View`

#### Options

Furthermore you can pass an option with `--`. This option is only important when you do want to use AMD or CommonJS syntax instead of ES Harmony syntax.
* `--amd`
* `--commonjs`

#### Example

``` bash
yo veams:js View --commonjs
```