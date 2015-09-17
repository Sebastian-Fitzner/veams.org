## README: veams-website | version="0.1.1-4"

---------------------------------------------------
## Requirements for FE

* NodeJS (>= 0.12.0)
* Grunt

### Libsass
We use Libsass as standard SCSS compiler.


### Responsive Images
If you want to use an automated task to create responsive images you need to make sure that you have installed GraphicsMagick.

To build responsive images just start the task `pictures`.

---------------------------------------------------
## Frontend Methodology

We build veams-website with the PG Frontend Methodology: 
* http://methodology.veams.org/

---------------------------------------------------
## Setup

This project builds on following setup (please read requirements and getting started):

* PG Website: http://prototype-generator.com/
* PG Github: https://github.com/Sebastian-Fitzner/generator-pg

- We use [Grunt](http://gruntjs.com/)as our task runner
- We use [Assemble](http://assemble.io/) as our static site generator.
- We use [Git](#).
- The folder __node_modules__ won't be comitted into GIT. Use ```.gitignore``` to ignore folders or files.
- Git-commit-messages in english please.
- All issues are recorded in [Jira](#).
- Jira-Issues are commented in german/english.

---------------------------------------------------
## Browser-Support

- all modern desktop browsers: Firefox, Chrome, IE and Safari/Mac latest version
- also: IE 10
- all modern mobile browsers: iOS and Android latest two versions

---------------------------------------------------
## Responsive-Webdesign-Support

- Desktop
- Tablet
- Phone

### Responsive Images

You can use `grunt-responsive-images` to build all pictures with predefined presets.
To export this data you can use `grunt-image-size-export`.

### Breakpoints
- $bp-mobile-s: (max 320px);
- $bp-mobile-m: (max 480px);
- $bp-mobile-l: (max 640px);
- $bp-tablet-p: (max 768px);
- $bp-tablet-l: (max 1024px);
- $bp-desktop: (min 1025px);

---------------------------------------------------
## Team

- TPM/PM:
- Frontend:
- Backend: