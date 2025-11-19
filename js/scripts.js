// === TEMPORIZADOR DE PROMOCIÓN (30 SEG) ===

// "let" se usa para variables que SÍ van a cambiar su valor
let tiempoRestante = 30; 

// "const" se usa para constantes o elementos que NO van a cambiar de referencia
const spanSegundos = document.getElementById("promoSegundos");

// Función que se ejecuta cada segundo
function actualizarTemporizador() {
    // Restamos 1 segundo
    tiempoRestante--;

    // Actualizamos el texto en el <span>
    if (spanSegundos) {
        spanSegundos.textContent = tiempoRestante;
    }


    // Cuando llega a 0, cambiamos el mensaje y reiniciamos
    if (tiempoRestante <= 0) {
        if (spanSegundos) {
            // Mensaje de que se terminó
            spanSegundos.textContent = "¡TERMINÓ!";
        }
        
        // NOTA: Cambié el alert() por un console.log() para evitar errores en el entorno de Canvas.
        console.log("La promoción ha terminado... pero viene una nueva ronda");

        // Reiniciamos el contador a 30 
        tiempoRestante = 30;
        // Si quieres que se detenga: clearInterval(intervalo);
    }
}

// "setInterval" ejecuta una función cada cierto tiempo
// Primer parámetro: la función a ejecutar
// Segundo parámetro: cada cuántos milisegundos (1000 ms = 1 segundo)
const intervalo = setInterval(actualizarTemporizador, 1000);

// === BANNER PROMOCIONAL CON BOTÓN CERRAR ===

// "const" para guardar referencias a elementos del DOM que no cambian
const bannerPromo = document.getElementById("bannerPromo");
const cerrarBanner = document.getElementById("cerrarBanner");

// "addEventListener" escucha un evento (en este caso, un clic en el botón)
if (cerrarBanner && bannerPromo) {
    cerrarBanner.addEventListener("click", function() {
        // Con ".style.display = 'none'" escondemos el banner completo
        bannerPromo.style.display = "none";
    });
}   