# Tooltip

Used to display small texts on top of map layers.

### Usage example
If you want to just bind a tooltip to marker:

```js
marker.bindTooltip("my tooltip text").openTooltip();
```
Path overlays like polylines also have a `bindTooltip` method.

A tooltip can be also standalone:

```js
const tooltip = new Tooltip()
.setLatLng(latlng)
.setContent('Hello world!<br />This is a nice tooltip.')
.addTo(map);
```
or
```js
const tooltip = new Tooltip(latlng, {content: 'Hello world!<br />This is a nice tooltip.'})
.addTo(map);
```


Note about tooltip offset. Leaflet takes two options in consideration
for computing tooltip offsetting:
- the `offset` Tooltip option: it defaults to [0, 0], and it's specific to one tooltip.
Add a positive x offset to move the tooltip to the right, and a positive y offset to
move it to the bottom. Negatives will move to the left and top.
- the `tooltipAnchor` Icon option: this will only be considered for Marker. You
should adapt this value if you use a custom icon.

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `pane` | `String` | `'tooltipPane'` | `Map pane` where the tooltip will be added. |
| `offset` | `Point` | `Point(0,` | Optional offset of the tooltip position. |
| `direction` | `String` | `'auto'` | Direction where to open the tooltip. Possible values are: `right`, `left`, |
| `permanent` | `Boolean` | `false` | Whether to open the tooltip permanently or only on pointerover. |
| `sticky` | `Boolean` | `false` | If true, the tooltip will follow the pointer instead of being fixed at the feature center. |
| `opacity` | `Number` | `0.9` | Tooltip container opacity. |

## Events

| Event | Data | Description |
| --- | --- | --- |
| `tooltipopen` |  | Fired when a tooltip is opened in the map. |
| `tooltipopen` |  | Fired when a tooltip bound to this layer is opened. |
| `tooltipclose` |  | Fired when a tooltip in the map is closed. |
| `tooltipclose` |  | Fired when a tooltip bound to this layer is closed. |
