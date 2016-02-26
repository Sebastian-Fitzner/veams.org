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

Context styles are scoped. They are a complete independent style for an instrument (Block or Component). Therefore we do not have any inheritance problems. 

### Example

A Sass file can look like this: 

#### _c-teaser.scss

``` scss
/* ===================================================
TEASER COMPONENT
=================================================== */

/* ---------------------------------------------------
Global Styles
--------------------------------------------------- */
[data-css="c-teaser"] {
	.teaser__link {
	}
	.teaser__wrapper {
		@include float;

		margin-top: 1rem;
	}
	.teaser__date {
	}
	.teaser__headline {
		font-size: 2rem;
		font-weight: $font-bold;
		font-family: $font-family;
		margin-bottom: 1rem;
	}
	.teaser__content {
	}
	.teaser__footer {
	}
}

/* ---------------------------------------------------
Context: Home Teasers
--------------------------------------------------- */
.c-teaser--home {
	@include span-columns(3);
	@include omega(4n);
	margin-top: 1.5rem;
	margin-bottom: 3rem;

	.teaser__wrapper {
		position: relative;
	}

	.teaser__headline {
		text-align: center;
	}

	.teaser__figure {
		z-index: 1;
	}

	.teaser__content {
		font-size: 1.8rem;
		text-align: center;
	}
}

/* ---------------------------------------------------
Context: Intro Teasers
--------------------------------------------------- */
.c-teaser--intro {
	@include span-columns(2.4);
	@include omega(5n);
	margin-top: 1.5rem;
	margin-bottom: 1.5rem;

	.teaser__link {
		background-color: transparent;
		color: color(highlight-dark);
		text-decoration: none;
		transition: all $transition-duration $transition-ease-method;
		display: block;

		&:hover {
			background-color: color(highlight-main);
		}
	}

	.teaser__wrapper {
		position: relative;
	}

	.teaser__headline {
		text-align: center;
	}

	.teaser__figure {
		z-index: 1;
		margin-bottom: 1rem;
	}

	.teaser__content {
		font-family: $font-family;
		font-size: 2rem;
		line-height: 1.45;
		text-align: center;
	}
}
```