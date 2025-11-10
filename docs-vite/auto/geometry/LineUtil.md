# LineUtil

@namespace LineUtil

Various utility functions for polyline points processing, used by Leaflet internally to make polylines lightning-fast.

## Methods

| Method | Returns | Description |
| --- | --- | --- |
| `simplify(points: Point[], tolerance: Number)` | `Point[]` | Dramatically reduces the number of points in a polyline while retaining |
| `pointToSegmentDistance(p: Point, p1: Point, p2: Point)` | `Number` | Returns the distance between point `p` and segment `p1` to `p2`. |
| `closestPointOnSegment(p: Point, p1: Point, p2: Point)` | `Number` | Returns the closest point from a point `p` on a segment `p1` to `p2`. |
| `clipSegment(a: Point, b: Point, bounds: Bounds, useLastCode?: Boolean, round?: Boolean)` | `Point[]` | Clips the segment a to b by rectangular bounds with the |
| `isFlat(latlngs: LatLng[])` | `Boolean` | Returns true if `latlngs` is a flat array, false is nested. |
