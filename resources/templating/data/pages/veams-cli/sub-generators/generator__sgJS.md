### BackboneJS | ExoskeletonJS | AmpersandJS

We have integrated a Sub-Generator which you can pass one argument and one option to create a model, view or collection. 

### Arguments (required)

The sub generator expects any of the following arguments:
* `Model`
* `Collection`
* `View`

### Options

Furthermore you can pass an option with `--`. This option is only important when you do want to use AMD or CommonJS syntax instead of ES Harmony syntax.
* `--amd`
* `--commonjs`

### Example

``` bash
yo veams:js View --commonjs
```