# Map.TapHold

Map.TapHold is used to simulate `contextmenu` event on long hold,
which otherwise is not fired by mobile Safari.

## Touch interaction options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `tapHold` | `Boolean` |  | Enables simulation of `contextmenu` event, default is `true` for mobile Safari. |
| `tapTolerance` | `Number` | `15` | The max number of pixels a user can shift his finger during touch |
