Veams-cli gives you the possibility to 
- scaffold a new project
- scaffold a new component from scratch
- install Veams-JS
- install a Veams-Component (all or single components)
- install custom components from your system or from the bower component repository (based on Veams-Component blueprints)
- install template helpers
- install grunt modules
- add a new component or block to your project
- download Veams-Sass

### Usage 

The usage of Veams-Cli is simple. 

You have your __namespace__ (`veams`), followed by one __command__ (i.e. `add`), followed by further __arguments__ (i.e. `block navigation`)

##### In short this will look like this: 

**General**

```bash 
veams command [arguments]
```

**Example**

``` bash
veams add block navigation
```

That is the general handling. 


#### Commands

|Command     | Shortcut | Description |
|------------|----------|-------------------------------------------------------|
|add     | -a | Add a component or block to your project (@see Arguments for `add`) |
|help    | -h | Show the help. |
|install | -i | Install extensions (@see Arguments for `install`) |
|new     | -n | Create something new (@see Arguments for `new`) |
|update  | -u | Update veams-cli and all packages |
|version | -v | Show VEAMS version |

#### Arguments for `add`

_The adding process happens on the fly. You do not have any reference to an external source like in the install routines of Veams._

|Arguments | Shortcut | Description                            | Example |
|----------|----------|----------------------------------------|---------|
|block [name] | b | Add a block to your project  | `veams add block navigation` |
|component [name] | c | Add a component to your project   | `veams add component slider` |
|custom [name] [folder] | cu | Add a custom type to your project in a specific folder  | `veams add custom special generals` |
|utility [name] | u | Add a utility to your project   | `veams add utility grid-item` |

#### Arguments for `install`

_To install something with Veams there have to be a source for it, whether provided by Veams or by yourself._

|Arguments              | Shortcut | Description                         | Example |
|-----------------------|----------|-------------------------------------|--------|
|blueprint [path] [type]| bp | Install a blueprint based on Veams.  | `veams install blueprint C:\blueprint\slider component` |
|bower-component [registryName] [name] [type] | bc | Install a bower-component based on Veams. | `veams install bower-component custom-slider slider component (--S)` |
|grunt-module       | gm | Install a specific grunt module.    | `veams install grunt-module` |
|template-helper    | th | Install custom template helpers.    | `veams install template-helper` |
|veams-component [name] | vc | Install a specific veams-component. | `veams install veams-component slider (--S)` |
|veams-js               | vjs | Install veams-js.                   | `veams install veams-js (--S)` |

#### Arguments for `new`

|Arguments | Shortcut | Description                            | Example |
|----------|----------|----------------------------------------|---------|
|blueprint [name] | bp | Create a new blueprint from scratch.   | `veams new blueprint accordion` |
|project  | p | Create a new project from scratch.     | `veams new project` |

