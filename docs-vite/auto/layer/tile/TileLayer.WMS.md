# TileLayer.WMS

Used to display [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services as tile layers on the map. Extends `TileLayer`.

### Usage example

```js
const nexrad = new TileLayer.wms("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
layers: 'nexrad-n0r-900913',
format: 'image/png',
transparent: true,
attribution: "Weather data © 2012 IEM Nexrad"
});
```

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `layers` | `String` | `''` | **(required)** Comma-separated list of WMS layers to show. |
| `styles` | `String` | `''` | Comma-separated list of WMS styles. |
| `format` | `String` | `'image/jpeg'` | WMS image format (use `'image/png'` for layers with transparency). |
| `transparent` | `Boolean` | `false` | If `true`, the WMS service will return images with transparency. |
| `version` | `String` | `'1.1.1'` | Version of the WMS service to use |
| `crs` | `CRS` | `null` | Coordinate Reference System to use for the WMS requests, defaults to |
| `uppercase` | `Boolean` | `false` | If `true`, WMS request parameter keys will be uppercase. |
