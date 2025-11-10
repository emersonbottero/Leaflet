# Transformation

Represents an affine transformation: a set of coefficients `a`, `b`, `c`, `d`
for transforming a point of a form `(x, y)` into `(a*x + b, c*y + d)` and doing
the reverse. Used by Leaflet in its projections code.

### Usage example

```js
const transformation = new Transformation(2, 5, -1, 10),
p = new Point(1, 2),
p2 = transformation.transform(p), //  new Point(7, 8)
p3 = transformation.untransform(p2); //  new Point(1, 2)
```
