# Map.Drag

Handler.MapDrag is used to make the map draggable (with panning inertia), enabled by default.

## Interaction Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `dragging` | `Boolean` | `true` | Whether the map is draggable with pointer or not. |

## Panning Inertia Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `inertia` | `Boolean` | `*` | If enabled, panning of the map will have an inertia effect where |
| `inertiaDeceleration` | `Number` | `3000` | The rate with which the inertial movement slows down, in pixels/second². |
| `inertiaMaxSpeed` | `Number` | `Infinity` | Max speed of the inertial movement, in pixels/second. |
| `easeLinearity` | `Number` | `0.2` | easeLinearity: 0.2, |
| `worldCopyJump` | `Boolean` | `false` | With this option enabled, the map tracks when you pan to another "copy" |
| `maxBoundsViscosity` | `Number` | `0.0` | If `maxBounds` is set, this option will control how solid the bounds |
