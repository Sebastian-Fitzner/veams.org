### Installation with Veams-Cli

Just choose a [Veams-Component](http://examples.veams.org/) and do the following: 

``` bash
veams install veams-component rte
```

To shorten that you can also execute: 

``` bash
veams -i vc rte
```

The bower component will be downloaded and all files will be placed in the right directory. 

_When you want to use a Veams-Component which involves JavaScript you need to be sure to use Veams-JS!_ 

### Installation without Veams-Cli

If you want to install it with Bower and just want to do the all the boring copy and paste tasks manually, here you go: 

``` bash
bower install veams-component-rte --save
```

### How does this work?

Veams brings blueprints (our Veams-Component), the configuration file and `INSERTPOINT`s together. 
 
To get more informations about this, see: 
- [How To Install Blueprints](/veams-cli/blueprint/install.html)

This combination makes it possible to install custom bower components, too!