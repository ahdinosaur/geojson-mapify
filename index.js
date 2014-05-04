L = require('leaflet');
require('leaflet-markercluster');

module.exports = function (options) {
  var map = new L.Map(options.map, options.mapOptions);

  var geoJson = L.geoJson(options.geoJson, options.geoJsonOptions);

  map.fitBounds(geoJson.getBounds().pad(0.05))
  map.addLayer(new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'));
  
  geoJson.addTo(map); 

  // TODO figure out
  //var markers = new L.MarkerClusterGroup();
  //markers.addLayer(communityGeo);
  //map.addLayer(markers);
  
  return map;
};
