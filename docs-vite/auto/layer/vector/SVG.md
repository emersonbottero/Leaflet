# SVG

Allows vector layers to be displayed with [SVG](https://developer.mozilla.org/docs/Web/SVG).
Inherits `Renderer`.

### Usage example

Use SVG by default for all paths in the map:

```js
const map = new Map('map', {
renderer: new SVG()
});
```

Use a SVG renderer with extra padding for specific vector geometries:

```js
const map = new Map('map');
const myRenderer = new SVG({ padding: 0.5 });
const line = new Polyline( coordinates, { renderer: myRenderer } );
const circle = new Circle( center, { renderer: myRenderer, radius: 100 } );
```

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `String` | `null` | Custom class name set on an element. Only for SVG renderer. |
