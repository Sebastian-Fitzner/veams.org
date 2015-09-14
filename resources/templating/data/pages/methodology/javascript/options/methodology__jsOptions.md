### What is the responsibility of Options?

With Options we have a mechanism to add alternatives to your Module. An Option has the following responsibility:

 1. Overriding standard options which are defined in our Module
 2. Providing a valid JSON format

### How do we distinguish Options?

When we use Options, we add a `data-js-option` attribute to our markup. The declaration helps other developers to identify an override.

#### Example Snippet

``` hbs
<header class="header" data-js-module="sticky" data-js-options='{"myKey": "myValue"}'></header>
```

### Syntax

In the example above you can see, that we use a single quotation mark to wrap our JSON string.

### What is the advantage?

By using Options in markup you can provide a possibility to control Options of a Module in your backend environment.
