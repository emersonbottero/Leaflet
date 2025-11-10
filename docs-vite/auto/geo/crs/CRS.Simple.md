# CRS.Simple

@namespace CRS
@crs CRS.Simple

A simple CRS that maps longitude and latitude into `x` and `y` directly.
May be used for maps of flat surfaces (e.g. game maps). Note that the `y`
axis should still be inverted (going from bottom to top). `distance()` returns
simple euclidean distance.
