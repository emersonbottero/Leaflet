# DivIcon

Represents a lightweight icon for markers that uses a simple `<div>`
element instead of an image. Inherits from `Icon` but ignores the `iconUrl` and shadow options.

### Usage example
```js
const myIcon = new DivIcon({className: 'my-div-icon'});

new Marker([50.505, 30.57], {icon: myIcon}).addTo(map);
```

By default, it has a 'leaflet-div-icon' CSS class and is styled as a little white square with a shadow.

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `html` | `String|HTMLElement` | `''` | Custom HTML code to put inside the div element, empty by default. Alternatively, |
| `bgPos` | `Point` | `[0,` | Optional relative position of the background, in pixels |
