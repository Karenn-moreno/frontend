// miércoles, 2 de julio de 2025

const fecha = new Date();

let dd = fecha.getDate();
let mm = fecha.getMonth() + 1;
let yyyy = fecha.getFullYear();

// Agrega cero si el día o mes tienen un solo dígito
if (dd < 10) {
    dd = "0" + dd;
}
if (mm < 10) {
    mm = "0" + mm;
}
// Obtener el nombre del día con if
let dia;
let diaSemana = fecha.getDay(); // 0 = Domingo, 1 = Lunes, ..., 6 = Sábado

if (diaSemana == 0) {
    dia = "Domingo";
} else if (diaSemana == 1) {
    dia = "Lunes";
} else if (diaSemana == 2) {
    dia = "Martes";
} else if (diaSemana == 3) {
    dia = "Miércoles";
} else if (diaSemana == 4) {
    dia = "Jueves";
} else if (diaSemana == 5) {
    dia = "Viernes";
} else {
    dia = "Sábado";
}
// Obtener el nombre del mes con if
let nombreMes;
if (mm == 1) {
    nombreMes = "enero";
} else if (mm == 2) {
    nombreMes = "febrero";
} else if (mm == 3) {
    nombreMes = "marzo";
} else if (mm == 4) {
    nombreMes = "abril";
} else if (mm == 5) {
    nombreMes = "mayo";
} else if (mm == 6) {
    nombreMes = "junio";
} else if (mm == 7) {
    nombreMes = "julio";
} else if (mm == 8) {
    nombreMes = "agosto";
} else if (mm == 9) {
    nombreMes = "septiembre";
} else if (mm == 10) {
    nombreMes = "octubre";
} else if (mm == 11) {
    nombreMes = "noviembre";
} else {
    nombreMes = "diciembre";
}

// Armar la fecha completa
let fechaCompleta = dia + ", " + dd + " de " + nombreMes + " de " + yyyy;
document.writeln(fechaCompleta);
/*
// Obtener nombre del día de la semana
let dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
let dia = dias[fecha.getDay()];

// Si querés hacerlo dinámico también con el nombre del mes:
let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", 
            "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
let nombreMes = meses[fecha.getMonth()];

// Armar la fecha completa
let fechaCompleta = `${dia}, ${dd} de ${nombreMes} de ${yyyy}`;

document.writeln(fechaCompleta);*/
