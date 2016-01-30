### Folder structure

``` bash
├───helpers
│   ├───configs
│   ├───templates
│   │   ├───grunticon-template
│   │   └───svg-sprites
│   ├───_grunt
│   └───_gulp
├───resources
│   ├───ajax
│   ├───assets
│   │   ├───fonts
│   │   ├───img
│   │   │   ├───svg
│   │   │   │   └───icons
│   │   └───media
│   ├───bower-components
│   ├───js
│   ├───scss
│   │   ├───globals
│   │   ├───icons
│   │   └───utils
│   │       ├───extends
│   │       └───mixins
│   └───templating
│       ├───data
│       ├───helpers
│       ├───layouts
│       ├───pages
│       └───partials
├───_dist
└───_output
```

Looks complicated? Not at all. Let's split it up and see which folder stands for what.

_By the way: When you generate your project and do not see some folders it is because of your settings._

### General

We have three main folders.
* The **helpers** folder contains all configuration and task files.
* The **resources** folder is your working directory.
* The **_output** folder is your output directory. Here are your compiled files. **You never ever edit a file in that folder.**

All folders can be renamed, because they are defined as variables in our `config.js`. This file you can find in `helpers`. You do not have to worry about the tasks files.

### Root

The _root_ directory contains a few important files:

* **.bowerrc:** Contains your directory definition for your bower components.
* **.gitignore:** Standard file to ignore directories and files.
* **.yo-rc.json:** Configuration file for Veams. You should delete it or save it with another name.
* **bower.json:** JSON file for your web packages.
* **Gruntfile.js:** Configuration file for Grunt. It contains registered tasks. Important: All task configurations are outsourced in the helpers folders.
* **Gulpfile.js:** Configuration file for Gulp. It contains registered tasks. Important: All task configurations are outsourced in the helpers folders.
* **package.json:** JSON file for your Grunt/npm modules.
* **README.md:** Please add some custom informations in your README.md.

### Helpers

The _helpers_ folder contains your grunt/gulp tasks and configuration files for specific grunt/gulp modules.

``` bash
├───helpers
│   ├───configs
│   ├───templates
│   │   ├───grunticon-template
│   │   └───styleguide-template
│   │       └───public
│   └───_grunt
```

* **_grunt:** Contains Configuration files for your grunt modules.
* **_gulp:** Contains Configuration files for your gulp modules.
* **configs:** Configuration files for specific grunt/gulp tasks like `jscs`.
* **templates:** Contains templates for grunticon or svg-sprites.
* **config.js:** Contains all variables which are used in `Gulpfile.js` or `Gruntfile.js` and Veams.

### Resources

The _resources_ folder is your working directory. That is the folder in which you will work most of the time.

``` bash
├───resources
│   ├───ajax
│   ├───assets
│   │   ├───fonts
│   │   ├───img
│   │   │   ├───svg
│   │   │   │   └───icons
│   │   └───media
│   ├───bower-components
│   ├───js
│   ├───scss
│   │   ├───blocks
│   │   ├───components
│   │   ├───docs
│   │   ├───globals
│   │   ├───icons
│   │   └───utils
│   │       ├───extends
│   │       └───mixins
│   └───templating
│       ├───data
│       │   ├───blocks
│       │   └───globals
│       │   └───pages
│       ├───docs
│       ├───helpers
│       ├───layouts
│       ├───pages
│       └───partials
```

#### ajax:

Contains your ajax files like JSON and HTML. All files will be copied to the **_output** directory.

#### assets:

Contains your assets like fonts, images, media, icons and more. All sub folders will be copied to the **_output** directory.

#### js:

Contains your javascript files. When you change these files, they will be synced with/packed in your **_output** directory.

#### scss:

Contains all your Sass/SCSS files which will be compiled via Node-Sass.

#### templating:

Contains your layouts, pages, partials/includes, data and documentation section. We use HandlebarsJS (Assemble) as template engine.

