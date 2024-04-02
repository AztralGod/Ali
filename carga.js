// Espera a que se cargue todo el contenido de la página de carga
window.addEventListener("load", function () {
    // Define el tiempo de espera en milisegundos (por ejemplo, 3000ms = 3 segundos)
    var tiempoDeEspera = 3000;
  
    // Espera el tiempo especificado y luego redirige a la página principal
    setTimeout(function () {
      window.location.href = "Caesar.html"; // Cambia "index.html" por la URL de tu página principal
    }, tiempoDeEspera);
  });
  