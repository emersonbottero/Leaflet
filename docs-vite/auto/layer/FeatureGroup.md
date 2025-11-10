# FeatureGroup

Extended `LayerGroup` that makes it easier to do the same thing to all its member layers:
* [`bindPopup`](#layer-bindpopup) binds a popup to all of the layers at once (likewise with [`bindTooltip`](#layer-bindtooltip))
* Events are propagated to the `FeatureGroup`, so if the group has an event
handler, it will handle events from any of the layers. This includes pointer events
and custom events.
* Has `layeradd` and `layerremove` events

### Usage example

```js
new FeatureGroup([marker1, marker2, polyline])
.bindPopup('Hello world!')
.on('click', function() { alert('Clicked on a member of the group!'); })
.addTo(map);
```

## Events

| Event | Data | Description |
| --- | --- | --- |
| `layeradd` |  | Fired when a layer is added to this `FeatureGroup` |
| `layerremove` |  | Fired when a layer is removed from this `FeatureGroup` |
