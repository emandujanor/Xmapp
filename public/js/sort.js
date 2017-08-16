
      
var cargarPagina = function () {    
    obtenerEventos();
	$("#formulario").submit(filtrarEventos);
};
var eventos = [];
var plantillaContacto = '<article class="row contact">' +
'<div class="card-panel hoverable grey lighten-5 z-depth-1">' +
  '<div class="row valign-wrapper">' +
    '<div class="col s9">' +
        '<h5 class="name">__nombre__</h5>' +
      '<span class="black-text">' +
        'edad: __numero__' +
      '</span>' +
    '</div>' +
  '</div>' +
'</div>' +
'</article>';
var obtenerEventos = function () {
    $.get("https://x-app-a4675.firebaseio.com/actividades.json", function(data, status){
        var activities = data;                
        $.each(activities, function(key,val) {
            eventos.push(val);
        });
        mostrarEvent(eventos);
    });
    
};
console.log(eventos);

var mostrarEvent = function (events) {
    var plantillaFinal = "";
	events.forEach(function (event) {
        plantillaFinal += plantillaContacto.replace("__nombre__", event.nombre)
        .replace("__numero__", event.edad)
        .replace("__foto__", event.costo);
	});
	$("#busquedaCont").html(plantillaFinal);
};
        var filtrarEventos = function (e) {
            e.preventDefault();
            var criterioBusqueda = $("#search").val().toLowerCase();
            console.log(eventos);
            var eventosFiltrados = eventos.filter(function (evento) {
                return evento.nombre.toLowerCase().indexOf(criterioBusqueda) >= 0;
            });
            mostrarEvent(eventosFiltrados);
        };
$(document).ready(cargarPagina);