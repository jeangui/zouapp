//--------------------------------------------------------------
// LEAFLET SMART PACKAGE
//------------------------------------------------------------

Package.describe({
  summary: "Leaflet : library interactive map",
  internal: true
});

Package.on_use(function (api, where) {
  api.add_files([
    'leaflet.js',
    'leaflet-src.js',
    'leaflet.ie.css',
    'leaflet.css',
    'images/layers.png',
    'images/marker-icon.png',
    'images/marker-shadow.png',
    'images/zoom-in.png',
    'images/zoom-out.png'
  ], 'client');
});
