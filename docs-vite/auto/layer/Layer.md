# Layer

@aka ILayer

A set of methods from the Layer base class that all Leaflet layers use.
Inherits all methods, options and events from `Evented`.

### Usage example

```js
const layer = new Marker(latlng).addTo(map);
layer.addTo(map);
layer.remove();
```

@event add: Event
Fired after the layer is added to a map

@event remove: Event
Fired after the layer is removed from a map

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `pane` | `String` | `'overlayPane'` | By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default. |
| `attribution` | `String` | `null` | String to be shown in the attribution control, e.g. "© OpenStreetMap contributors". It describes the layer data and is often a legal obligation towards copyright holders and tile providers. |

## Events

| Event | Data | Description |
| --- | --- | --- |
| `zoomlevelschange` |  | Fired when the number of zoomlevels on the map is changed due |
