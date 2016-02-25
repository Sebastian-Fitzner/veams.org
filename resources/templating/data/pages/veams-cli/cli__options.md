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

Here you can find help instructions how you can use veams-cli. First of all, the first argument is a `command`. 
Further arguments are defined as `argument` for the `command`.

```bash 
veams command [arguments]
```

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

|Arguments | Shortcut | Description                            | Example |
|----------|----------|----------------------------------------|---------|
|block [name] | b | Add a block to your project  | `veams add block navigation` |
|component [name] | c | Add a component to your project   | `veams add component slider` |

#### Arguments for `install`

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

