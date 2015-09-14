### What is the responsibility of Atoms?

With Atoms we use a mechanism to identify a specific event handler. That means, an Atom has the following responsibility:

 1. Bind an element to a view
 2. Be part of a Module

### How do we distinguish Atoms?

When we use Atoms, we add a `data-js-atom` attribute to our markup. The declaration helps other developers to identify JavaScript binding.

#### Example Snippet

``` hbs
<a href="#id4" class="c-cta" data-js-atom="toggle-close"></a>
```

### What is the advantage?

By using Atoms we immediately see which elements in your markup are used in your Modules. Therefore developers which are specialised in markup and do not program any JavaScript has a simple way to detect elements with JavaScript functionality. 