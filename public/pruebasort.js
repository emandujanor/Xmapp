const url = "https://x-app-a4675.firebaseio.com/actividades.json"
const $form = $("#formulario");
const $busqueda = $("#search").val().toLowerCase();




let cargarLugares =  () => {
    $.getJSON(url, function (response) {
        console.log(response); //con esto me da la cantidad de objetos.
        let lugar = response;
        console.log(lugar[1]);
        mostrarLugares(lugar);


    });

};


let mostrarLugares = (lugar)=>{
    lugar.forEach((valor, index)=>{
        console.log(valor, index);
    })
}

let cargar = () => {
    $form.submit(filtrarLugares);
    cargarLugares();


}



let filtrarLugares = (e) => {
    e.preventDefault();



}



$(document).ready(cargar);
