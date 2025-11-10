# Marker

Marker is used to display clickable/draggable icons on the map. Extends `Layer`.

### Usage example

```js
new Marker([50.5, 30.5]).addTo(map);
```

## Draggable marker options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `draggable` | `Boolean` | `false` | Whether the marker is draggable with pointer or not. |
| `autoPan` | `Boolean` | `false` | Whether to pan the map when dragging this marker near its edge or not. |
| `autoPanPadding` | `Point` | `Point(50,` | Distance (in pixels to the left/right and to the top/bottom) of the |
| `autoPanSpeed` | `Number` | `10` | Number of pixels the map should pan by. |

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `icon` | `Icon` | `*` | Icon instance to use for rendering the marker. |
| `keyboard` | `Boolean` | `true` | Whether the marker can be tabbed to with a keyboard and clicked by pressing enter. |
| `title` | `String` | `''` | Text for the browser tooltip that appear on marker hover (no tooltip by default). |
| `alt` | `String` | `'Marker'` | Text for the `alt` attribute of the icon image. |
| `zIndexOffset` | `Number` | `0` | By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively). |
| `opacity` | `Number` | `1.0` | The opacity of the marker. |
| `riseOnHover` | `Boolean` | `false` | If `true`, the marker will get on top of others when you hover the pointer over it. |
| `riseOffset` | `Number` | `250` | The z-index offset used for the `riseOnHover` feature. |
| `pane` | `String` | `'markerPane'` | `Map pane` where the markers icon will be added. |
| `shadowPane` | `String` | `'shadowPane'` | `Map pane` where the markers shadow will be added. |
| `bubblingPointerEvents` | `Boolean` | `false` | When `true`, a pointer event on this marker will trigger the same event on the map |
| `autoPanOnFocus` | `Boolean` | `true` | When `true`, the map will pan whenever the marker is focused (via |

## Events

| Event | Data | Description |
| --- | --- | --- |
| `move` |  | Fired when the marker is moved via [`setLatLng`](#marker-setlatlng) or by [dragging](#marker-dragging). Old and new coordinates are included in event arguments as `oldLatLng`, `latlng`. |
