# Bounds

Represents a rectangular area in pixel coordinates.

### Usage example

```js
const p1 = new Point(10, 10),
p2 = new Point(40, 60),
bounds = new Bounds(p1, p2);
```

All Leaflet methods that accept `Bounds` objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:

```js
otherBounds.intersects([[10, 10], [40, 60]]);
```

Note that `Bounds` does not inherit from Leaflet's `Class` object,
which means new classes can't inherit from it, and new methods
can't be added to it with the `include` function.
