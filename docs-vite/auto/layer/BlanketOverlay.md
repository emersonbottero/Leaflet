# BlanketOverlay

Represents an HTML element that covers ("blankets") the entire surface
of the map.

Do not use this class directly. It's meant for `Renderer`, and for plugins
that rely on one single HTML element

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `padding` | `Number` | `0.1` | How much to extend the clip area around the map view (relative to its size) |
| `continuous` | `Boolean` | `false` | When `false`, the blanket will update its position only when the |
