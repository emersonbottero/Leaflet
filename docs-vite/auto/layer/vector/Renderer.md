# Renderer

Base class for vector renderer implementations (`SVG`, `Canvas`). Handles the
DOM container of the renderer, its bounds, and its zoom animation.

A `Renderer` works as an implicit layer group for all `Path`s - the renderer
itself can be added or removed to the map. All paths use a renderer, which can
be implicit (the map will decide the type of renderer and use it automatically)
or explicit (using the [`renderer`](#path-renderer) option of the path).

Do not use this class directly, use `SVG` and `Canvas` instead.

The `continuous` option inherited from `BlanketOverlay` cannot be set to `true`
(otherwise, renderers get out of place during a pinch-zoom operation).

@event update: Event
Fired when the renderer updates its bounds, center and zoom, for example when
its map has moved
