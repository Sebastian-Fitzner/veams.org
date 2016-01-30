### Code Style Check 

`Veams` integrates a code style linter for programmatically enforcing your style guide. The linter is [JSCS](https://www.npmjs.com/package/jscs).

### Hint your HTML

HTMLHint is a Static Code Analysis Tool for HTML. 

`Veams` uses [gulp-htmlhint](https://www.npmjs.com/package/gulp-htmlhint) or [grunt-htmlhint](https://github.com/yaniswang/grunt-htmlhint).

### Hint your JavaScript

JSHint is a community-driven tool to detect errors and potential problems in JavaScript code. It is very flexible so you can easily adjust it to your particular coding guidelines and the environment you expect your code to execute in. 

`Veams` uses [gulp-jshint](https://www.npmjs.com/package/gulp-jshint) or [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint).

### End-to-End Testing

End-to-end testing is a technique used to test whether the flow of an application right from start to finish is behaving as expected. 

`Veams` uses WebdriverIO, which lets you control a browser or a mobile application with just a few lines of code (only Grunt at this state: [grunt-webdriver](https://github.com/webdriverio/grunt-webdriver)).