# LatLng

Represents a geographical point with a certain latitude and longitude.

### Usage example

```
const latlng = new LatLng(50.5, 30.5);
```

All Leaflet methods that accept LatLng objects also accept them in a simple Array form and simple object form (unless noted otherwise), so these lines are equivalent:

```
map.panTo([50, 30]);
map.panTo({lat: 50, lng: 30});
map.panTo({lat: 50, lon: 30});
map.panTo(new LatLng(50, 30));
```

Note that `LatLng` does not inherit from Leaflet's `Class` object,
which means new classes can't inherit from it, and new methods
can't be added to it with the `include` function.

## Methods

| Method | Returns | Description |
| --- | --- | --- |
| `validate(latitude: Number, longitude: Number, altitude?: Number)` | `Boolean` | Returns `true` if the LatLng object can be properly initialized. |
| `validate(coords: Array)` | `Boolean` | Expects an array of the form `[Number, Number]` or `[Number, Number, Number]`. |
| `validate(coords: Object)` | `Boolean` | Returns `true` if the LatLng object can be properly initialized. |
