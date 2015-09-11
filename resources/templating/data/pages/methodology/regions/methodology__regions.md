### General 

Because images speak louder than words, here is an image to illustrate `Regions`:

![alt text](/img/temp/regions.jpg "Regions")

That's why `Regions` are not reusable. 

1. `Regions` are only defined in your layout files.
2. `Regions` subdivide your layout.

This image is actually borrowed from Drupal.org.


### Why do we use `Regions`?

By using `Regions` we separate layout styles from our other instruments (`Components` and `Blocks`). The main benefit is drop-in replacement. 

In example we can just replace our `logo`-block and replace it with a `language-switcher` block without worrying about layout issues.  

### Structure

When we use `regions`, we prefix them with `r-` (or `_r-` for scss files). The declaration helps us structuring our code base.

#### Example Snippet

``` hbs
<div class="r-header">
	<div class="header__inner is-container is-table-lyt">
		<div class="r-header-left">
		</div>
		<div class="r-header-right">
		</div>
	</div>
</div>
```

### File/Folder Structure

Every region is defined in our layout (`lyt-default.hbs`). 

### Styles and Sass Structure

For each layout section we create a Sass file. In this layout Sass file we define our regions. 

The folder can look like this: 

``` bash
├───scss
	└───layout
			_header.scss
			_main.scss
			_footer.scss
```

[You want to know, how we write our Sass files?](/how-to/sass/structure.html) 

### Examples

* Header Region
* Logo Region in Header
* Navigation Region in Header
* Stage Region
* Main Content Region
* Sidebar Region
* Footer Region

#### lyt-default.hbs
{{embed "resources/templating/data/code/layouts/lyt-default.hbs"}}

