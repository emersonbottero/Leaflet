# GeoJSON

Represents a GeoJSON object or an array of GeoJSON objects. Allows you to parse
GeoJSON data and display it on the map. Extends `FeatureGroup`.

### Usage example

```js
new GeoJSON(data, {
style: function (feature) {
return {color: feature.properties.color};
}
}).bindPopup(function (layer) {
return layer.feature.properties.description;
}).addTo(map);
```

## Methods

| Method | Returns | Description |
| --- | --- | --- |
| `geometryToLayer(featureData: Object, options?: GeoJSON options)` | `Layer` | Creates a `Layer` from a given GeoJSON feature. Can use a custom |
| `coordsToLatLng(coords: Array)` | `LatLng` | Creates a `LatLng` object from an array of 2 numbers (longitude, latitude) |
| `coordsToLatLngs(coords: Array, levelsDeep?: Number, coordsToLatLng?: Function)` | `Array` | Creates a multidimensional array of `LatLng`s from a GeoJSON coordinates array. |
| `latLngToCoords(latlng: LatLng, precision?: Number|false)` | `Array` | Reverse of [`coordsToLatLng`](#geojson-coordstolatlng) |
| `latLngsToCoords(latlngs: Array, levelsDeep?: Number, close?: Boolean, precision?: Number|false)` | `Array` | Reverse of [`coordsToLatLngs`](#geojson-coordstolatlngs) |
| `getFeature(layer: Layer, newGeometry: Object)` | `Object` | Returns GeoJSON geometries/features of layer with new GeoJSON geometry. |
| `asFeature(geojson: Object)` | `Object` | Normalize GeoJSON geometries/features into GeoJSON features. |
