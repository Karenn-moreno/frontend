/*
function saludar(){
    alert("hola");
}
saludar();
*/

//realizar una tabla de multiplicar ingresando un numero, 0 al 12
/*
function tablaDeMultiplicacion(n1,n2){
    return n1+"x"+n2+"="+(n1*n2)+"<br>"
}
let n=parseInt(prompt("Ingrese un numero entero entero entre el 0 y 12"));
let i=0;

for(i=0;i<13;i++){
    document.writeln(tablaDeMultiplicacion(n,i));

}*/

//------------------------------------------------------------------------------
//EL NUMERO MAYOR
/*
function numeroMayor(n1,n2,n3){
    if(n1>n2 && n1>n3){
        return n1;
    }else if(n2>n1 &&n2>n3){
        return n2;
    }else if(n3>n1 &&n3>n2){
        return n3;
    }else{
        return "son iguales";
    }
}
//pido al usuario y guardo en variables
let nro1=parseInt(prompt("Ingrese el primer numero"));
let nro2=parseInt(prompt("Ingrese el segundo numero"));
let nro3=parseInt(prompt("Ingrese el tercer numero"));

//guardo la respuesta funcion
let respuesta=numeroMayor(nro1,nro2,nro3); //tambien puedo escribir los valores directo aqui, comentando el codigo de arriva de pedir al usuario
alert(respuesta);
*/

//----------------------------------------------------------------------------------------------------------------------
//INGRESAR UNA LETRA Y DETERMINAR POR MEDIO DE UNA FUNCION SI ES UNA VOCAL
/*
function vocal(x){
    if (x==="a"|| x==="e"|| x==="i"||x==="e"||x==="o"|| x==="u"){
        return "es una vocal"
    }else{
        return "no es una vocal"
    }
}

let letra=prompt("Ingrese una letra");
let respuesta =vocal(letra);
alert(respuesta);
*/

//------------------------------------------------------------------------
//suma de contenidos de un array
function sumaArray(arreglo){
    let logitudArreglo= arreglo.length;
    let suma=0;
    for(let i=0;i<logitudArreglo;i++){
        suma+=arreglo[i];
    }
    return suma
}

let respuesta=sumaArray([2,5,6,41,80]);
alert(respuesta);