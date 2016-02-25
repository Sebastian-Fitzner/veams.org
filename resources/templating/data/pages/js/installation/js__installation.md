### Installation with Veams-Cli

Just do the following: 

``` bash
veams install veams-js
```

You can also shorten it: 

``` bash
veams -i vjs
```

The bower component will be downloaded and all files will be placed in the right directory. 

_Be sure you include `_get-media.scss` into your `styles.scss`._

### Installation without Veams-Cli

If you want to install it with Bower and just want to do the all the boring copy and paste tasks manually, here you go: 

``` bash
bower install veams-js --save
```

### Dependencies in Veams-JS

At the current state we have to install the following libraries and frameworks: 

- jQuery*
- ExoskeletonJS*
- touchSwipe (only necessary for carousel/slider module)
- document-register-element (only necessary for Custom Elements)
- HandlebarsJS (only necessary for some modules)
- respimage (polyfill for `<picture>`, can be replaced or deleted if not necessary)

_*Can be deleted if you do not want to use our modules_

### Installation of Dependencies 

To install the dependencies just execute `npm i myCustomLibs --save`.

#### Example 

``` bash 
npm i jquery exoskeleton touchswipe handlebars respimage --save
```

### Build the Stuff

To build the JavaScript and compile it to ES5 Veams-JS needs Browserify (and Babelify). That's why Veams includes `grunt-browserify`. 

You haven't used Veams but want to try Veams-JS? In Veams-JS there is also a config file included, see `helpers/_grunt/browserify.js`.
