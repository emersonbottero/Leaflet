# Popup

Used to open popups in certain places of the map. Use [Map.openPopup](#map-openpopup) to
open popups while making sure that only one popup is open at one time
(recommended for usability), or use [Map.addLayer](#map-addlayer) to open as many as you want.

### Usage example

If you want to just bind a popup to marker click and then open it, it's really easy:

```js
marker.bindPopup(popupContent).openPopup();
```
Path overlays like polylines also have a `bindPopup` method.

A popup can be also standalone:

```js
const popup = new Popup()
.setLatLng(latlng)
.setContent('<p>Hello world!<br />This is a nice popup.</p>')
.openOn(map);
```
or
```js
const popup = new Popup(latlng, {content: '<p>Hello world!<br />This is a nice popup.</p>'})
.openOn(map);
```

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `pane` | `String` | `'popupPane'` | `Map pane` where the popup will be added. |
| `offset` | `Point` | `Point(0,` | The offset of the popup position. |
| `maxWidth` | `Number` | `300` | Max width of the popup, in pixels. |
| `minWidth` | `Number` | `50` | Min width of the popup, in pixels. |
| `maxHeight` | `Number` | `null` | If set, creates a scrollable container of the given height |
| `autoPan` | `Boolean` | `true` | Set it to `false` if you don't want the map to do panning animation |
| `autoPanPaddingTopLeft` | `Point` | `null` | The margin between the popup and the top left corner of the map |
| `autoPanPaddingBottomRight` | `Point` | `null` | The margin between the popup and the bottom right corner of the map |
| `autoPanPadding` | `Point` | `Point(5,` | Equivalent of setting both top left and bottom right autopan padding to the same value. |
| `keepInView` | `Boolean` | `false` | Set it to `true` if you want to prevent users from panning the popup |
| `closeButton` | `Boolean` | `true` | Controls the presence of a close button in the popup. |
| `closeButtonLabel` | `String` | `'Close` | Specifies the 'aria-label' attribute of the close button. |
| `autoClose` | `Boolean` | `true` | Set it to `false` if you want to override the default behavior of |
| `closeOnEscapeKey` | `Boolean` | `true` | Set it to `false` if you want to override the default behavior of |
| `closeOnClick` | `Boolean` | `*` | Set it if you want to override the default behavior of the popup closing when user clicks |
| `className` | `String` | `''` | A custom CSS class name to assign to the popup. |
| `trackResize` | `Boolean` | `true` | Whether the popup shall react to changes in the size of its contents |

## Events

| Event | Data | Description |
| --- | --- | --- |
| `popupopen` |  | Fired when a popup is opened in the map |
| `popupopen` |  | Fired when a popup bound to this layer is opened |
| `popupclose` |  | Fired when a popup in the map is closed |
| `popupclose` |  | Fired when a popup bound to this layer is closed |
| `autopanstart` |  | Fired when the map starts autopanning when opening a popup. |
