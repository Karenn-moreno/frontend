//Mensaje el hacer click y luego cambia color del boton
//obtengo el elemento
const bt4 =document.querySelector("button");
//coloco en una constante una funcion
const accion = ()=> alert("hola a todos!!");
//coloco en una constante una funcion
const palanca=()=> bt4.classList.toggle("red");
//obengo el evento utilizando las dos funciones anteriores
bt4.addEventListener("click", accion);
bt4.addEventListener("click", palanca);
