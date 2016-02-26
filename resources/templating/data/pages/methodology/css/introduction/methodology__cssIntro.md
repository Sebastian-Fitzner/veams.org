### General 

In Veams-Methodology every `HTML` element gets a class (that is not always possible but we can try it). 

Veams is partially using `BEM`. That's why our class systematic looks like this: 

#### Example Snippet

``` html
<article class="c-article--default" data-css="c-article">
	<header class="article__header">
		<h1 class="article__h1">The PG methodology is designed to be used in large, long lived websites and projects.</h1>
		<h2 class="article__h2">This is how we make our Sass structure scalable.</h2>
	</header>
	<div class="article__content">
	</div>
</article>
``` 

__The parent element is `c-article--default`. In general the classes of the child elements consists of the instruments name without any prefix and two `__`.__ 

### Don't 

Veams-Methodology does not use the following of `BEM`: 

``` html
<article class="c-article" data-css="c-article">
	<header class="article__header">
		<h1 class="article__header__h1">The PG methodology is designed to be used in large, long lived websites and projects.</h1>
		<h2 class="article__header__h2">This is how we make our Sass structure scalable.</h2>
	</header>
	<div class="article__content">
	</div>
</article>
``` 

**In Veams-Methodology we go only one level deep, because:** 

1. We try to avoid super long class names.
2. For real web applications this is more than enough to handle classes in one instrument.

### Instruments And Prefixing

The class systematic of Veams determines that we have to prefix our instruments (Regions, Components, Blocks, Utilities). As a result these instruments are very easy to recognize:

1. Regions (`.r-`)
2. Components (`.c-`)
3. Blocks (`.b-`)
4. Utilities (`.u-`)

_For Utilities prefixes are optional, because many frameworks already provides helper classes._ 

### File/Folder Structure

As a result we get a folders structure which is following the Veams-Methodology: 

**Sass**

``` cmd
├─scss
├───blocks
├───components
├───layouts (regions)
├───utilities
``` 

**Templating**

``` cmd
├─templating
├───layouts (regions)
├───pages
├───partials
├─────blocks
├─────components
├─────utilities
``` 