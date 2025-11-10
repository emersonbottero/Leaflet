# ImageOverlay

Used to load and display a single image over specific bounds of the map. Extends `Layer`.

### Usage example

```js
const imageUrl = 'https://maps.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];
new ImageOverlay(imageUrl, imageBounds).addTo(map);
```

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `opacity` | `Number` | `1.0` | The opacity of the image overlay. |
| `alt` | `String` | `''` | Text for the `alt` attribute of the image (useful for accessibility). |
| `interactive` | `Boolean` | `false` | If `true`, the image overlay will emit [pointer events](#interactive-layer) when clicked or hovered. |
| `crossOrigin` | `Boolean|String` | `false` | Whether the crossOrigin attribute will be added to the image. |
| `errorOverlayUrl` | `String` | `''` | URL to the overlay image to show in place of the overlay that failed to load. |
| `zIndex` | `Number` | `1` | The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the overlay layer. |
| `className` | `String` | `''` | A custom class name to assign to the image. Empty by default. |
| `decoding` | `String` | `'auto'` | Tells the browser whether to decode the image in a synchronous fashion, |

## Events

| Event | Data | Description |
| --- | --- | --- |
| `load` |  | Fired when the ImageOverlay layer has loaded its image |
| `error` |  | Fired when the ImageOverlay layer fails to load its image |
