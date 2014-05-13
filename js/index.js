// Inicializar mapa
$('#map-page').live('pageshow', function(event) {
    var map = new GoogleMap();
    map.initialize();
});

// Cerrar sesión
/*$('#logout').click(function() {
    alert( "Gracias por usar IberoBus App" );
    $.mobile.changePage("index.html", "slide");
});*/
