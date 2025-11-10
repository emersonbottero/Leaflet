# Control.Layers

The layers control gives users the ability to switch between different base layers and switch overlays on/off (check out the [detailed example](https://leafletjs.com/examples/layers-control/)). Extends `Control`.

### Usage example

```js
const baseLayers = {
"Mapbox": mapbox,
"OpenStreetMap": osm
};

const overlays = {
"Marker": marker,
"Roads": roadsLayer
};

new Control.Layers(baseLayers, overlays).addTo(map);
```

The `baseLayers` and `overlays` parameters are object literals with layer names as keys and `Layer` objects as values:

```js
{
"<someName1>": layer1,
"<someName2>": layer2
}
```

The layer names can contain HTML, which allows you to add additional styling to the items:

```js
{"<img src='my-layer-icon' /> <span class='my-layer-item'>My Layer</span>": myLayer}
```

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `collapsed` | `Boolean` | `true` | If `true`, the control will be collapsed into an icon and expanded on pointer hover, touch, or keyboard activation. |
| `collapseDelay` | `Number` | `0` | Collapse delay in milliseconds. If greater than 0, the control will remain open longer, making it easier to scroll through long layer lists. |
| `autoZIndex` | `Boolean` | `true` | If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off. |
| `hideSingleBase` | `Boolean` | `false` | If `true`, the base layers in the control will be hidden when there is only one. |
| `sortLayers` | `Boolean` | `false` | Whether to sort the layers. When `false`, layers will keep the order |
| `sortFunction` | `Function` | `*` | A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) |

## Events

| Event | Data | Description |
| --- | --- | --- |
| `baselayerchange` |  | Fired when the base layer is changed through the [layers control](#control-layers). |
| `overlayadd` |  | Fired when an overlay is selected through the [layers control](#control-layers). |
| `overlayremove` |  | Fired when an overlay is deselected through the [layers control](#control-layers). |
