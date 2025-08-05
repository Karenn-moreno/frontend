//realizar un programa que ingrese un numero entero y genere una lista desde 0 hasta el numero ingresado
/*
let max, contar ,lista;

max=parseInt(prompt("Ingrese numero"));//lo paso a un numero entero
contar=0;
lista="";

while(contar<max){
    lista+=contar +"-";
    contar++;
}
lista+=contar;
document.writeln(lista);
*/
//----------------------------------------------------------------------------------

//Realizar un programa que solicite un numero del 1 - 5 si ingresa otro numero 
// sigue pidiendo hasta que ingrese el numero correcto

/*
numero=0;
while (numero<1 || numero>5){
    numero=parseInt(prompt("Ingrese un numero entre 1-5"));
    alert("Pruebe nuevamente");
}
alert("correcto");
*/
//-------------------------------------------------------------------------
//recorrer array con while
/*
let coches=["Ford", "fiat","ferrari","mercedez"];
let x=0;
let text="";
while(coches[x]){
    text+=coches[x]+"<br>";
    x++;
}
document.writeln(text);
*/
//---------------------------------------------------------------
//programa que pregunte al usuario si desea continuar en el programa 
//si el usuario pulsa la letr N o n . el programa finaliza
//otra respuesta se repite la pregunta

/*
let letra;
while(letra!= "N" && letra!="n"){
    letra=prompt("Desea continuar en el programa?");
}
alert("programa finalizado");
*/
//-----------------------------------------------------------------
//realizar un programa que pida al usuario una contraseña
// si coincide con la contraseña del script devolvera un msj
//"acceso concedido" y si no coincide "acceso denegado"
//si falla 3 veces saldra cartel "alerta intruso en el sistema"
/*
let acceso="pasar";
let contador=0;
let contraseña;

while(contraseña!=acceso && contador<3){
    contraseña=prompt("ingrese contraseña");
    if(contraseña==acceso){
        alert("Bienvenido");
    }
    else{
        alert("Acceso denegado");
        contador++;
    }
    if(contador==3){
        alert("intruso en el sistema");
    }
    
}
*/

//------------------------------------------------------------
//programa para utilizar break
/*/
let contador=0;
while (contador<10){
    if (contador===5){
        break;//rompe la iteracion
    }
    document.writeln(contador);
    contador++;
}
*/
//------------------------------------------------------------------
//Programa con for utilizando continue
for(let i=0; i<10;i++){
    if(i===5){
        continue;//corta el 5 
    }
    document.writeln(i);
}