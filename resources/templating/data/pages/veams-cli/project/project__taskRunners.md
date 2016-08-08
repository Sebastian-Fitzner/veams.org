### What is a Task Runner?

A Task Runner is a tool to automate the work you have to do. Because we all know that performing repetitive tasks like minification, compilation, unit testing, linting, etc. is boring.

### Grunt

The Grunt ecosystem is huge and it's growing every day. With literally hundreds of plugins to choose from, you can use Grunt to automate just about anything with a minimum of effort.

Grunt is Veams major Task Runner. That's why Veams provides a ton of plugins you can choose from. 

### Gulp 

Gulp does not have that many plugins available. But Gulp prefers code over configuration and uses the power of node streams.

### Grunt & Gulp

When you want to use both at the same time, do it at your own risk. You will probably have to change a few settings. 
Furthermore Gulp will be your primary task runner. To support Grunt tasks in Gulp Veams uses [gulp-grunt](https://www.npmjs.com/package/gulp-grunt). 
