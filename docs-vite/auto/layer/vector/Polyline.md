# Polyline

A class for drawing polyline overlays on a map. Extends `Path`.

### Usage example

```js
const latlngs = [
[45.51, -122.68],
[37.77, -122.43],
[34.04, -118.2]
];

const polyline = new Polyline(latlngs, {color: 'red'}).addTo(map);

map.fitBounds(polyline.getBounds());
```

You can also pass a multi-dimensional array to represent a `MultiPolyline` shape:

```js
const latlngs = [
[[45.51, -122.68],
[37.77, -122.43],
[34.04, -118.2]],
[[40.78, -73.91],
[41.83, -87.62],
[32.76, -96.72]]
];
```

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `smoothFactor` | `Number` | `1.0` | How much to simplify the polyline on each zoom level. More means |
| `noClip` | `Boolean` | `false` | Disable polyline clipping. |
