// Script para verificar el modo de funcionamiento del navegador
// Comprueba si ya se ha mostrado la alerta anteriormente
        if (!localStorage.getItem('alertaMostrada')) {
            
            // Si no se ha mostrado, lanza el alert con el modo de renderizado
            alert("La página se está ejecutando en modo: " + document.compatMode);
            
            // Guarda una marca en el navegador para recordar que ya se mostró
            localStorage.setItem('alertaMostrada', 'true')};

// Espera a que todo el HTML de la página esté cargado en el navegador
document.addEventListener('DOMContentLoaded', () => {
    
    // Captura la hora actual y la pinta en el contenedor con la clase .time
    const contenedorTiempo = document.querySelector('.time');
    
    if (contenedorTiempo) {
        const horaActual = new Date().toLocaleTimeString('es-ES', { hour12: false });
        contenedorTiempo.textContent = horaActual;
    }

    // Temporizador para refrescar la página automáticamente cada 10 segundos
    setTimeout(() => {
        location.reload();
    }, 10000); // 10000 milisegundos = 10 segundos
});
