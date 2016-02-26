### Why Another Methodology?

There are many frontend methodologies out there. And I like a few of them. But I don't feel comfortable with them at all. 

**Most methodologies are scoped to `html` and `css`. To be more specific, these methodologies are only handling `class systematics`. But I think that is not enough.**

So I decide to go my own way of structuring projects. 

I am not reinventing the wheel. I just take out some pieces from BEM, take some parts from my backend experience (mainly Drupal development) and frontend expertise in various projects and get important exchange through the close dialogue with other developers.

### What Is The Difference?

Veams-Methodology is a system for your whole frontend stack. Typical questions - which Veams-Methodology is solving - are:

1. How to scope and differentiate units (Components, Blocks, Regions) in your `HTML`?
2. How to bind JavaScript to your DOM elements?
3. How to structure layouts?
4. How to write your classes?
5. How to extend your project?

### General Overview

#### Instruments To Cluster Your Markup

Veams-Methodology uses specific instruments to structure your web application. In general it splits up your project in four main instruments. These are:

* Regions (in layouts)
* Components
* Blocks
* Utilities

Every instrument has specific attributes.

#### JavaScript Handling

To bind our JavaScript to our DOM elements the Veams-Methodology do not use classes. It uses `data`-attributes which are graduated in:

- Module initialisation (`data-js-module`)
- Options handling (`data-js-options`)
- Event handling (`data-js-atom`)

_Of course it makes no sense to use this part of the methodology when your application involves a framework which is already using declarative bindings._

#### Class Systematics

In short Veams-Methodology integrates the following:

1. BEM similarities to scope styles
2. Prefix usage to differentiate between instruments
3. Global Styles for instruments
4. Modifier and context styles
5. Layout styles with Regions to separate concerns
