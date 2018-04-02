// AIzaSyCGAuXcfGc1ye7Tk85s1uLXi7Op4ak2gl8

var map;
function initMap(){
    map = new google.maps.Map(document.getElementById('background-map'), {
        center: {lat: 19.140590, lng: 72.900400},zoom: 10
  });
}
//center-map
if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(function (position) {
         initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
         map.setCenter(initialLocation);
     });
}
