//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

});
fetch('https://japdevdep.github.io/ecommerce-api/product/all.json')
  .then(response => response.json())
  .then(data => console.log(data));