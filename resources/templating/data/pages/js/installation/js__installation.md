### Installation with Bower

When you have `Bower` already installed just execute:

``` bash
bower install veams-js --save
```

### Dependencies in Veams-JS

At the current state we have to install the following libraries and frameworks: 

- jQuery*
- ExoskeletonJS*
- touchSwipe (only necessary for carousel module)
- document-register-element (only necessary for Custom Elements)
- HandlebarsJS (only necessary for our modules)
- respimage (polyfill for `<picture>`, can be replaced or deleted if not necessary)

_*Can be deleted if you do not want to use our modules_

### Installation of Dependencies 

To install the dependencies just execute `npm i myCustomLibs --save`.

#### Example 

``` bash 
npm i jquery exoskeleton touchswipe handlebars respimage --save
```

### Build the Stuff

To build the JavaScript and compile it to ES5 Veams-JS needs Browserify (and Babelify). That's why Veams-Generator includes `grunt-browserify`. 

You haven't used Veams-Generator but want to try Veams-JS? In Veams-JS there is also a config file included, see `helpers/_grunt/browserify.js`.
