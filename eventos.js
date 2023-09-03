document.addEventListener("DOMContentLoaded", function () {
    const divContainer = document.querySelector(".container");
  
    // Agregar un manejador de eventos para el click en el div
    divContainer.addEventListener("click", function () {
      alert("Hola! Soy el div");
    });
  });