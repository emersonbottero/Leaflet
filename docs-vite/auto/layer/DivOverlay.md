# DivOverlay

Base model for Popup and Tooltip. Inherit from it for custom overlays like plugins.

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `interactive` | `Boolean` | `false` | If true, the popup/tooltip will listen to the pointer events. |
| `offset` | `Point` | `Point(0,` | The offset of the overlay position. |
| `className` | `String` | `''` | A custom CSS class name to assign to the overlay. |
| `pane` | `String` | `undefined` | `Map pane` where the overlay will be added. |
| `content` | `String|HTMLElement|Function` | `''` | Sets the HTML content of the overlay while initializing. If a function is passed the source layer will be |

## Events

| Event | Data | Description |
| --- | --- | --- |
| `contentupdate` |  | Fired when the content of the overlay is updated |
