### How does Veams works?

Veams needs a configuration file, which is referenced in your `package.json`. 

``` bash
  "veams": {
    "configFile": "helpers/config.js"
  }
```

In this config file we have all necessary options. 

#### Inserter

Furthermore Veams uses [`Inserter`](https://www.npmjs.com/package/inserter) which can insert any snippet into any file by using tags or ids in comments.

### Configuration File

In the configuration file you need to define an options object. 

The following lines are possible:

``` bash
var srcPath = 'resources'; 
var config = {};

config.options = {
	paths: {
		// Veams config paths
		partial: srcPath + '/partials',
		global: srcPath + '/partials/globals',
		block: srcPath + '/partials/blocks',
		component: srcPath + '/partials/components',
		utility: srcPath + '/partials/utilities',
		scss: srcPath + '/scss',
		js: srcPath + '/js',
		endpoints: [
			srcPath + '/js/main.js',
			srcPath + '/templates/pages'
		],
		blueprints: {}
	}
};

module.exports = config;
```

#### In Detail

Let's take a closer look:

- `partial` - folder path to all partials
- `global` - folder path to global partials
- `block` - folder path to block partials
- `component` - folder path to component partials
- `utility` - folder path to utility partials
- `scss` - folder path to scss
- `js` - folder path to JavaScript
- `endpoints` - Files or folders where the INSERTPOINTS are used
- `blueprints` - object which contains custom templates for your blueprints

The folder paths will be used to copy the files into them: 

- `global`
- `block`
- `component`
- `utility`
- `scss`
- `js`

The endpoints files and folders will be used to search into them after INSERTPOINT comments and insert the predefined snippets.
- `endpoints`

The blueprints object can be used to define custom templates 
- `blueprints`

### Insertpoint Comments & Keys

INSERTPOINT comments are used to identify areas in your files where snippets can be placed. 

#### Example of Insertpoint in Handlebars

``` hbs
<div class="main-section">
    \{{! @INSERTPOINT :: @ref: component-partial }}
</div>

<div class="footer-section">
    \{{! @INSERTPOINT :: @ref: slide-fox, @keep: false }}
</div>

```

The INSERTPOINT comments reference (`@ref`) an id (`@id`) or a tag (`@tag`) in blueprints or Veams-Components.

#### Generic tags

Here are typical generic tags you can use in your project:

- Partials: `component-partial`, `block-partial`, `utility-partial`, `global-partial`
- SCSS: `scss-import`
- JavaScript: `js-import`, `js-events`, `js-init-once-v3`, `js-init-once-v2`, `js-init-v3`, `js-init-v2`