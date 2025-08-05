//DIMENSIONES INTERIORES  (parte blanca de la pagina)
function veo(){
    const anchoInterior=window.innerWidth;
    const altoInterior=window.innerHeight;
    alert("Ancho interior="+anchoInterior+"px <br>"+"alto interior="+altoInterior+"px");
}
//DIMENSIONES EXTERIORES
function veo1(){
    const anchoExterior=window.outerWidth;
    const altoExterior=window.outerHeight;
    alert("Ancho exterior="+anchoExterior+"px <br>"+"alto exterior="+altoExterior+"px");
}

function veo2(){
    window.open("https://www.google.com","_selft","width=500 , height=200");
}

function veo3(){
    window.open("https://www.wikipedia.org","ventana wikipedia","widht=600 ,height=400, menubar=yes, toolbar=yes,location=no, scrollbar=yes")
}
function veo4(){
    const nuevaVentana= window.open(",","widht=400,height=200");
    nuevaVentana.document.writeln("<h1>Hola desde la ventana</h1><p>Esto es el contenido dianamico</p>")
}
function veo5(){
    const ventana=window.open(",","widht=600 , height=400");
    ventana.document.writeln("<h2>Documento para imprimir </h2> <p>Esto es un texto  que puedo imprimir desde el navegador</p>");
    ventana.document.close();
    ventana.print();
}