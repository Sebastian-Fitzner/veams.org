Veams-cli gives you the possibility to install custom components, block or partial based on Veams blueprint.

You can start to install a blueprint with:

``` bash
veams install blueprint [path] [type]
```

1. `[path]` is the absolute path to your blueprint. 
2. `[type]` is just the definition of your blueprint (component, block, custom). 

To support an automated installation, you need to make sure you have the following setup:

### Config File

_This is included in every new project scaffolded with version 1.0.1 of Veams-Cli!_

When you create a new project, there is a config file (`config.js`) in `helpers/` folder. This config file contains some important options for Veams. 

To get this options, Veams needs a reference to this file in your package.json: 

``` json
"veams": {
	"configFile": "helpers/config.js"
}
```

### Blueprints Structure

There are some important facts you need to know. First of all, we use `Inserter` to insert snippets into your project files. 

Another fact is, that your blueprint needs to have a specific structure. This structure is provided by generating a blueprint with Veams which looks like this:

``` bash
└───blueprint
    ├───data
    ├───js
    ├───partials
    ├───scss
    └───usage
```

In the usage folder there is a `README.md` which contains the snippets. This can look like this:

```
# blueprint

This blueprint is based on the blueprint of Veams-Components.

## Usage

### Include: Page

hbs
\{{! @INSERT :: START @id: slider, @tag: component-partial }}
\{{#with blueprint-bp}}
	\{{> c-blueprint}}
\{{/with}}
\{{! @INSERT :: END }}

### Include: SCSS

scss
// @INSERT :: START @tag: scss-import // 
@import "components/_c-blueprint";
// @INSERT :: END

### Include: JavaScript

#### Import
js
// @INSERT :: START @tag: js-import // 
import Blueprint from './modules/blueprint/blueprint';
// @INSERT :: END

#### Initializing in Veams V3
js
// @INSERT :: START @tag: js-init-v3 // 
/**
 * Init Blueprint
 */
Helpers.loadModule({
	domName: 'blueprint',
	module: Blueprint,
	context: context
});
// @INSERT :: END
```

You can see these weird comments starting with `@INSERT`? These are very important, because we use them to include the inner content into our project files by using `@ref` to the tag (`@tag`) or id (`@id`). 

### Project Setup

If you want to insert the snippets above, you need to make sure to use `@ref` in your files. The reference is the tag or id which we defined in our `README.md` located in the blueprint folder. 

For example you want to insert all components snippets into one page, then just add the following `INSERTPOINT`: 

``` hbs
<h1>My custom page</h1>

\{{! @INSERTPOINT :: @ref: component-partial }}

```

In your JavaScript files you can do the following: 

``` js

/*** @INSERTPOINT :: @ref: js-import */

$(document).ready(function () {

// @INSERTPOINT :: @ref: js-init-v3

});
```

To see all available options of Inserter just visit: https://www.npmjs.com/package/inserter