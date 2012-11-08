

  Template.mesannonces_map_tpl.rendered = function () {

  //alert( $('#mymap') );
  //alert( $('#mymap').html() );
  console.log(" ~~~~~~~~ >>> session latitude : " + Session.get('latitude') );
  console.log(" ~~~~~~~~ >>> session longitude : " + Session.get('longitude') );

  if ( Session.get('latitude') != '?' )
  {

    var map = new L.Map( "mesannonces_map" );
    console.log(" ~~~~~~~~ >>> Map initialisée " );
    /*
    var greenIcon = L.icon({
        iconUrl: 'http://leaflet.cloudmade.com/docs/images/leaf-green.png',
        shadowUrl: 'http://leaflet.cloudmade.com/docs/images/leaf-shadow.png',

        iconSize:     [38, 95], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    */


    osmTile = "http://tile.openstreetmap.org/{z}/{x}/{y}.png";
    osmCopyright = "Map data &copy; 2012 OpenStreetMap contributors";
    osmLayer = new L.TileLayer(osmTile, { maxZoom: 18, attribution: osmCopyright } );

    map.addLayer( osmLayer );

    center = new L.LatLng( Session.get('latitude') , Session.get('longitude') );
    //center = new L.LatLng( 43.2622379 , 5.3879614 );
    zoom = 16;
    map.setView( center, zoom );

    //L.marker([43.2622379 , 5.3879614], {icon: greenIcon}).addTo(map).bindPopup("I am a green leaf.");;
    //L.marker([43.2622379 , 5.3879614]).addTo(map).bindPopup("I am a green leaf.");

    var annonces = req_mesannonces();
    annonces.forEach( function (anon) {
          console.log('~~~>> anon : ' + anon );
          console.log('~~~>> anon latitude : ' + anon.emplacement.lat );
          console.log('~~~>> anon longitude : ' + anon.emplacement.lon );
          L.marker([anon.emplacement.lat , anon.emplacement.lon]).addTo(map).bindPopup( anon.titre );
        });

    var circle = L.circle([Session.get('latitude') , Session.get('longitude')], 100, {
    //var circle = L.circle([43.2622379 , 5.3879614], 100, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.2
    }).addTo(map);
  }

}