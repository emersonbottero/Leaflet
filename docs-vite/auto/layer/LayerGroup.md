# LayerGroup

Used to group several layers and handle them as one. If you add it to the map,
any layers added or removed from the group will be added/removed on the map as
well. Extends `Layer`.

### Usage example

```js
new LayerGroup([marker1, marker2])
.addLayer(polyline)
.addTo(map);
```
