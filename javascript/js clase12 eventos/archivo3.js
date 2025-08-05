///contador de clicks

//obtener el objeto 

const bt =document.getElementById("boton");
let contador = 0;
bt.addEventListener("click",()=> {contador++,alert(contador)});