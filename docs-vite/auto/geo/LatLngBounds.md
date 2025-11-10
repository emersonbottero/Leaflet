# LatLngBounds

Represents a rectangular geographical area on a map.

### Usage example

```js
const corner1 = new LatLng(40.712, -74.227),
corner2 = new LatLng(40.774, -74.125),
bounds = new LatLngBounds(corner1, corner2);
```

All Leaflet methods that accept LatLngBounds objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:

```js
map.fitBounds([
[40.712, -74.227],
[40.774, -74.125]
]);
```

Caution: if the area crosses the antimeridian (often confused with the International Date Line), you must specify corners _outside_ the [-180, 180] degrees longitude range.

Note that `LatLngBounds` does not inherit from Leaflet's `Class` object,
which means new classes can't inherit from it, and new methods
can't be added to it with the `include` function.
