### Handlebars Helpers

**The most important resource for helpers is provided by Assemble.io. There are tons of useful helpers, so be sure you check out http://assemble.io/helpers/ ...**

#### WrapWith Helper (Block Helper)

Veams provides a helper to construct a general template snippet (`\{{#wrapWith}}`) which can be used as enclosing markup in our pages and/or partials. This helper is very useful when we have to build complex grid systems with repetitive code.

##### Example

**WrapWith Template**: 
``` hbs
<section class="section\{{#if options.classes}} \{{options.classes}}\{{/if}}">
   \{{{yield}}}
</section>
```

**Page**
``` hbs
\{{#wrapWith "section" classes="is-left"}}
   my custom content or 
   \{{> my-partial}}
\{{/wrapWith}}
```

#### Merge Data Objects (Block Helper)

Veams also added a helper to merge JSON objects. This is very useful because you can provide general data in a JSON file which can be extended in your page or partial with a simple JSON object. 

##### Example

``` hbs
\{{#mergeData myJsonFile data='{"myKey": "myValue"}'}}
   \{{> my-partial}}
\{{/mergeData}}
```

#### Limit JSON Output (Block Helper)

A limited output from our JSON file is a great way for using one content all over our project.

##### Example:

``` hbs
\{{#limit 0 3 data}}
	<li class="carousel__items__item">
		\{{> _carousel__content }}
	</li>
\{{/limit}}
```

You see that we have three parameters:

* `0` is your starting index (this can also be a variable)
* `3` is your ending item (this can also be a variable)
* `data` is your JSON reference

`\{{#limit}}` is a replacement for `\{{#each}}`. We prefer to use the `\{{#limit}}`-helper to have more control in our build workflow.

#### Repeat Elements (Block Helper)

To repeat the output from your JSON file or any other content we use a custom helper called `\{{#times}}`.

##### Example:

```
\{{#times 3}}
	<li class="carousel__items__item">
		\{{> _carousel__content }}
	</li>
\{{/times}}
```

The output will be that you have three `li`-elements. This helper is very useful for fast prototyping.

To go further we provide a `for` helper to build advanced loops.

##### Example:

```
\{{#for 0 10 2}}
	<li class="carousel__items__item">
		\{{> _carousel__content }}
	</li>
\{{/for}}
```
Here we go again with three parameters:

* `0` is your starting index (this can also be a variable)
* `10` is your ending item (this can also be a variable)
* `2` is your increment number (this can also be a variable)

So what do you got in your output file? Five `li`-elements because of our increment number.

#### If-Helper On Steroids (Block Helper)

The `\{{#if}}` helper is nice. But it has a few limitations. Operators can not be used. Here is the solution. Use the provided `\{{#xif}}` helper.

##### Example:

``` hbs
\{{#xif " this.menuLink === 'Home' || this.menuLink === 'Product' " }}
	\{{> _stage }}
\{{else}}
	\{{> _mini-stage }}
\{{/xif}}
```

You need to properly escape the string literals or just alternate single and double quotes like you see in this example. But that's it.

#### ifBlock-Helper for Extended Layouts (Block Helper) (Assemble)

The `\{{#ifBlock}}` helper is pretty handy for complex layouts. This helper checks when a block is set. When a block is not set the whole markup in your block helper will not be compiled.

##### Example:

``` hbs
\{{#ifBlock "navbar" }}
	<section class="region-a">
		\{{#block "navbar"}}\{{/block}}
	</section>
\{{/ifBlock}}
```

In Mangony you can use aN inline helper which provides a similar functionality.

#### Example:

``` hbs
{{#if (content "intro")}}
    <div class="r-intro">
        {{#block "intro"}}{{/block}}
    </div>
{{/if}}
```

#### Autolink Helper (Assemble)

Generate relative links with the helper `\{{autolink}}` from the "current page" to other destination pages.

Very nice about this helper is, that you do not have to worry about your file output structure. It doesn't matter if you generate your HTML files into a subfolder.

I use it to create my sitemap and navigation.

##### Example: _nav.hbs

``` hbs
<ul class="nav navbar__nav">
    \{{#withSort pages 'data.sortOrder'}}
        <li>
            <a href="\{{autolink}}" \{{#is ../../page.dest this.dest}} class="active"\{{/is}}>\{{data.menuLink}}</a>
        </li>
    \{{/withSort}}
</ul>
```

This helper is integrated in Veams. When you want to know more about the helper, here you go: https://github.com/helpers/handlebars-helper-autolink