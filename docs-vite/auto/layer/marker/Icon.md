# Icon

Represents an icon to provide when creating a marker.

### Usage example

```js
const myIcon = new Icon({
iconUrl: 'my-icon.png',
iconRetinaUrl: 'my-icon@2x.png',
iconSize: [38, 95],
iconAnchor: [22, 94],
popupAnchor: [-3, -76],
shadowUrl: 'my-icon-shadow.png',
shadowRetinaUrl: 'my-icon-shadow@2x.png',
shadowSize: [68, 95],
shadowAnchor: [22, 94]
});

new Marker([50.505, 30.57], {icon: myIcon}).addTo(map);
```

`Icon.Default` extends `Icon` and is the blue icon Leaflet uses for markers by default.

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `crossOrigin` | `Boolean|String` | `false` | Whether the crossOrigin attribute will be added to the tiles. |
