# VideoOverlay

Used to load and display a video player over specific bounds of the map. Extends `ImageOverlay`.

A video overlay uses the [`<video>`](https://developer.mozilla.org/docs/Web/HTML/Element/video)
HTML element.

### Usage example

```js
const videoUrl = 'https://www.mapbox.com/bites/00188/patricia_nasa.webm',
videoBounds = [[ 32, -130], [ 13, -100]];
new VideoOverlay(videoUrl, videoBounds ).addTo(map);
```

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `autoplay` | `Boolean` | `true` | Whether the video starts playing automatically when loaded. |
| `controls` | `Boolean` | `false` | Whether the browser will offer controls to allow the user to control video playback, including volume, seeking, and pause/resume playback. |
| `loop` | `Boolean` | `true` | Whether the video will loop back to the beginning when played. |
| `keepAspectRatio` | `Boolean` | `true` | Whether the video will save aspect ratio after the projection. |
| `muted` | `Boolean` | `false` | Whether the video starts on mute when loaded. |
| `playsInline` | `Boolean` | `true` | Mobile browsers will play the video right where it is instead of open it up in fullscreen mode. |

## Events

| Event | Data | Description |
| --- | --- | --- |
| `load` |  | Fired when the video has finished loading the first frame |
