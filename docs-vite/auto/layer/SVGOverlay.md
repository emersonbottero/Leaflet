# SVGOverlay

Used to load, display and provide DOM access to an SVG file over specific bounds of the map. Extends `ImageOverlay`.

An SVG overlay uses the [`<svg>`](https://developer.mozilla.org/docs/Web/SVG/Element/svg) element.

### Usage example

```js
const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svgElement.setAttribute('xmlns', "http://www.w3.org/2000/svg");
svgElement.setAttribute('viewBox', "0 0 200 200");
svgElement.innerHTML = '<rect width="200" height="200"/><rect x="75" y="23" width="50" height="50" style="fill:red"/><rect x="75" y="123" width="50" height="50" style="fill:#0013ff"/>';
const svgElementBounds = [ [ 32, -130 ], [ 13, -100 ] ];
new SVGOverlay(svgElement, svgElementBounds).addTo(map);
```
