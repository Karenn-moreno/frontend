function alternarModo() {
    const body = document.body;
    const boton = document.getElementById("btnModo");

    body.classList.toggle("oscuro");

    if (body.classList.contains("oscuro")) {
        boton.textContent = "Modo claro";
    } else {
        boton.textContent = "Modo oscuro";
    }
}
