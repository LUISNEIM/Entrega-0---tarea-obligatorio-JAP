$(document).ready(function(){    
   $('#boton-guardar').click(function(){        
       /*Captura de datos escrito en los inputs*/        
       var nom = document.getElementById("nombretxt").value;
       var apel = document.getElementById("apellidotxt").value;
       /*Guardando los datos en el LocalStorage*/
       localStorage.setItem("Nombre", nom);
       localStorage.setItem("Apellido", apel);
       /*Limpiando los campos o inputs*/
       document.getElementById("nombretxt").value = "";
       document.getElementById("apellidotxt").value = "";
   });   
});

/*Funcion Cargar y Mostrar datos*/
$(document).ready(function(){    
   $('#boton-cargar').click(function(){                       
       /*Obtener datos almacenados*/
       var nombre = localStorage.getItem("Nombre");
       var apellido = localStorage.getItem("Apellido");
       /*Mostrar datos almacenados*/      
       document.getElementById("nombre").innerHTML = nombre;
       document.getElementById("apellido").innerHTML = apellido; 
   });   
});
function getUserInformation() {
   const userInformation = JSON.parse(localStorage.getItem("userInformation"));
   if (!userInformation) {
     localStorage.setItem(
       "userInformation",
       JSON.stringify({
         name: "Jhon",
         lastname: "Doe",
         adress: "No Doe Address",
       })
     );
   }
 
   const h1Element = document.querySelector(".user-name");
 
   h1Element.textContent = `Hola ${userInformation.name}`;
 }
 
 window.addEventListener("load", getUserInformation);
 