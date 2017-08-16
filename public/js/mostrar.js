var cargarPagina = function () {
    mastraEvnetoF
    ();
    obtenerEventos();

};
var eventos = [];
var plantillaEvent =
'<div class="key-reserva" data-key="__key__">'+
  '<div class="uk-card uk-card-default uk-card-hover">'+
    '<div class="uk-card-header">'+
        '<div class="uk-grid-small uk-flex-middle" uk-grid>'+
            '<div class="uk-width-auto">'+
                '<img  width="140" height="140" src="__imagen__">'+
            '</div>'+
            '<div class="uk-width-expand">'+
              '<h3 class="uk-card-title uk-margin-remove-bottom">__nombre__</h3>'+
              '<p class="uk-text-meta uk-margin-remove-top">$__fecha__</p>'+
            '</div>'+
        '</div>'+
    '</div>'+
    '<div class="uk-card-body">'+
       ' <p>__descripcion__</p>'+
    '</div>'+
   '<div class="uk-card-footer">'+
        '<a class="boton-reserva" href="details.html" class="uk-button uk-button-text text-blue">Leer más</a>'+
    '</div>'+
  '</div>'+
'</div>';
var obtenerEventos = function () {
    $.get("https://x-app-a4675.firebaseio.com/actividades.json", function(data, status){
        var activities = data;
        $.each(activities, function(key,val) {
            eventos.push(val);
        });

    });

};
var mostrarEvent = function (events) {
    var plantillaFinal = "";
	events.forEach(function (event) {
        plantillaFinal += plantillaBusquedaEvent.replace("__nombre__", event.nombre)
        .replace("__descripcion__", event.descripcion)
        .replace("__imagen__", event.costo);
	});
	$("#contenido_busqueda").html(plantillaFinal);
};
var filtrarEventos = function (e) {
    e.preventDefault();
    var criterioBusqueda = $("#search").val().toLowerCase();
    console.log(eventos);
    var eventosFiltrados = eventos.filter(function (evento) {
        return evento.nombre.toLowerCase().indexOf(criterioBusqueda) >= 0;
    });
};
var mostrarEventF = function (event) {
    var plantillaFinal = "";
    console.log(event);
         plantillaFinal +=  plantillaEvent.replace("__nombre__", event.nombre)
         .replace("__descripcion__", event.descripcion)
         .replace("__imagen__", event.imagen).replace("__fecha__",event.costo);

	 $("#contenido_busqueda").html(plantillaFinal);
};
var mastraEvnetoF = function () {
    var evento =JSON.parse(localStorage.getItem("lastname"));
    var data =evento[0];
    console.log(mostrarEventF(data));
}
$(document).ready(cargarPagina);
