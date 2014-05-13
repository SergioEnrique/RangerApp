/*$( document ).on( "pagecreate", "#map-page", function() {
    var defaultLatLng = new google.maps.LatLng(34.0983425, -118.3267434);  // Default to Hollywood, CA when no geolocation support
    if ( navigator.geolocation ) {
        function success(pos) {
            // Location found, show map with these coordinates
            drawMap(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
        }
        function fail(error) {
            drawMap(defaultLatLng);  // Failed to find location, show default map
        }
        // Find the users current position.  Cache the location for 5 minutes, timeout after 6 seconds
        navigator.geolocation.getCurrentPosition(success, fail, {maximumAge: 500000, enableHighAccuracy:true, timeout: 6000});
    } else {
        drawMap(defaultLatLng);  // No geolocation support, show default map
    }
    function drawMap(latlng) {
        var myOptions = {
            zoom: 10,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
        // Add an overlay to the map of current lat/lng
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "Greetings!"
        });
    }
});*/

$('#map-page').live('pageshow', function(event) {
    var map = new GoogleMap();
    map.initialize();
    addMarkersToMap(map);
});

var addMarkersToMap = function(map){
    var mapBounds = new google.maps.LatLngBounds(); // Para cargar Bundles
    
    var latitudeAndLongitudeOne = new google.maps.LatLng('19.0328754', '-98.2421974');

    var markerOne = new google.maps.Marker({
        position: latitudeAndLongitudeOne,
        map: map
    });

    var latitudeAndLongitudeTwo = new google.maps.LatLng('19.0231492', '-98.2445106');

    var markerOne = new google.maps.Marker({
        position: latitudeAndLongitudeTwo,
        map: map
    });

    mapBounds.extend(latitudeAndLongitudeOne);
    mapBounds.extend(latitudeAndLongitudeTwo);
    
    map.fitBounds(mapBounds);
}