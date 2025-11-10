# DomEvent

@namespace DomEvent
Utility functions to work with the [DOM events](https://developer.mozilla.org/docs/Web/API/Event), used by Leaflet internally.

## Methods

| Method | Returns | Description |
| --- | --- | --- |
| `on(el: HTMLElement, types: String, fn: Function, context?: Object)` | `this` | Adds a listener function (`fn`) to a particular DOM event type of the |
| `on(el: HTMLElement, eventMap: Object, context?: Object)` | `this` | Adds a set of type/listener pairs, e.g. `{click: onClick, pointermove: onPointerMove}` |
| `off(el: HTMLElement, types: String, fn: Function, context?: Object)` | `this` | Removes a previously added listener function. |
| `off(el: HTMLElement, eventMap: Object, context?: Object)` | `this` | Removes a set of type/listener pairs, e.g. `{click: onClick, pointermove: onPointerMove}` |
| `off(el: HTMLElement, types: String)` | `this` | Removes all previously added listeners of given types. |
| `off(el: HTMLElement)` | `this` | Removes all previously added listeners from given HTMLElement |
| `stopPropagation(ev: DOMEvent)` | `this` | Stop the given event from propagation to parent elements. Used inside the listener functions: |
| `disableScrollPropagation(el: HTMLElement)` | `this` | Adds `stopPropagation` to the element's `'wheel'` events (plus browser variants). |
| `disableClickPropagation(el: HTMLElement)` | `this` | Adds `stopPropagation` to the element's `'click'`, `'dblclick'`, `'contextmenu'` |
| `preventDefault(ev: DOMEvent)` | `this` | Prevents the default action of the DOM Event `ev` from happening (such as |
| `stop(ev: DOMEvent)` | `this` | Does `stopPropagation` and `preventDefault` at the same time. |
| `getPropagationPath(ev: DOMEvent)` | `Array` | Returns an array containing the `HTMLElement`s that the given DOM event |
| `getPointerPosition(ev: DOMEvent, container?: HTMLElement)` | `Point` | Gets normalized pointer position from a DOM event relative to the |
| `getWheelPxFactor()` | `Number` | Gets the wheel pixel factor based on the devicePixelRatio |
| `getWheelDelta(ev: DOMEvent)` | `Number` | Gets normalized wheel delta from a wheel DOM event, in vertical |
