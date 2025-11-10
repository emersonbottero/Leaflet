# Evented

A set of methods shared between event-powered classes (like `Map` and `Marker`). Generally, events allow you to execute some function when something happens with an object (e.g. the user clicks on the map, causing the map to fire `'click'` event).

### Usage example

```js
map.on('click', function(e) {
alert(e.latlng);
} );
```

Leaflet deals with event listeners by reference, so if you want to add a listener and then remove it, define it as a function:

```js
function onClick(e) { ... }

map.on('click', onClick);
map.off('click', onClick);
```
