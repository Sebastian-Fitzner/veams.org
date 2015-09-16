### General

Veams-JS is a simple starter kit with some optional key benefits:

1. ES Harmony Syntax (you can use CommonJS if you like)
2. Models, Views and Collections via BackboneJS | ExoskeletonJS | AmpersandJS
3. Ajax Module Handling
4. Helper functions written in VanillaJS 
5. HandlebarsJS as frontend template engine
6. Custom Elements support
7. Flexibility by using Design Patterns (Publish/Subscribe and Mediators)

### ES Harmony

For our current development stack we use ES Harmony which gets compiled to ES5. 

The benefit of classes, arrow function and block scoping outweigh the additional code.

#### Dependencies 

To compile ES Harmony to ES5 we use [Browserify](http://browserify.org/) and [Babel](https://babeljs.io/). 

### Models, Views and Collections

We add [ExoskeletonJS](http://exosjs.com/) as standard framework to our project scope. This gives us the possibility to scale our projects in a simple way. 

### Ajax Module Handling

The `main.js` uses a core class which contains a render method. This method can be executed with a specific node context. Each module in this context will be initialized. Really easy, isn't it?

### Helper functions

Veams-JS includes a helpers object with helper functions. These functions are completely written in VanillaJS so that you can easily use them without any dependencies. 

### HandlebarsJS

With Veams-JS you can use precompiled HandlebarsJS templates in custom modules. To precompile templates we provide a grunt task in Veams-Generator. 

### Custom Elements

With [document-register-element](https://github.com/WebReflection/document-register-element) Veams-JS adds the possibility to use Custom Elements in your application.

### Design Patterns

By using [Publish/Subscribe](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript) and [Mediators](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#mediatorpatternjavascript) Veams-JS provides a way to separate concerns, decouple modules and add flexibility to your application. 

We highly suggest to read [Learning JavaScript Design Patterns](http://addyosmani.com/resources/essentialjsdesignpatterns/book/).

### Provided Modules 

We have to admit that many modules are in development phase. All files in the `modules` folder are optional and work in progress. Keep that in mind.