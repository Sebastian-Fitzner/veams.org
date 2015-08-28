### Grunt Modules
This sub generator gives you the possibility to scaffold a general task file which will be placed in your _helpers/_grunt_ folder.
Just install them with:

``` bash
yo prototype:grunt
```

#### Here is an example
You want to add another grunt module like `grunt-data-separator`. Just execute `yo prototype:grunt` and choose your grunt module. Press `Enter` and the task file will be placed in our *_grunt* folder. All dependencies will be automatically installed.

If you want to add the task to your `build` process, just modify your Gruntfile.js. That's it!

### Assemble Helpers
This sub generator gives you the possibility to scaffold our custom assemble helper files to your custom helpers directory.
Just install them with:

``` bash
yo prototype:assemble
```

#### Here is an example
You want to add our `panel` helper. Just execute `yo prototype:assemble` and choose the helper. Press `Enter` and the helper file will be placed in our *assemble* folder. All dependencies will be automatically installed.

### BackboneJS
This sub generator gives you the possibility to scaffold:
 * A Backbone Model
 * A Backbone View
 * A Backbone Collection

The sub generator can be used anywhere you want.

#### Create a Backbone Model
``` bash
yo prototype:bm
```

#### Create a Backbone View
``` bash
yo prototype:bv
```

#### Create a Backbone Collection
``` bash
yo prototype:bc
```