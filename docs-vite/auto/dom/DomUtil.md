# DomUtil

@namespace DomUtil

Utility functions to work with the [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model)
tree, used by Leaflet internally.

Most functions expecting or returning a `HTMLElement` also work for
SVG elements. The only difference is that classes refer to CSS classes
in HTML and SVG classes in SVG.

## Methods

| Method | Returns | Description |
| --- | --- | --- |
| `get(id: String|HTMLElement)` | `HTMLElement` | Returns an element given its DOM id, or returns the element itself |
| `create(tagName: String, className?: String, container?: HTMLElement)` | `HTMLElement` | Creates an HTML element with `tagName`, sets its class to `className`, and optionally appends it to `container` element. |
| `toFront(el: HTMLElement)` |  | Makes `el` the last child of its parent, so it renders in front of the other children. |
| `toBack(el: HTMLElement)` |  | Makes `el` the first child of its parent, so it renders behind the other children. |
| `setTransform(el: HTMLElement, offset: Point, scale?: Number)` |  | Resets the 3D CSS transform of `el` so it is translated by `offset` pixels |
| `setPosition(el: HTMLElement, position: Point)` |  | Sets the position of `el` to coordinates specified by `position`, |
| `getPosition(el: HTMLElement)` | `Point` | Returns the coordinates of an element previously positioned with setPosition. |
| `disableTextSelection()` |  | Prevents the user from selecting text in the document. Used internally |
| `enableTextSelection()` |  | Cancels the effects of a previous [`DomUtil.disableTextSelection`](#domutil-disabletextselection). |
| `disableImageDrag()` |  | Prevents the user from generating `dragstart` DOM events, usually generated when the user drags an image. |
| `enableImageDrag()` |  | Cancels the effects of a previous [`DomUtil.disableImageDrag`](#domutil-disableimagedrag). |
| `preventOutline(el: HTMLElement)` |  | Makes the [outline](https://developer.mozilla.org/docs/Web/CSS/outline) |
| `restoreOutline()` |  | Cancels the effects of a previous [`DomUtil.preventOutline`](#domutil-preventoutline). |
| `getSizedParentNode(el: HTMLElement)` | `HTMLElement` | Finds the closest parent node which size (width and height) is not null. |
| `getScale(el: HTMLElement)` | `Object` | Computes the CSS scale currently applied on the element. |
