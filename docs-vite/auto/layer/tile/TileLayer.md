# TileLayer

Used to load and display tile layers on the map. Note that most tile servers require attribution, which you can set under `Layer`. Extends `GridLayer`.

### Usage example

```js
new TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
```

@section URL template
### Usage example

A string of the following form:

```
'https://{s}.somedomain.com/blabla/{z}/{x}/{y}{r}.png'
```

`{s}` means one of the available subdomains (used sequentially to help with browser parallel requests per domain limitation; subdomain values are specified in options; `a`, `b` or `c` by default, can be omitted), `{z}` — zoom level, `{x}` and `{y}` — tile coordinates. `{r}` can be used to add "&commat;2x" to the URL to load retina tiles.

You can use custom keys in the template, which will be [evaluated](#util-template) from TileLayer options, like this:

```
new TileLayer('https://{s}.somedomain.com/{foo}/{z}/{x}/{y}.png', {foo: 'bar'});
```

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `minZoom` | `Number` | `0` | The minimum zoom level down to which this layer will be displayed (inclusive). |
| `maxZoom` | `Number` | `18` | The maximum zoom level up to which this layer will be displayed (inclusive). |
| `subdomains` | `String|String` |  | Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings. |
| `errorTileUrl` | `String` | `''` | URL to the tile image to show in place of the tile that failed to load. |
| `zoomOffset` | `Number` | `0` | The zoom number used in tile URLs will be offset with this value. |
| `tms` | `Boolean` | `false` | If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services). |
| `zoomReverse` | `Boolean` | `false` | If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`) |
| `detectRetina` | `Boolean` | `false` | If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution. |
| `crossOrigin` | `Boolean|String` | `false` | Whether the crossOrigin attribute will be added to the tiles. |
| `referrerPolicy` | `Boolean|String` | `false` | Whether the referrerPolicy attribute will be added to the tiles. |

## Events

| Event | Data | Description |
| --- | --- | --- |
| `tileabort` |  | Fired when a tile was loading but is now not wanted. |
