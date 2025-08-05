//Buscar el boton
document.getElementById("obtener").addEventListener("click",function(event){ event.preventDefault();//para que no cargue la pagina 
    const valorInput=document.getElementById("nombre").value;
    document.getElementById("resultado").textContent=`El nombre ingresado es: ${valorInput}`;
});
