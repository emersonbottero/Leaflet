# PosAnimation

Used internally for panning animations and utilizing CSS Transitions for modern browsers.

### Usage example
```js
const myPositionMarker = new Marker([48.864716, 2.294694]).addTo(map);

myPositionMarker.on("click", function() {
const pos = map.latLngToLayerPoint(myPositionMarker.getLatLng());
pos.y -= 25;
const fx = new PosAnimation();

fx.once('end',function() {
pos.y += 25;
fx.run(myPositionMarker._icon, pos, 0.8);
});

fx.run(myPositionMarker._icon, pos, 0.3);
});

```

@constructor PosAnimation()
Creates a `PosAnimation` object.

## Events

| Event | Data | Description |
| --- | --- | --- |
| `start` |  | Fired when the animation starts |
| `step` |  | Fired continuously during the animation. |
| `end` |  | Fired when the animation ends. |
