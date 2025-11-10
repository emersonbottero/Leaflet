# CRS.Earth

@namespace CRS
@crs CRS.Earth

Serves as the base for CRS that are global such that they cover the earth.
Can only be used as the base for other CRS and cannot be used directly,
since it does not have a `code`, `projection` or `transformation`. `distance()` returns
meters.
