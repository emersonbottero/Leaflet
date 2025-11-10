# Control.Scale

A simple scale control that shows the scale of the current center of screen in metric (m/km) and imperial (mi/ft) systems. Extends `Control`.

### Usage example

```js
new Control.Scale().addTo(map);
```

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `position` | `String` | `'bottomleft'` | The position of the control (one of the map corners). Possible values are `'topleft'`, |
| `maxWidth` | `Number` | `100` | Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500). |
| `metric` | `Boolean` | `True` | Whether to show the metric scale line (m/km). |
| `imperial` | `Boolean` | `True` | Whether to show the imperial scale line (mi/ft). |
| `updateWhenIdle` | `Boolean` | `false` | If `true`, the control is updated on [`moveend`](#map-moveend), otherwise it's always up-to-date (updated on [`move`](#map-move)). |
