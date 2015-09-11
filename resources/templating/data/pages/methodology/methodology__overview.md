### General Overview

Veams-Methodology uses specific instruments to structure your web application. In general it splits up your project in three main instruments. These are:

* Regions (in Layouts)
* Components
* Blocks

Every instrument has specific attributes. Let's take a look.

### Regions

`Regions` are areas in our layout which can be filled with custom content. **They are not reusable.**

1. `Regions` are only defined in your layout files.
2. `Regions` subdivide your layout.

Here is an image to illustrate region areas:

![alt text](/img/temp/regions.jpg "Regions")

This image is actually borrowed from Drupal.org.

#### Examples

* Logo Region in Header
* Navigation Region in Header
* Stage Region
* Main Content Region
* Sidebar Region
* Footer Region

You want to know more? See: [Veams-Methodology Regions](/veams-methodology/regions.html)

### Components

`Components` have a very important role. **They are reusable.**

1. `Components` are mostly related to a content context. 
2. The content in `components` is variable and will change on different contexts/pages.
3. `Components` are generic partials which can be used all over your project.

#### Examples

* `<article>` - Articles can be used in teasers or on pages, content sections and so on.
* `<figure>` - Figures can be placed in an article or teaser or carousel.
* `<picture>` - Pictures can be placed in figures.
* teaser - When you use teasers in sliders and other modules and the content is flexible then it should be a component.
* list

You want to know more? See: [Veams-Methodology Components](/veams-methodology/components.html)


### CSS Rules

Each instrument should get a specific prefix. It will look like this:

* `.r-` prefix for `regions` 
* `.b-` prefix for `Blocks` 
* `.c-` prefix for `Components` 

**Global Styles for your Instruments**

When we have global styles we use a `data` attribute. 

In general we use `data-css="prefix-instrument"`. 

**CSS Styling Rules**

When we modify an instrument we have to differentiate between a context or modifier style.

#### CSS Modifier Change:

A modifier change is a very simple change. This could be a different background color, float direction or font-size.

This rule should be declared with `.is-` and is only changing a small context.

#### Context Styles

To add custom styles we use a context which is separated with two dashes like `.my-class--context`. Context styles are completely independent from other styles and should never override our global `data` styles of the instrument.

In other words, context styles are self-contained. This could be a complete style for a `block`, `component` or `module` in a specific context.

#### Example

The class of a block section looks like this: 

``` scss
.b-aside-content {}
```

**When we modify a sidebar block to display a specific status, we add an `.is-` class.**

``` scss
.b-aside-content {
	background: #fff;
	
	&.is-dark {
    	background: #000; // status styles
	}
}
```

**When we have to restyle our block because it has a complete layout change in another context (like in a module) we declare our context with two dashes. This context is completely independent from the main style of the block.**

``` scss
.b-aside-content {
	background: #fff;
}

.b-aside-content--faq {
    background: #000; // complete style is changed
}
```

Not that difficult, is it?

You want to have an in-depth look? See: [Veams-Methodology CSS](/veams-methodology/css.html)

### JavaScript Binding

To bind our JavaScript to our DOM elements we do not use classes. We just use `data`-attributes:

#### `data-js-module="my-module`
#### `data-js-options='{"my": "json"}'`



Therefore the folder structure looks like this:

``` bash
├───data
│   ├───blocks
│   └───pages
│
├───scss
│   ├───blocks
│   ├───components
│   └───layouts
│
└───templating
    ├───layouts
    ├───pages
    └───partials
        ├───blocks
        └───components
```








#### How To Write your Layouts

Layouts should be build with `\{{#block}}` and `\{{#extend}}`. That makes it really easy for us to replace predefined `Regions`.

**Important Facts**

- the complete layout should be really written in our layout file. That means `<header>`, `<main>` und `<footer>` will not be outsourced in partials.
- to extend layouts with layouts is useful and reduces duplicate mark up
- `Regions` are visible in our layout files
