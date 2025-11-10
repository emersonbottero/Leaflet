# Class

## Methods

| Method | Returns | Description |
| --- | --- | --- |
| `extend(props: Object)` | `Function` | [Extends the current class](#class-inheritance) given the properties to be included. |
| `include(properties: Object)` | `this` | [Includes a mixin](#class-includes) into the current class. |
| `setDefaultOptions(options: Object)` | `this` | Configures the [default `options`](#class-options) on the prototype of this class. |
| `mergeOptions(options: Object)` | `this` | [Merges `options`](#class-options) into the defaults of the class. |
| `addInitHook(fn: Function)` | `this` | Adds a [constructor hook](#class-constructor-hooks) to the class. |
