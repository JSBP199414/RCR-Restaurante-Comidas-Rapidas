"use strict"
/**------------------------------------Busqueda---------------------------------------*/

let boton = document.getElementById("bot"); //Guardamos id button en variable boton.
/**Funcion click boton*/
boton.addEventListener("click", function () {
let valor = document.getElementById("search").value; //Guardamos text.
  
 
/**--------------------------------------MetodoUno de busqueda----------------------------
 //Condicion if else que nos redirige a la pagina enconcreto--Preguntamos if valor es igual a la palabra
 if (valor == "menu" || valor == "MENU" || valor == "Menu") {
  location.href = "Menu.html"; 
} else if (valor == "promociones" || valor == "PROMOCIONES" || valor == "Promociones") {
  location.href = "Promociones.html";
} else if (valor == "tiendas" || valor == "TIENDAS" ||valor == "Tiendas") {
  location.href = "NuestrasTiendas.html";
} else if (valor == "registro" || valor == "REGISTRO" || valor == "Registro") {
  location.href = "RegistrarUsuario.html";
} else if (valor == "trabajo" || valor == "TRABAJO" || valor == "Trabajo") {
  location.href = "TrabajaConNosotros.html";
} else if (valor == "empresa" || valor == "EMPRESA" || valor == "Empresa") {
  location.href = "QuienesSomos.html";
} else {
  swal("Busqueda no encontrada"); //Si pagina no esta entre las opciones nos arroja un alert--Swal(Libreria SWEETALERT)-Diseño de alerta.
}*/

 
 /**-----------------------------------MetodoDos de busqueda--------------------------------- */
//A diferencia del metodoUno es que se hace busquedas con palabras claves dentro de una cadena de texto en el input(text)
//Variables de cadenas de texto



 let primeraSilaba = valor.search(/me/i); //Buscamos en valor(input-text) expresion regular --i(Sencible a MAY y MIN---Se guarda en una variable)
 let ultimaSilaba = valor.search(/nu/i);
     ultimaSilaba +=  2;  //Corremos el numero de espacios de la expresion regular buscada
 let palabra = valor.substr(primeraSilaba, ultimaSilaba); //Substr nos da la palabra buscada entre las expresiones regulares anteriormente guardadas.

 let primeraSilabaOne = valor.search(/pro/i);
 let ultimaSilabaOne = valor.search(/nes/i);
     ultimaSilabaOne +=  3;
 let palabraOne = valor.substr(primeraSilabaOne, ultimaSilabaOne);

 let primeraSilabaTwo = valor.search(/ti/i);
 let ultimaSilabaTwo = valor.search(/das/i);
     ultimaSilabaTwo +=  3;
 let palabraTwo = valor.substr(primeraSilabaTwo, ultimaSilabaTwo);

 let primeraSilabaTree = valor.search(/re/i);
 let ultimaSilabaTree = valor.search(/tro/i);
     ultimaSilabaTree +=  3;
 let palabraTree = valor.substr(primeraSilabaTree, ultimaSilabaTree);

 let primeraSilabaFour = valor.search(/tra/i);
 let ultimaSilabaFour = valor.search(/jo/i);
     ultimaSilabaFour +=  2;
 let palabraFour = valor.substr(primeraSilabaFour, ultimaSilabaFour);

 let primeraSilabaFive = valor.search(/em/i);
 let ultimaSilabaFive = valor.search(/sa/i);
     ultimaSilabaFive +=  2;
 let palabraFive = valor.substr(primeraSilabaFive, ultimaSilabaFive);

  //Condicion if else que nos redirige a la pagina enconcreto
  if (palabra == "menu" || palabra == "MENU" || palabra == "Menu") {
    location.href = "http://localhost:3000#imagenes"; 
  } else if (palabraOne == "promociones" || palabraOne == "PROMOCIONES" || palabraOne == "Promociones") {
    location.href = "http://localhost:3000/promociones";
  } else if (palabraTwo == "tiendas" || palabraTwo == "TIENDAS" || palabraTwo == "Tiendas") {
    location.href = "http://localhost:3000/tiendas";
  } else if (palabraTree == "registro" || palabraTree == "REGISTRO" || palabraTree == "Registro") {
    location.href = "http://localhost:3000/registrarse";
  } else if (palabraFour == "trabajo" || palabraFour == "TRABAJO" || palabraFour == "Trabajo") {
    location.href = "http://localhost:3000/trabajaConNosotros";
  } else if (palabraFive == "empresa" || palabraFive == "EMPRESA" || palabraFive == "Empresa") {
    location.href = "http://localhost:3000/empresa";
  } else {
    swal("Busqueda no encontrada"); //Si pagina no esta entre las opciones nos arroja un alert--Swal(Libreria SWEETALERT)-Diseño de alerta.
  }
  
})