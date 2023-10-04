function design() {
  let seccion = document.getElementById("donacioness");
  seccion.scrollIntoView({ behavior: "smooth" });
}

function inicio() {
  let seccion = document.getElementById("header");
  seccion.scrollIntoView({ behavior: "smooth" })
}

function social() {
  let seccion = document.getElementById("redess");
  seccion.scrollIntoView({ behavior: "smooth" })
}


document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navbar = document.querySelector('.navbar');

  hamburger.addEventListener('click', function () {
    navbar.classList.toggle('active');
  });
});

