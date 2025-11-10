# Map.ScrollWheelZoom

Handler.ScrollWheelZoom is used by Map to enable mouse scroll wheel zoom on the map.

## Mouse wheel options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `scrollWheelZoom` | `Boolean|String` | `true` | Whether the map can be zoomed by using the mouse wheel. If passed `'center'`, |
| `wheelDebounceTime` | `Number` | `40` | Limits the rate at which a wheel can fire (in milliseconds). By default, the |
| `wheelPxPerZoomLevel` | `Number` | `60` | How many scroll pixels (as reported by [DomEvent.getWheelDelta](#domevent-getwheeldelta)) |
