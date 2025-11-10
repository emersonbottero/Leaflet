# Map

The central class of the API — it is used to create a map on a page and manipulate it.

### Usage example

```js
const map = new Map('map', {
center: [51.505, -0.09],
zoom: 13
});
```

## Map State Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `crs` | `CRS` | `CRS.EPSG3857` | The [Coordinate Reference System](#crs) to use. Don't change this if you're not |
| `center` | `LatLng` | `undefined` | Initial geographic center of the map |
| `zoom` | `Number` | `undefined` | Initial map zoom level |
| `minZoom` | `Number` | `*` | Minimum zoom level of the map. |
| `maxZoom` | `Number` | `*` | Maximum zoom level of the map. |
| `layers` | `Layer` |  | Array of layers that will be added to the map initially |
| `maxBounds` | `LatLngBounds` | `null` | When this option is set, the map restricts the view to the given |
| `renderer` | `Renderer` | `*` | The default method for drawing vector layers on the map. `SVG` |

## Animation Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `zoomAnimation` | `Boolean` | `true` | Whether the map zoom animation is enabled. By default it's enabled |
| `zoomAnimationThreshold` | `Number` | `4` | Won't animate zoom if the zoom difference exceeds this value. |
| `fadeAnimation` | `Boolean` | `true` | Whether the tile fade animation is enabled. By default it's enabled |
| `markerZoomAnimation` | `Boolean` | `true` | Whether markers animate their zoom with the zoom animation, if disabled |
| `transform3DLimit` | `Number` | `2^23` | Defines the maximum size of a CSS translation transform. The default |

## Interaction Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `zoomSnap` | `Number` | `1` | Forces the map's zoom level to always be a multiple of this, particularly |
| `zoomDelta` | `Number` | `1` | Controls how much the map's zoom level will change after a |
| `trackResize` | `Boolean` | `true` | Whether the map automatically handles browser window resize to update itself. |

## Events

| Event | Data | Description |
| --- | --- | --- |
| `resize` |  | Fired when the map is resized. |
| `locationerror` |  | Fired when geolocation (using the [`locate`](#map-locate) method) failed. |
| `locationfound` |  | Fired when geolocation (using the [`locate`](#map-locate) method) |
| `unload` |  | Fired when the map is destroyed with [remove](#map-remove) method. |
| `viewreset` |  | Fired when the map needs to redraw its content (this usually happens |
| `load` |  | Fired when the map is initialized (when its center and zoom are set |
| `zoomstart` |  | Fired when the map zoom is about to change (e.g. before zoom animation). |
| `movestart` |  | Fired when the view of the map starts changing (e.g. user starts dragging the map). |
| `zoom` |  | Fired repeatedly during any change in zoom level, |
| `move` |  | Fired repeatedly during any movement of the map, |
| `zoomend` |  | Fired when the map zoom changed, after any animations. |
| `moveend` |  | Fired when the center of the map stops changing |
| `click` |  | Fired when the user clicks (or taps) the map. |
| `dblclick` |  | Fired when the user double-clicks (or double-taps) the map. |
| `pointerdown` |  | Fired when the user pushes the pointer on the map. |
| `pointerup` |  | Fired when the user releases the pointer on the map. |
| `pointerover` |  | Fired when the pointer enters the map. |
| `pointerout` |  | Fired when the pointer leaves the map. |
| `pointermove` |  | Fired while the pointer moves over the map. |
| `contextmenu` |  | Fired when the user pushes the right mouse button on the map, prevents |
| `keypress` |  | Fired when the user presses a key from the keyboard that produces a character value while the map is focused. |
| `keydown` |  | Fired when the user presses a key from the keyboard while the map is focused. Unlike the `keypress` event, |
| `keyup` |  | Fired when the user releases a key from the keyboard while the map is focused. |
| `preclick` |  | Fired before pointer click on the map (sometimes useful when you |
| `zoomanim` |  | Fired at least once per zoom animation. For continuous zoom, like pinch zooming, fired once per frame during zoom. |
