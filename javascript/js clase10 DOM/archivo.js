
function cambiarColorDeTitulo(){
    /* document.getElementById("titulo").style.color="#0f0";//identifico id 
    document.getElementById("titulo").style.border="2px solid #000";
    document.getElementById("titulo").style.backgroundColor="#ccc";
    document.getElementById("titulo").style.textAlign="center";*/

    document.getElementById("titulo").style.cssText="background-color: #ccc; color:green; border:2px solid #000 ; text-align:center;";//en un renglon css
    document.getElementById("cuerpo").style.backgroundColor="#ff0";//color fondo
    document.getElementById("parrafo").style.backgroundColor="#ff0";
}

function modoOscuro(){
    document.getElementById("vinculo").href="estilo1.css";
}