document.addEventListener("DOMContentLoaded", function () {
  const divContainer = document.querySelector(".container");
  const button = document.querySelector("button");

  
  function manejarClicEnBoton(event) {
    event.stopPropagation(); 
    alert("Has hecho clic en el botón");
  }

  
  function manejarClicEnDiv() {
    alert("Has hecho clic en el div");
  }

  
  button.addEventListener("click", manejarClicEnBoton);
  divContainer.addEventListener("click", manejarClicEnDiv);
});