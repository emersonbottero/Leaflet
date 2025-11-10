---
layout: home

hero:
  name: Leaflet
  text: Building Powerful Interactive Map
  tagline: The leading open-source JavaScript library for mobile-friendly interactive maps
  actions:
    - theme: brand
      text: Quickstart
      link: ./guide/getting-started
    - theme: alt
      text: GitHub
      link: https://github.com/vuejs/vitepress
  image:
    src: logo.png
    alt: VitePress

features:
  - icon: 🏁
    title: Layers Out of the Box
    details: |
        • Tile layers, WMS<br>
        • Markers, Popups<br>
        • Vector layers: polylines, polygons, circles, rectangles<br>
        • Image overlays<br>
        • GeoJSON
  - icon: 🎛️
    title: Map Controls
    details: |
        • Zoom buttons<br>
        • Attribution<br>
        • Layer switcher<br>
        • Scale
  - icon: 🖥️
    title: Desktop Browser Support
    details: |
        • Chrome<br>
        • Firefox<br>
        • Safari 5+<br>
        • Opera 12+<br>
        • IE 9–11<br>
        • Edge
  - icon: 📱
    title: Mobile Browser Support
    details: |
        • Safari for iOS 7+<br>
        • Chrome <br>
        • Firefox <br>
        • IE10+ for Win8 devices
  - icon: 🚀
    title: Performance Features
    details: |
        • Hardware acceleration on mobile<br>
        • Really smooth Panning and zooming<br>
        • Very fast smart polyline/polygon rendering<br>
        • Modular build system for leaving out features you don't need<br>
        • Tap delay elimination on mobile
  - icon: 🤏
    title: Interaction Features
    details: |
        • Drag panning with inertia<br>
        • Scroll wheel zoom<br>
        • Pinch-zoom on mobile<br>
        • Double click zoom<br>
        • Zoom to area (shift-drag)<br>
        • Keyboard navigation<br>
        • Events: click, mouseover, etc.<br>
        • Marker dragging
  - icon: 🦚
    title: Visual Features
    details: |
        • Zoom and pan animation<br>
        • Tile and popup fade animation<br>
        • Very nice default design for markers, popups and map controls<br>
        • Retina resolution support
  - icon: 🎨
    title: Customization Features
    details: |
        • Pure CSS popups and controls for easy restyling
        • Image- and HTML-based markers
        • A simple interface for custom map layers and controls
        • Custom map projections (with EPSG:3857/4326/3395 out of the box)
        • Powerful OOP facilities for extending existing classes
  - icon: 🎲
    title: Misc
    details: |
        • Extremely lightweight<br>
        • No external dependencies
---


<div class="usedby">
  <h2>Trusted by the best</h2>
  <div class="container">
    <a class="logo logo-github" href="https://github.com">GitHub</a>
    <a class="logo logo-foursquare" href="http://foursquare.com">foursquare</a>
    <a class="logo logo-pinterest" href="https://www.pinterest.com">Pinterest</a>
    <a class="logo logo-facebook" href="https://www.facebook.com/">Facebook</a>
    <a class="logo logo-evernote" href="https://evernote.com">Evernote</a>
    <a class="logo logo-etsy" href="https://www.etsy.com/">Etsy</a>
    <a class="logo logo-flickr" href="https://www.flickr.com/">Flickr</a>
    <a class="logo logo-500px" href="https://500px.com">500px</a>
    <a class="logo logo-datagov" href="http://www.data.gov/">Data.gov</a>
    <a class="logo logo-european-commission" href="http://ec.europa.eu/">European Commission</a>
    <a class="logo logo-wpost" href="https://www.washingtonpost.com">The Washington Post</a>
    <a class="logo logo-ftimes" href="http://www.ft.com">Financial Times</a>
    <a class="logo logo-npr" href="http://www.npr.org">NPR</a>
    <a class="logo logo-usatoday" href="http://www.usatoday.com">USA Today</a>
    <a class="logo logo-nps" href="http://www.nps.gov/">National Park Service</a>
    <a class="logo logo-ign" href="http://ign.com">IGN.com</a>
    <a class="logo logo-openstreetmap" href="https://www.openstreetmap.org/">OpenStreetMap</a>
  </div>
</div>

If you find some feature really missing in Leaflet, first check if there's a [plugin for it](https://leafletjs.com/plugins.html) and if it's been discussed before already on [GitHub issues](https://github.com/Leaflet/Leaflet/issues). If not, please open a new GitHub issue.

## Getting Involved

Let's create the best mapping library in the world! Leaflet was originally created by [Volodymyr Agafonkin](https://agafonkin.com/), but is now developed by a big community of [contributors](https://github.com/Leaflet/Leaflet/graphs/contributors). Pull requests are always welcome. However, there are many more ways to get involved with the development of Leaflet.

You can help the project tremendously by discovering and reporting bugs, improving documentation, helping others on Stack Overflow, GIS Stack Exchange and GitHub issues, X to @LeafletJS and spreading the word about Leaflet among your colleagues and friends.

Check out the contribution guide for more information on getting involved with Leaflet development.

<style scoped>
  .usedby {
    margin: 0 0 3em;
    text-align: center;
    padding: 0 3em 0;

    h2 {
     text-align: center
    }
  }

  .logo {
    display: inline-block;
    opacity: 0.8;
    height: 32px;
    overflow: hidden;
    text-indent: -9999px;
    margin: 1em;
    background: url(/Leaflet/images/logos.png);
    background-repeat: no-repeat;
    background-size: 100%;
    vertical-align: middle;
    -webkit-transition: opacity .15s ease;
    transition: opacity .15s ease;
  }

  .logo:hover { opacity: 1; }

  .logo-foursquare {
    background-position: 50% -4px;
    width: 135px;
  }

  .logo-pinterest {
    background-position: 50% -39px;
    width: 115px;
  }

  .logo-500px {
    background-position: 50% -48px;
    width: 72px;
    background-size: 80px;
  }

  .logo-evernote {
    background-position: 50% -169px;
    width: 170px;
    height: 43px;
  }

  .logo-ftimes {
    background-position: 50% -190px;
    width: 112px;
    height: 40px;
    background-size: 145px;
  }

  .logo-github {
    background-position: 50% -178px;
    width: 110px;
  }

  .logo-wpost {
    background-position: 50% -327px;
    width: 170px;
  }

  .logo-npr {
    background-position: 50% -214px;
    width: 100px;
    height: 34px;
  }

  .logo-usatoday {
    background-position: 50% -299px;
    width: 120px;
    height: 34px;
  }

  .logo-facebook {
    background-position: 50% -359px;
    width: 130px;
  }

  .logo-flickr {
    background-position: 50% -277px;
    width: 92px;
    height: 29px;
  }

  .logo-datagov {
    background-position: 50% -452px;
    width: 135px;
    height: 26px;
  }

  .logo-ign {
    background-position: 50% -393px;
    width: 110px;
  }

  .logo-etsy {
    background-position: 50% -428px;
    width: 57px;
    background-size: 110px;
  }

  .logo-european-commission {
    background-position: 50% -526px;
    width: 125px;
  }

  .logo-nps {
    background-position: 50% -483px;
    width: 32px;
    height: 40px;
    margin-top: .5em;
    margin-bottom: .5em;
    background-size: 106px;
  }

  .logo-openstreetmap {
    background-position: 50% -796px;
    width: 160px;
    height: 56px;
  }

  .features {
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
  }
  .features ul {
    padding-left: 1.6em;
    margin: 0 0 1.8em;
  }
  .features h3 {
    margin: 0 0 0.8em;
    padding: 0;
  }
  .features h4 {
    margin: 0 0 0.3em;
  }

  .dark {
    .logo-github,
    .logo-foursquare,   
    .logo-ftimes,
    .logo-ign,
    .logo-500px {
      filter: invert(1)
    }

    .logo-evernote{
      filter: invert(1) hue-rotate(135deg)
    }

    .logo-ign {
      filter: invert(1) hue-rotate(185deg);
    }
  }
</style>