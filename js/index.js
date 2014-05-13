// Inicializar mapa
$('#map-page').live('pageshow', function(event) {
    var map = new GoogleMap();
    map.initialize();
});