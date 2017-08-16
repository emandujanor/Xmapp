const url = "https://x-app-a4675.firebaseio.com/actividades.json"
const $form = $("#formulario");
const $busqueda = $("#search").val().toLowerCase();




let cargarLugares = () => {
    $.getJSON(url, function (response) {
        console.log(response); //con esto me da la cantidad de objetos.
        let lugares = response;
        console.log(lugares[1]);
        mostrarLugares(lugares);



    });

};

let mostrarLugares = (lugares) => {
    let plantillaFinal = " ";
    lugares.forEach(function (lugar, index) {
        plantillaFinal += plantillaReserva.replace("__nombre__", lugar.nombre).replace("__costo__", lugar.costo).replace("__descripcion__", lugar.descripcion).replace("__edad__", lugar.edad)
        .replace("__direccion__", lugar.direccion.nombre);
        
        console.log(plantillaFinal);
    });
    $("#busquedaCont").html(plantillaFinal);
}


/*let mostrarLugares = (lugares)=>{
    let plantillaFinal = " ";
    lugares.forEach((lugar, index, obj)=>{
        plantillaFinal += plantillaReserva.replace("__nombre__", lugar.nombre)
        .replace("__costo__", lugar.costo).replace("__direccion__", lugar.direccion).replace("__edad__",lugar.edad);
        
        
   
        console.log(lugar.costo);
        
});
    
    $("#busquedaCont").html(plantillaFinal);
}*/

let cargar = () => {
    $form.submit(prevent);
    cargarLugares();
    mostrarLugares();


}




let prevent = (e) => { //prevenir recarga de pagina 
    e.preventDefault();
    filtrarContactos();

}

let filtrarContactos= ()=>{
    let filtro = .filter(function (cargarLugares) {
		return cargarLugares.nombre.toLowerCase().indexOf($busqueda) >= 0;
});
}

var plantillaReserva =
    '<section class="uk-container uk-margin-large" id="detailEvent">' +
    '<h1 class="text-gray">__nombre__</h1>' +
    '<div class="uk-grid-divider uk-child-width-expand@s" uk-grid>' +
    '<div class="uk-align-center">' +
    '<img src="__imagen__" alt="">' +
    '</div>' +
    '<div>' +
    '<div class="uk-child-width-expand@s uk-margin-medium-top" uk-grid>' +
    '<p><b>FECHA:</b> 04/MAY/2017</p>' +
    '<p><b>COSTO:</b> "__costo__"</p>' +
    '</div>' +
    '<p><b>EDAD:"__edad__"</p>' +
    '<p><b>UBICACIÓN:"__direccion__"</p>' +
    '<p>DESCRIPCIÓN:__descripcion__</p>' +
    '<button class="uk-button color-green text-white uk-margin-large uk-align-right" type="button" uk-toggle="target: #modal-reservation"  >Reservar</button>' +
    ' </div>' +
    '</div>' +
    '</section>';




$(document).ready(cargar);
