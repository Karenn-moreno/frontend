/*
cadena1='tercer clase js';
//modificado=cadena1.charAt(7);
alert(cadena1.toLowerCase());
*/

/// PRIMERA LETRA EN MAYUSCULA EL RESTO EN MINUSCULA
cadena = prompt("Ingrese su nombre");
cadena = cadena.toLowerCase(); // todo a minúsculas
letraMayuscula = cadena.charAt(0).toUpperCase(); // primera en mayúscula
cadenaseccion = cadena.slice(1); // resto
completo = letraMayuscula + cadenaseccion;
alert(completo);