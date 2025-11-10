# Canvas

Allows vector layers to be displayed with [`<canvas>`](https://developer.mozilla.org/docs/Web/API/Canvas_API).
Inherits `Renderer`.

### Usage example

Use Canvas by default for all paths in the map:

```js
const map = new Map('map', {
renderer: new Canvas()
});
```

Use a Canvas renderer with extra padding for specific vector geometries:

```js
const map = new Map('map');
const myRenderer = new Canvas({ padding: 0.5 });
const line = new Polyline( coordinates, { renderer: myRenderer } );
const circle =  new Circle( center, { renderer: myRenderer, radius: 100 } );
```

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `tolerance` | `Number` | `0` | How much to extend the click tolerance around a path/object on the map. |
