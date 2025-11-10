# CRS

@namespace CRS
@crs CRS.Base
Object that defines coordinate reference systems for projecting
geographical points into pixel (screen) coordinates and back (and to
coordinates in other units for [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services). See
[spatial reference system](https://en.wikipedia.org/wiki/Spatial_reference_system).

Leaflet defines the most usual CRSs by default. If you want to use a
CRS not defined by default, take a look at the
[Proj4Leaflet](https://github.com/kartena/Proj4Leaflet) plugin.

Note that the CRS instances do not inherit from Leaflet's `Class` object,
and can't be instantiated. Also, new classes can't inherit from them,
and methods can't be added to them with the `include` function.
