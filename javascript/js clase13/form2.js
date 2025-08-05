//CHECKBOX ACEPTAR TERMINOS CONDICIONES

//obtener datos de un input checkbos
const bt1= document.getElementById("verificar");
bt1.addEventListener("click",verifico);

function verifico(){
    const checkbox=document.getElementById("aceptar").checked;//verificar que esta marcado
    const msj= checkbox ? "Checkbox Marcado": "Checkbox no marcado"; //Se pregunta si/no
    document.getElementById("estado").textContent=msj; //lo que contiene la variable
    document.writeln(msj);
}