function saludar() {
    // Esto pide el nombre al usuario
    let nombre = prompt("¿Cómo te llamas?");
    
    // Esto cambia el texto de la página dinámicamente
    if (nombre != "") {
        document.getElementById("saludo-personal").innerText = "¡Bienvenido al código, " + nombre + "!";
    }
}