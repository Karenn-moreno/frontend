//LISTADO DE NUMEROS DEL 1 AL 10

let texto = "";//declaro una variable cadena vacia
for (var a = 1; a<=10; a+=1){
    texto+=a + "< br>" // "\n" no reconoce porque luego pasa a html con inner 
}
document.getElementById("demo") .innerHTML=texto;//PARA QUE SE PUEDA VER 

//LISTADO DE NUMEROS DEL 10 AL 0
texto = "";//declaro una variable cadena vacia
for (var e = 10; e>-1; e-=1){
    texto+="<b>"+ e + "</b> <br>" //sumo la cadena concatena
}

document.getElementById("demo").innerHTML=texto; //LLAMO AL PARRAFO QUE LO PONGA EN HTML A TEXTO

//LISTADO NUMEROS PARES DEL 0 AL 10

texto="";
for(x=0;x<=10;x+=2){
    texto+=x+"-";
}
document.getElementById("demo").innerHTML=texto;


//LISTADO NUMEROS imPARES DEL 0 AL 11

texto="";
for(i=1; i<12; i+=2){
    texto+=i+"-";
}
document.getElementById("demo").innerHTML=texto;


//colocar una cadena cada letra abajo de la otra

let lenguaje="JavaScript";
textoV="";
for (let x of lenguaje){
    textoV+= x +"<br>";//MANDA PARA ABAJO LA LETRA CADA QUE RECCORE
}
document.getElementById("demo").innerHTML=textoV.toUpperCase();