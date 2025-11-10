# GridLayer

Generic class for handling a tiled grid of HTML elements. This is the base class for all tile layers and replaces `TileLayer.Canvas`.
GridLayer can be extended to create a tiled grid of HTML elements like `<canvas>`, `<img>` or `<div>`. GridLayer will handle creating and animating these DOM elements for you.


@section Synchronous usage
### Usage example

To create a custom layer, extend GridLayer and implement the `createTile()` method, which will be passed a `Point` object with the `x`, `y`, and `z` (zoom level) coordinates to draw your tile.

```js
class CanvasLayer extends GridLayer {
createTile(coords) {
const tile = DomUtil.create('canvas', 'leaflet-tile');

const size = this.getTileSize();
tile.width = size.x;
tile.height = size.y;

const ctx = tile.getContext('2d');

return tile;
}
}
```

@section Asynchronous usage
### Usage example

Tile creation can also be asynchronous, this is useful when using a third-party drawing library. Once the tile is finished drawing it can be passed to the `done()` callback.

```js
class CanvasLayer extends GridLayer {
createTile(coords, done) {
const error;

const tile = DomUtil.create('canvas', 'leaflet-tile');

const size = this.getTileSize();
tile.width = size.x;
tile.height = size.y;

setTimeout(function() {
done(error, tile);
}, 1000);

return tile;
}
}
```

@section

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `tileSize` | `Number|Point` | `256` | Width and height of tiles in the grid. Use a number if width and height are equal, or `Point(width, height)` otherwise. |
| `opacity` | `Number` | `1.0` | Opacity of the tiles. Can be used in the `createTile()` function. |
| `updateWhenIdle` | `Boolean` | `(depends)` | Load new tiles only when panning ends. |
| `updateWhenZooming` | `Boolean` | `true` | By default, a smooth zoom animation (during a [pinch zoom](#map-pinchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends. |
| `updateInterval` | `Number` | `200` | Tiles will not update more than once every `updateInterval` milliseconds when panning. |
| `zIndex` | `Number` | `1` | The explicit zIndex of the tile layer. |
| `bounds` | `LatLngBounds` | `undefined` | If set, tiles will only be loaded inside the set `LatLngBounds`. |
| `minZoom` | `Number` | `0` | The minimum zoom level down to which this layer will be displayed (inclusive). |
| `maxZoom` | `Number` | `undefined` | The maximum zoom level up to which this layer will be displayed (inclusive). |
| `maxNativeZoom` | `Number` | `undefined` | Maximum zoom number the tile source has available. If it is specified, |
| `minNativeZoom` | `Number` | `undefined` | Minimum zoom number the tile source has available. If it is specified, |
| `noWrap` | `Boolean` | `false` | Whether the layer is wrapped around the antimeridian. If `true`, the |
| `pane` | `String` | `'tilePane'` | `Map pane` where the grid layer will be added. |
| `className` | `String` | `''` | A custom class name to assign to the tile layer. Empty by default. |
| `keepBuffer` | `Number` | `2` | When panning the map, keep this many rows and columns of tiles before unloading them. |

## Events

| Event | Data | Description |
| --- | --- | --- |
| `loading` |  | Fired when the grid layer starts loading tiles. |
| `tileunload` |  | Fired when a tile is removed (e.g. when a tile goes off the screen). |
| `tileloadstart` |  | Fired when a tile is requested and starts loading. |
| `tileerror` |  | Fired when there is an error loading a tile. |
| `tileload` |  | Fired when a tile loads. |
| `load` |  | Fired when the grid layer loaded all visible tiles. |
