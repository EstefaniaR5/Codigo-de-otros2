//se modifica el contenido de querySelector 
var formulario = document.querySelector(".formulario")
//se modifica la funcion a un evento que escuche el submit 
formulario.addEventListener("submit",function(e) {
  e.preventDefault();
  //se agrega ; después de elements
  var n = formulario.elements[0];
  var e = formulario.elements[1];
  var na = formulario.elements[2];

  //se agrega ; despues de value
  var nombre = n.value;
  var edad = e.value;

  //se agrega ;
  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);
  //se agrega ;
  if (nombre.length === 0) {
    n.classList.add("error"); //se agrega ;
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error"); //se agrega ;
  }
// se reacomoda la identacion
if (nombre.length > 0 && (edad > 18 && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad); //se agrega ;
  }
}); // cierre de las validaciones para formulario

// se aregan más ;
var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {
  // se aregan más ;
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

var lista = document.getElementById("lista-de-invitados"); // se aregan más ;
var elementoLista = document.createElement("div"); // se aregan más ;
elementoLista.id = "elemento-lista";
elementoLista.classList.add("elemento-lista"); // se aregan más ;
lista.appendChild(elementoLista); // se aregan más ;

//se comentan estas lienas porque aparecen etiquetas extras no necesarias

/*var spanNombre = document.createElement("span"); // se aregan más ;
var inputNombre = document.createElement("input"); // se aregan más ;
var espacio = document.createElement("br"); // se aregan más ;*/
//spanNombre.textContent = "Nombre: "; // se aregan más ;
//inputNombre.value = nombre; // se aregan más ;
/*elementoLista.appendChild(spanNombre); // se aregan más ;
elementoLista.appendChild(inputNombre); // se aregan más ;
elementoLista.appendChild(espacio); // se aregan más ;*/

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span"); // se aregan más ;
var inputNombre = document.createElement("input"); // se aregan más ;
var espacio = document.createElement("br"); // se aregan más ;
spanNombre.textContent = descripcion + ": "; // se aregan más ;
inputNombre.value = valor; // se aregan más ;
elementoLista.appendChild(spanNombre); // se aregan más ;
elementoLista.appendChild(inputNombre); // se aregan más ;
elementoLista.appendChild(espacio); // se aregan más ;
}

crearElemento("Nombre", nombre); // se aregan más ;
crearElemento("Edad", edad); // se aregan más ;
crearElemento("Nacionalidad", nacionalidad); // se aregan más ;


var botonBorrar = document.createElement("button"); // se aregan más ;
botonBorrar.textContent = "Eliminar invitado"; // se aregan más ;
botonBorrar.id = "boton-borrar"; // se aregan más ;
var corteLinea = document.createElement("br"); // se aregan más ;
elementoLista.appendChild(corteLinea); // se aregan más ;
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
  botonBorrar.parentNode.remove(); // se aregan más ;
  }
}