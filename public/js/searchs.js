var cargarPagina = function () {      
$(".busqueda-contenidos").on("click", obtenerEventos);
};

var obtenerEventos = function () {    
    $.get("https://x-app-a4675.firebaseio.com/actividades.json", function(data, status){
        var activities = data;                
        filtroEdades(activities);
    });  
};
var filtroEdades = function (eventos) {
    var criterioBusqueda = $("#select-edad").val();   
    var eventosFiltrados = eventos.forEach(function (evento) {
        var dato = parseInt(criterioBusqueda);
        var dato2=parseInt(evento.edad);
        if(dato2<=dato){   
            var event = evento;  
            console.log(event);                
    }      
});    
};


    
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
$(document).ready(cargarPagina);