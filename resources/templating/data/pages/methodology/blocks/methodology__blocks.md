### General 

`Blocks` are partials which are very simple to understand. 

1. Blocks are unique snippets, this means you can add an `id` to it.  
2. Blocks can contain components. 
3. They are **not reusable**.

You do not have to use `blocks` when you think it is not necessary - this is up to you.  

### Why do we use `Blocks`?

We use `Blocks`, because ...  

1. ... sometimes we need to create simple snippets without thinking about generalization
2. ... we need to define unique elements which should not be used a second time on the same page 

### Structure

When we use `blocks`, we prefix them with `b-` (or `_b-` for scss files). The declaration helps us structuring our code base.

#### Example Snippet

``` hbs
<nav class="b-breadcrumb" role="navigation" id="breadcrumb"></nav>
```

### File/Folder Structure

When you use a Template Engine, it is important to create a folder for your blocks. 

Our block folder structure can look like this: 

``` bash
    └───partials
        └───blocks
               b-footer-copy.hbs
               b-logo.hbs
               b-toggle.hbs
               b-nav.hbs
               b-aside-content.hbs
               b-sitemap.hbs

```

### Styles and Sass Structure

The styles are scoped to the block. 

For each block we create a scss file. The folder can look like this: 

``` bash
├───scss
	└───blocks
			_b-logo.scss
			_b-release.scss
			_b-footer-copy.scss
```

[You want to know, how we write our Sass files?](/how-to/sass/structure.html) 

### Examples

Here are some examples: 

* Logo - Content Block
* Navigation - Content Block
* Footer Content - Content Block
* Search Bar - Content Block

#### b-logo.hbs
{{embed "resources/templating/data/code/blocks/b-logo.hbs"}}

#### b-release.hbs
{{embed "resources/templating/data/code/blocks/b-footer-copy.hbs"}}
