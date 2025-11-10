# Util

@namespace Util

Various utility functions, used by Leaflet internally.

## Methods

| Method | Returns | Description |
| --- | --- | --- |
| `stamp(obj: Object)` | `Number` | Returns the unique ID of an object, assigning it one if it doesn't have it. |
| `throttle(fn: Function, time: Number, context: Object)` | `Function` | Returns a function which executes function `fn` with the given scope `context` |
| `wrapNum(num: Number, range: Number[], includeMax?: Boolean)` | `Number` | Returns the number `num` modulo `range` in such a way so it lies within |
| `falseFn()` | `Function` | Returns a function which always returns `false`. |
| `formatNum(num: Number, precision?: Number|false)` | `Number` | Returns the number `num` rounded with specified `precision`. |
| `splitWords(str: String)` | `String[]` | Trims and splits the string on whitespace and returns the array of parts. |
| `setOptions(obj: Object, options: Object)` | `Object` | Merges the given properties to the `options` of the `obj` object, returning the resulting options. See `Class options`. |
| `template(str: String, data: Object)` | `String` | Simple templating facility, accepts a template string of the form `'Hello {a}, {b}'` |
