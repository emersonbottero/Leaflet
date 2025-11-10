# Control.Attribution

The attribution control allows you to display attribution data in a small text box on a map. It is put on the map by default unless you set its [`attributionControl` option](#map-attributioncontrol) to `false`, and it fetches attribution texts from layers with the [`getAttribution` method](#layer-getattribution) automatically. Extends Control.

## Control options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `attributionControl` | `Boolean` | `true` | Whether a [attribution control](#control-attribution) is added to the map by default. |

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `position` | `String` | `'bottomright'` | The position of the control (one of the map corners). Possible values are `'topleft'`, |
| `prefix` | `String|false` | `'Leaflet'` | The HTML text shown before the attributions. Pass `false` to disable. |
