//input tipo radio seleccion de genero
//obtener datos de la  seleccion  de input type radio

const bt1=document.getElementById("seleccion");
bt1.addEventListener("click",datoIngresado);

function datoIngresado(){
    //obtengo el radio seleccionado
    const generoElegido= document.querySelector(`input[name="genero"]:checked`);
    const msj=generoElegido ? `Se selecciono: ${generoElegido.value}`:`no seleccionaste nada `
    document.writeln(msj);
}