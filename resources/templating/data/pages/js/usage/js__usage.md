### How to use

Just copy the files you need into the `js` folder in your project. But let's dive in to get a grasp.

### Main Files

To start of just add the following files to your `js` root directory.

- `app.js` 
- `main.js`
- `utils/helpers.js`
- `utils/events.js`
- `modules/_global/module.js`

#### app.js

The `app.js` defines the namespace of your application. Furthermore in this file you setup all frameworks. 

This file is written in plain JavaScript.

#### main.js

`Main.js` contains all modules and is the main entry point. Here you declare the initialization of your modules. 

#### helpers.js

`Helpers.js` exports many helper functions which will be used all over your application.

This file is written in plain JavaScript.

#### events.js

`Events.js` contains a constant which will be used in our Pub/Sub system. 

#### module.js

`Module.js` exports a class which does the following things:

1. Merge options 
2. Save references like `this.el`, `this.$el` and `this.options`
2. Fire up the `initialize` method
3. Fire up the `bindEvens` method in `initialize`

### Modules

All files in the `modules` folder are optional and work in progress. Keep that in mind.

There are `scss` and `hbs` files for some modules, which you can use in your project. 

### Initializing and Event Binding

To initialize our Modules we use a custom `loadModule` function which you should used in the `main.js`. 

Furthermore we expect that you be well versed with our [`Veams-Methodology`](/methodology/javascript/modules.html). In this section we explain how we define our markup and provide options. 
