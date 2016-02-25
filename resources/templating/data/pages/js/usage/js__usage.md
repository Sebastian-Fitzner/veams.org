### Main Files

To start of you need to make sure you have following files in your `js` root directory.

- `app.js` 
- `main.js`
- `utils/helpers.js`
- `utils/events.js`
- `modules/_global/module.js`

#### app.js

The `app.js` defines the namespace of your application. Furthermore in this file you setup all frameworks. 

This file is written in plain JavaScript.

#### main.js

`main.js` contains all modules and is the main entry point. Here you declare the initialization of your modules. 

#### helpers.js

`helpers.js` exports many helper functions which will be used all over your application.

This file is written in plain JavaScript.

#### events.js

`events.js` contains a constant which will be used in our Pub/Sub system. 

#### module.js

`module.js` exports a class which does the following things:

1. Merge options 
2. Save references like `this.el`, `this.$el` and `this.options`
2. Fire up the `initialize` method
3. Fire up the `bindEvens` method in `initialize`


### Initializing and Event Binding

To initialize our Modules we use a custom `loadModule` function which you should be used in the `main.js`. 

Furthermore we expect that you be well versed with our [`Veams-Methodology`](/methodology/javascript/modules.html). In this section we explain how we define our markup and provide options. 
