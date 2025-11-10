# Point

Represents a point with `x` and `y` coordinates in pixels.

### Usage example

```js
const point = new Point(200, 300);
```

All Leaflet methods and options that accept `Point` objects also accept them in a simple Array form (unless noted otherwise), so these lines are equivalent:

```js
map.panBy([200, 300]);
map.panBy(new Point(200, 300));
```

Note that `Point` does not inherit from Leaflet's `Class` object,
which means new classes can't inherit from it, and new methods
can't be added to it with the `include` function.

## Methods

| Method | Returns | Description |
| --- | --- | --- |
| `validate(x: Number, y: Number)` | `Boolean` | Returns `true` if the Point object can be properly initialized. |
| `validate(coords: Number[])` | `Boolean` | Expects an array of the form `[x, y]`. Returns `true` if the Point object can be properly initialized. |
| `validate(coords: Object)` | `Boolean` | Returns `true` if the Point object can be properly initialized. |
