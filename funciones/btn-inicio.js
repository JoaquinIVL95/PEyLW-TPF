document.addEventListener("DOMContentLoaded", function () {
    var btnInicio = document.getElementById("btnInicio");

  // Añadir un listener para el evento click
  btnInicio.addEventListener("click", function () {
    // Utilizar smooth scrolling para un desplazamiento suave
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // Mostrar u ocultar el botón según la posición de desplazamiento
  window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
      btnInicio.style.display = "block";
    } else {
      btnInicio.style.display = "none";
    }
  });
});