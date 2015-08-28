### Scaffold your new prototype project

To generate your project just open your console, go to a specific project folder and type the following:

``` bash
yo prototype
```

That's it.

**Just answer the questions and generate your individual project with or without demo content.**

All dependencies and task files will be automagically downloaded and configured. You can start your project via:

``` bash
grunt
```

### Your project structure

Let's dive in and see our new structure:

``` bash
├───helpers
│   ├───configs
│   ├───templates
│   │   ├───grunticon-template
│   │   ├───sprites
│   └───_grunt
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
│   │   ├───global
│   │   ├───icons
│   │   └───utils
│   │       ├───extends
│   │       └───mixins
│   └───templates
│       ├───data
│       │   ├───blocks
│       │   └───global
│       │   └───pages
│       ├───docs
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

All folders can be renamed, because they are defined as variables in `Gruntfile.js`. You do not have to worry about the tasks files.

### Root

The _root_ directory contains a few important files:

* **.bowerrc:** Contains your directory definition for your bower components.
* **.gitignore:** Standard file to ignore directories and files.
* **.yo-rc.json:** Configuration file for PG. You can delete it but we prefer to submit it to see the initial project settings.
* **bower.json:** JSON file for your web packages.
* **config.rb:** If you use Ruby with Compass and SASS here you can configure your settings.
* **Gruntfile.js:** Configuration file for Grunt. It contains variables and registered tasks. Important: All task configurations are outsourced in the helpers folders.
* **package.json:** JSON file for your Grunt/npm modules.
* **README.md:** Please add some custom informations in your README.md.

### Helpers

The _helpers_ folder contains your grunt tasks and configuration files for specific grunt modules.

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
* **configs:** Configuration files for specific grunt tasks like csscomb and jsbeautifier.
* **templates:** Contains templates for your styleguide and grunticon.

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
│   │   ├───global
│   │   ├───icons
│   │   └───utils
│   │       ├───extends
│   │       └───mixins
│   └───templates
│       ├───data
│       │   ├───blocks
│       │   └───global
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

Contains all your SASS/SCSS files which will be compiled via Node-Sass or Compass.

If you want to use sass-globbing with Node-SASS and Grunt see [Features-Section](/getting-started/features.html).

#### templates:

Contains your layouts, pages, partials/includes, data and documentation section. We use Assemble as template Engine.

