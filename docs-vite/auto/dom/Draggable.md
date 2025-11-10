# Draggable

A class for making DOM elements draggable.
Used internally for map and marker dragging. Works on any DOM element

### Usage example
```js
const draggable = new Draggable(elementToDrag);
draggable.enable();
```

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `clickTolerance` | `Number` | `3` | The max number of pixels a user can shift the pointer during a click |

## Events

| Event | Data | Description |
| --- | --- | --- |
| `down` |  | Fired when a drag is about to start. |
| `dragstart` |  | Fired when a drag starts |
| `predrag` |  | Fired continuously during dragging *before* each corresponding |
| `drag` |  | Fired continuously during dragging. |
| `dragend` |  | Fired when the drag ends. |
