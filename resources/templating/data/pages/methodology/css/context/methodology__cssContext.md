### General

To add a context we use two dashes like `.my-class--context`. Context styles are completely independent from other styles and should never override our global `data` styles of the instrument.

### Example Snippet

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

### What is the advantage to use a context? 

Context styles are scoped. They are a complete independent style for an instrument (Block or Component).