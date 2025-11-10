# CircleMarker

A circle of a fixed size with radius specified in pixels. Extends `Path`.

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `radius` | `Number` | `10` | Radius of the circle marker, in pixels |

## Events

| Event | Data | Description |
| --- | --- | --- |
| `move` |  | Fired when the marker is moved via [`setLatLng`](#circlemarker-setlatlng). Old and new coordinates are included in event arguments as `oldLatLng`, `latlng`. |
