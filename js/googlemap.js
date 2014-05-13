function GoogleMap(){

	this.initialize = function(){
		var map = showMap();
		addRoutesToMap(map);
		addMarkersToMap(map);
	}

	var showMap = function(){
		var mapOptions = {
			zoom: 16,
			center: new google.maps.LatLng(19.0328754, -98.2421974),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}

		var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

		return map;
	}
}

// Colocar marcadores en el mapa
var addMarkersToMap = function(map){
    var mapBounds = new google.maps.LatLngBounds(); // Para cargar Longitudes y Latitudes
    
    var latitudeAndLongitudeOne = new google.maps.LatLng('19.0328754', '-98.2421974');

    var markerOne = new google.maps.Marker({
        position: latitudeAndLongitudeOne,
        map: map
    });

    var latitudeAndLongitudeTwo = new google.maps.LatLng('19.0231492', '-98.2445106');

    var markerOne = new google.maps.Marker({
        position: latitudeAndLongitudeTwo,
        map: map,
        icon: 'img/bus.png'
    });

    mapBounds.extend(latitudeAndLongitudeOne);
    mapBounds.extend(latitudeAndLongitudeTwo);
    
    map.fitBounds(mapBounds);
}

// Añadir ruta en el mapa
var addRoutesToMap = function(map){
    var ctaLayer = new google.maps.KmlLayer({
        url: 'http://agarti.com.mx/RutaIberoBusNormal.kml'
    });
    ctaLayer.setMap(map);
}