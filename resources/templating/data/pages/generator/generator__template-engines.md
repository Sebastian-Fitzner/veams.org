### Assemble

Assemble is a component and static site generator that makes it dead simple to build modular sites, documentation and components from reusable templates and data.

**You want to know more or want to have an in-depth look? Here you go: [assemble.io](http://assemble.io)**

### Assemble Plugins

In the installation routine you can choose specific modules for Assemble:

 * assemble-contrib-permalinks
 * assemble-contrib-sitemap
 * assemble-related-pages

### Extended Layouts

Assemble comes with another pretty nice helper to solve problems with complexity in layouts. This helpers are `\{{#block}}`,`\{{#extend}}` and `\{{#content}}` and makes it easy for us to extend specific sections in your layout. We suggest you add this in the prompts. 

 
### Templating Folder

Our setup looks like this:

``` bash
 ├───data
 ├───helpers
 ├───layouts
 ├───pages
 └───partials
     ├───_global
```

**data**

Contains your data like JSON or markdown files which will be used in your partials/pages/layouts. The structure of the folder should be easy to understand.

**helpers**

Custom helper files will be placed in this folder. As you can see, we provide some custom helpers. When you want to know more, see: [HandlebarsJS Custom Helpers](#custom-helpers)

**layouts**

Standard page layouts will be defined in this folder. This folder contains `lyt-default.hbs`.

**pages**

In this folder we place our pages. These pages can be organized in sub folders.

**partials**

The _partials_ folder contains all of our partials/includes/components.