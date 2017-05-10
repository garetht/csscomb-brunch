# csscomb-brunch
Adds support for [CSScomb](http://csscomb.com/) to [brunch](http://brunch.io). Checkout how to easily write your own configuration to make your style sheets beautiful and consistent at [CSScomb's configuration instructions](https://github.com/csscomb/csscomb.js/blob/dev/doc/configuration.md).

## Usage
Install the plugin via npm with `npm install --save-dev csscomb-brunch`.

Or, manually add it to your `package.json` file:

* For example:

    ```javascript
    'devDependencies': {
      'csscomb-brunch': '^2.0.0'
    }
    ```

* Or use the GitHub URL:
    ```javascript
    'devDependencies': {
      'csscomb-brunch': 'garetht/csscomb-brunch'
    }
    ```

## Example Configuration
There are a number of ways to configure this plugin. By default, it uses CSScomb's predefined config called [csscomb](https://github.com/csscomb/csscomb.js/blob/dev/config/csscomb.json).

### Predefined Configuration
To use one of CSScomb's predefined configs edit your `brunch-config.js` file to set the `encoding` option. When not set, it defaults to `csscomb`:
```javascript
plugins: {
    csscomb: {
        encoding: 'zen' // options: 'zen', 'yandex', 'csscomb'
    }
},
```

### Custom Configuration
To build your own CSScomb config use CSScomb's [visual builder](https://github.com/csscomb/csscomb.js) or easily [write your own](https://github.com/csscomb/csscomb.js/blob/dev/doc/configuration.md#create-custom-config). Specify your own config file in `brunch-config.js` by setting the path to your file in `encoding: require('path/to/file')` , for example: 
```javascript
plugins: {
    csscomb: {
        encoding: require('./.csscomb.json') // this will use a file named '.csscomb.json' in your project root
   }
},
```

### Configuraiton Log
To see logged output of the CSScomb config, set this parameter in your `brunch-config.js` file. When not set, it defaults to false:
```javascript
plugins: {
    csscomb: {
        logConfig: true // defaults to false
   }
},
```

Here's an example of what the logged output looks like in terminal when `logConfig` is set to `true`. It displays the contents of the configuration file to aid debugging:

<img src='https://raw.githubusercontent.com/garetht/csscomb-brunch/master/log.png' width='320' alt='Example of logged output'>

## License
This software is released under the terms of the [MIT license](https://github.com/garetht/csscomb-brunch/blob/master/LICENSE).