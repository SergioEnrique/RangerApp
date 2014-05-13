
// Cuando se carga la página
$('#reposHome').bind('pageinit', function(event) {
    loadRepos();
});

// Cuando se muestra la página
$('#reposDetail').live('pageshow', function(event) {
    var owner = getUrlVars().owner;
    var name = getUrlVars().name;
    loadRepoDetail(owner,name);
});

// Cargar información de un archivo json en repo-detail.html
function loadRepoDetail(owner,name) {
     $.ajax("https://api.github.com/repos/" + owner + "/" + name).done(function(data) {
         var repo = data;
         console.log(data); // Creo que Muestra en consola la información

         $('#repoName').html("<a href='" + repo.homepage + "'>" + repo.name + "</a>");
         $('#description').text(repo.description);
         $('#forks').html("<strong>Forks:</strong> " + repo.forks + "<br><strong>Watchers:</strong> " + repo.watchers);

         $('#avatar').attr('src', repo.owner.avatar_url);
         $('#ownerName').html("<strong>Owner:</strong> <a href='" + repo.owner.url + "'>" + repo.owner.login + "</a>");
     });
}

// Cargar información de un archivo json en index.html
function loadRepos() {
    $.ajax("https://api.github.com/legacy/repos/search/javascript").done(function(data) {
        var i, repo;
        $.each(data.repositories, function (i, repo) {
            $("#allRepos").append("<li><a href='repo-detail.html?owner=" + repo.username + "&name=" + repo.name + "'>"
            + "<h4>" + repo.name + "</h4>"
            + "<p>" + repo.username + "</p></a></li>");
        });
        $('#allRepos').listview('refresh');
    });
}

// Recuperar variables pasadas con jQuery
function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

//--------------------------------------------------------------------------------------- 
// Métodos para la base de datos jQuery
//---------------------------------------------------------------------------------------

var db; // Variable que almacena la base de datos

// Abre la conección a la base de datos cuando se carga la página
$('#reposHome').bind('pageinit', function(event) {
    loadRepos();
    db = window.openDatabase("repodb","0.1","GitHub Repo Db", 1000);
    db.transaction(createDb, txError, txSuccess);
});

// Se crea la base de datos
function createDb(tx) {
    tx.executeSql("DROP TABLE IF EXISTS repos");
    tx.executeSql("CREATE TABLE repos(user,name)");
}

// Se muestran errores en consola si es que existen
function txError(error) {
    console.log(error);
    console.log("Database error: " + error);
}

// Se manda un mensaje a consola de éxito
function txSuccess() {
    console.log("Success");
}

// AGREGAR A FAVORITO
// On clic del botón guardar a favorito
$("#saveBtn").bind("click", saveFave);

// AGREGAR A FAVORITO
// Cconección a base de datos
function saveFave() {
    db = window.openDatabase("repodb","0.1","GitHub Repo Db", 1000);
    db.transaction(saveFaveDb, txError, txSuccessFave);
}

// AGREGAR A FAVORITO
// Guardar en la base de datos
function saveFaveDb(tx) {
    var owner = getUrlVars().owner;
    var name = getUrlVars().name;

    tx.executeSql("INSERT INTO repos(user,name) VALUES (?, ?)",[owner,name]);
}

// AGREGAR A FAVORITO
// Mostrar en consola mensaje de éxito
function txSuccessFave() {
    console.log("Save success");

    disableSaveButton();
}