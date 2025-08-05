//formato dd/mm/yyyy

var fecha=new Date();
//obtener el dia
var dd=fecha.getDate();
//obtener el mes -hay que sumar +1
var mm=fecha.getMonth()+1;
//obtener el año completo 
var yyyy=fecha.getUTCFullYear();

//pregunto si fecha tiene un digito y si lo es agrego cero
if(dd<10){
    dd="0"+dd;
}
if(mm<10){
    mm="0"+mm;
}

fecha_completa=dd+"-"+mm+"-"+yyyy;

document.writeln(fecha_completa);

//miercoles , 2 de julio de 2025