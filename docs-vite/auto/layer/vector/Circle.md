# Circle

A class for drawing circle overlays on a map. Extends `CircleMarker`.

It's an approximation and starts to diverge from a real circle closer to poles (due to projection distortion).

### Usage example

```js
new Circle([50.5, 30.5], {radius: 200}).addTo(map);
```

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `radius` | `Number` |  | this._mRadius = this.options.radius; |
