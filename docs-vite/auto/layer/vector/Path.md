# Path

An abstract class that contains options and constants shared between vector
overlays (Polygon, Polyline, Circle). Do not use it directly. Extends `Layer`.

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `stroke` | `Boolean` | `true` | Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles. |
| `color` | `String` | `'#3388ff'` | Stroke color |
| `weight` | `Number` | `3` | Stroke width in pixels |
| `opacity` | `Number` | `1.0` | Stroke opacity |
| `lineCap` | `String` | `'round'` | A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke. |
| `lineJoin` | `String` | `'round'` | A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke. |
| `dashArray` | `String` | `null` | A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). |
| `dashOffset` | `String` | `null` | A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). |
| `fill` | `Boolean` | `depends` | Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles. |
| `fillColor` | `String` | `*` | Fill color. Defaults to the value of the [`color`](#path-color) option |
| `fillOpacity` | `Number` | `0.2` | Fill opacity. |
| `fillRule` | `String` | `'evenodd'` | A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined. |
| `bubblingPointerEvents` | `Boolean` | `true` | When `true`, a pointer event on this path will trigger the same event on the map |
