//instancio la variable con la fecha

const fecha=new Date();
//fecha completa
document.writeln(fecha);
document.writeln("<br>");

//dia de la semana en numero
let dia=fecha.getDay();//numero
document.writeln(dia);
document.writeln("<br>");


//dia del mes en numero
let dia_mes_nro=fecha.getDate();
document.writeln(dia_mes_nro);
document.writeln("<br>");


//mes en nro
let mes_nro=fecha.getMonth();
document.writeln(mes_nro+1);
document.writeln("<br>");


//obtengo hora
let hora=fecha.getHours();
document.writeln(hora);
document.writeln("<br>");

//obtengo minutos
let minutos=fecha.getMinutes();
document.writeln(minutos);
document.writeln("<br>");


//obtengo segundos
let segundos=fecha.getMilliseconds();
document.writeln(segundos);
document.writeln("<br>");