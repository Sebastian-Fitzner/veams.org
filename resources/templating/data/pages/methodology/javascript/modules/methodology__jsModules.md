### What is the responsibility of Modules?

With Modules we use a mechanism to identify a scoped chunk of functionality. That means, a Module has the following responsibility:

 1. Initialisation
 2. Processing of options handling

### How do we distinguish Modules?

When we use Modules, we add a `data-js-module` attribute to our markup. The declaration helps other developers to identify JavaScript binding.

#### Example Snippet

``` hbs
<header class="header" data-js-module="sticky"></header>
```