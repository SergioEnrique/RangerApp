function GoogleMap(){

	this.initialize = function(){
		var map = showMap();
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