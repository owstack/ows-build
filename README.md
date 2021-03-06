OWS Build
=======

A helper to add tasks to gulp.

## Getting started

Install with:

```sh
npm install @owstack/ows-build
```

and use and require in your gulp file:

```javascript
var gulp = require('gulp');
var owsTasks = require('@owstack/ows-build');

owsTasks('ows', 'submodule');
gulp.task('default', ['lint', 'test', 'browser', 'coverage']);
```

### Notes

* There's no default task to allow for each submodule to set up their own configuration
* If the module is node-only, avoid adding the browser tasks with:
```javascript
var owsTasks = require('@owstack/ows-build');
owsTasks('ows', 'submodule', {skipBrowsers: true});
```

## License

Code released under [the MIT license](https://github.com/owstack/ows-build/blob/master/LICENSE).

Copyright 2017 Open Wallet Stack.
