### Icon Workflow with Data URI

Our goal is to get Data-SVG-URIs for browsers with SVG support and PNG fallback for older browsers with a specific class (.no-svg). This will be achieved with grunticon, grunt-replace and a custom mixin in SCSS.

**So here it is how you can use the icons workflow:**

1. Put your icons in _assets/img/svg/icons_.
2. Start the following command:

``` bash
grunt icons
```

**Add your icons via:**

``` scss
@include grunticon(icon-name);
```

The output looks like this:
``` css
toggle:after {
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20standalone%3D%22no%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20id%3D%22Untitled-Seite%25201%22%20viewBox%3D%220%200%2036%2031%22%20style%3D%22background-color%3A%23ffffff00%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2236px%22%20height%3D%2231px%22%3E%20%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%2236%22%20height%3D%227%22%20fill%3D%22%23272727%22%2F%3E%20%3Crect%20x%3D%220%22%20y%3D%2212%22%20width%3D%2236%22%20height%3D%227%22%20fill%3D%22%23272727%22%2F%3E%20%3Crect%20x%3D%220%22%20y%3D%2224%22%20width%3D%2236%22%20height%3D%227%22%20fill%3D%22%23272727%22%2F%3E%3C%2Fsvg%3E');
  background-repeat: no-repeat;
}

.no-svg .toggle:after {
  background-image: url('../img/png_icons/menu.png');
  background-repeat: no-repeat;
}
```

### Icon Workflow with SVG Sprites and SCSS

Our goal is to get SVG sprites for browsers with SVG support and PNG fallback for older browsers with a specific class. This will be achieved with `grunt-dr-svg-sprites`.

To get a fully customized output, we provide a custom template for our file generation (see `helpers/templates/svg-sprites/stylesheet.hbs`). Furthermore we use the `selector` option to get placeholders instead of classes.

**So here it is how you can use the sprites workflow:**

1. Put your icons in _assets/img/svg/icons_.
2. Start the following command:

``` bash
grunt icons
```

**This command does the following:** 

1. When you checked `grunt-svgmin` in your installation process this task will minify svg icons and put them into another folder called `svgmin`
2. Your sprites will be generated in the folder `sprites` and a scss file (`_sprites-icon-sprite.scss`) will be created. 
3. A string replacement will be executed to change the path in your scss file.

Now you can use your new file `_sprites-icons-sprite.scss` in which you can find all your icons with defined dimensions and positions: 

#### Example file
``` scss
@mixin sprites-bg-svg() {
	background-image: url("../img/sprites/spritys-icons-sprite.svg");
}
%sprites-bg-svg {
	@include sprites-bg-svg();
}
@mixin sprites-bg-size() {
	background-size: 2170px 105px;
}
%sprites-bg-size {
	@include sprites-bg-size();
}

@mixin sprites-bg-png() {
	background-image: url("../img/sprites/spritys-icons-sprite-medium.png");
}
%sprites-bg-png {
	@include sprites-bg-png();
}
@mixin spritys-adresse() {
	@extend %sprites-bg-size;
	@extend %sprites-bg-svg;
	width: 29px;
	height: 29px;
	background-position: 0 0;
	.no-svg & {
		@extend %sprites-bg-png;
	}
}

%spritys-adresse {
	@include spritys-adresse();
}

@mixin spritys-auto() {
	@extend %sprites-bg-size;
	@extend %sprites-bg-svg;
	width: 30px;
	height: 26px;
	background-position: -35px 0;
	.no-svg & {
		@extend %sprites-bg-png;
	}
}

%spritys-auto {
	@include spritys-auto();
}
```

**Add your icon just via `extend` or `include`:**

``` scss
@extend %sprite-icon-name;
```

### Why do we need `extends` and `includes`?

Because in Sass you can not use `extends` in media queries. Therefore we roll out the icons file with both variations. 