//obtener el elememto boton

let Bt=document.getElementById("bt1");

//agregar un event listenner

Bt.addEventListener("click",manejarClick);

//defenir funcion que se ejecutara cuando se haga click en el boton

function manejarClick(){
    alert("hiciste click en el boton");
}

////////

//obtener el elememto boton sin ID
let boton1= document.getElementById("bt2");

//crerar funcion Accion que realizara la tarea deseada

function accion(){
    alert("holaaa");
}
//escuchamos el evento click y lo asociamos con la funcion
boton1.addEventListener("click",accion);