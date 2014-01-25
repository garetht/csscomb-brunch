csscomb-brunch
==============
Gives Brunch workflows the ability to sort CSS properties.

Installing
===
**csscomb-brunch** is designed to be an npm package for use with the build tool Brunch. To install this as a dependency for your Brunch repository, run `npm install --save csscomb-brunch`, which will add a line to your `package.json` file.

Usage
===
To specify an encoding you can use the configuration options.

```coffeescript
exports.config =
  plugins:
    csscomb:
      encoding: 'zen'
```

By default, the encoding is set to Zen. The string you pass into that field is used to initialize the CSSComb object (`var comb = new Comb('zen');`, see https://npmjs.org/package/csscomb), so any value acceptable there will be acceptable as an argument for `encoding.`
