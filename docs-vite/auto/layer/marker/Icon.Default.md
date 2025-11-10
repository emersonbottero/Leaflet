# Icon.Default

@miniclass Icon.Default (Icon)
@section

A trivial subclass of `Icon`, represents the icon to use in `Marker`s when
no icon is specified. Points to the blue marker image distributed with Leaflet
releases.

In order to customize the default icon, just change the properties of `Icon.Default.prototype.options`
(which is a set of `Icon options`).

If you want to _completely_ replace the default icon, override the
`Marker.prototype.options.icon` with your own icon instead.

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `imagePath` | `String` |  | `Icon.Default` will try to auto-detect the location of the |
