
//validar formulario

const miForm= document.getElementById("miFormulario");
miForm.addEventListener("submit",function(event){//SUBMIT ENVIAMOS EL FORMULARIO
    event.preventDefault(); //evita el envio del formulario por defecto
    const nombre=document.getElementById("nombre").value.trim();//trim saco los espacios de blaco adelante y atras de la cadena ingresada
    const mail=document.getElementById("email").value.trim();
    if (nombre ===""){
        alert("ingrese un nombre");
        return;
    }
    if (!mail.includes("@")|| mail === ""){
        alert("ingrese un email");
        return;
    }
    alert("formulario enviado correctamente");
//aca se podria agregar los datos del servidor con fetch o ajax
})

/*
//validar formulario

const miForm = document.getElementById("miFormulario");

miForm.addEventListener("submit", function(event) {
    event.preventDefault(); // evita el envío del formulario por defecto

    const nombre = document.getElementById("nombre").value.trim(); // trim quita espacios en blanco
    const mail = document.getElementById("email").value.trim();

    if (nombre === "") {
        alert("Ingrese un nombre");
        return;
    }

    if (!mail.includes("@") || mail === "") {
        alert("Ingrese un email válido");
        return;
    }

    alert("Formulario enviado correctamente.");
    // Aquí se podrían enviar los datos al servidor con fetch o AJAX
});
*/