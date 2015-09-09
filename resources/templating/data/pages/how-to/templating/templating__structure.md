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

### Reusable Templating with Assemble

Wouldn't it be nice to have a scalable project? That is no problem at all, if you know what you do.

#### Main facts to build a scalable project:

 1. Content/Data should be outsourced with JSON and markdown files
 2. JSON files hold your basic data, `mergeData` defines options and flexible data like IDs
 3. General templates are very reusable
 4. Document your code