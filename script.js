window.addEventListener('scroll', function() {
    let elementos = document.querySelectorAll('.card, .proyecto-card');
    for (let i = 0; i < elementos.length; i++) {
        let alturaPantalla = window.innerHeight / 1.2;
        let distanciaElemento = elementos[i].getBoundingClientRect().top;
        
        if (distanciaElemento < alturaPantalla) {
            elementos[i].style.opacity = "1";
            elementos[i].style.transform = "translateY(0)";
        }
    }
});// Seleccionamos todos los checkboxes y el texto del total
const checkboxes = document.querySelectorAll('.servicio');
const displayTotal = document.getElementById('precio-total');

// Función que recorre los checkboxes y suma si están marcados
function calcular() {
    let total = 0;
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            total += parseInt(checkbox.value);
        }
    });
    displayTotal.innerText = `$${total}`;
}

// Le decimos a cada checkbox que ejecute la función al hacer clic
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', calcular);
});