OWS Build
=======

A helper to add tasks to gulp.

## Attribution

This repository was created by copy forking [bitcore-build 6747a4a](https://github.com/bitpay/bitcore-build/commit/6747a4a15a0154de294d2591c5603969ad30eea1).

## Getting started

Install with:

```sh
npm install ows-build
```

and use and require in your gulp file: 

```javascript
var gulp = require('gulp');
var owsTasks = require('ows-build');

owsTasks('owsNode', 'submodule');
gulp.task('default', ['lint', 'test', 'browser', 'coverage']);
```

where `owsNode` is one of the available OWS nodes:
- bcccore
- btccore

### Notes

* There's no default task to allow for each submodule to set up their own configuration
* If the module is node-only, avoid adding the browser tasks with:
```javascript
var owsTasks = require('ows-build');
owsTasks('owsNode', 'submodule', {skipBrowsers: true});
```

## License

Code released under [the MIT license](https://github.com/owstack/ows-build/blob/master/LICENSE).

Copyright 2017 Open Wallet Stack. Bcccore is a trademark maintained by Open Wallet Stack.
