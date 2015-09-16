### How to use

Just import the files you need for your project.

**Example:**

``` scss
@import "veams-reset"; // or "veams-normalize"
@import "veams";
@import "veams-animations"; // optional, because it adds keyframes to your css
```

### Main Files

To start of just import either `_veams-reset` or `_veams-normalize` at the beginning of your Sass file.

### `_veams-reset.scss`

`_veams-reset.scss` contains your resets, font-base size and settings: 
- _reset.scss
- _font-base.scss
- _settings.scss

### `_veams-normalize.scss`

`_veams-normalize.scss` contains your normalize.scss, font-base size and settings: 
- _normalize.scss
- _font-base.scss
- _settings.scss

### `_veams-helpers.scss`

`_veams-helpers.scss` contains helpers and layout mixins.

This file is imported in `_veams.scss`.

### `_veams.scss`

`_veams.scss` contains all major helpers and mixins.

### `_veams-animations`

`_veams-animations.scss` contains custom keyframes and animation sets. You have to import this file manually when you want to use it.