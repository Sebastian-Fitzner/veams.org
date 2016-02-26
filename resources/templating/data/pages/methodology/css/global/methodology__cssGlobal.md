### General

When we have global styles for our instrument, we use a `data-css` attribute. 

These `data` styles are shared for all modifiers in the file.

### Example Snippet

``` html
<article class="c-article--default" data-css="c-article">
</article>
```

### What is the advantage to use global styles with data-attributes? 

There is no advantage at all, because you can also use `mixins` or `extends`. But it is a declarative way to make your global style visible through your markup.