var cargarPagina = function () {
    obtenerCoordenadas();
    
};
var locations = [];
var obtenerCoordenadas = function () {
    $.get("https://x-app-a4675.firebaseio.com/actividades.json", function(data, status){
        var activities = data;                
        $.each(activities, function(key,val) {
            locations.push(val.direccion.coordenadas);
        });
        initMap();
    });
    
};
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: {lat: -28.024, lng: 140.887},           
      });
      var pos={};
    navigator.geolocation.getCurrentPosition(function (position) {
        var pos = {
        lat: position.coords.latitude,
         lng: position.coords.longitude
         };
         map.setCenter(pos); 
         var marker = new google.maps.Marker({
             position: pos,
             map: map,
             animation: google.maps.Animation.DROP,
             draggable: true,
             });     
        marker.addListener('click', toggleBounce);
        function toggleBounce() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
        }              
     });
     
     
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    var lugar = locations.map(function(location, i) {    
        console.log(location);    
        return new google.maps.Marker({
          position: location,
          label: labels[i % labels.length]          
        });        
      });

      
      var markerCluster = new MarkerClusterer(map, lugar,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

        
  }

$(document).ready(cargarPagina);
