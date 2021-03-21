
// In-line comments

/*
 * Multi-line comments
 */
let datos = undefined;
// Loading a CSV using D3
d3.dsv( ";", "../data/pets-citizens.csv" )
  .then( function( data ) {
    datos = data;
  } )
  .catch( function( error ) {
    // handle error   
  } );

// Printing in console
console.log( "Hello world!" );



/*
 * Variables
 */



/*
 * Manipulation of arrays using functions
 */

let atributo = "ninguno";

// Getting an element by Id
let lista = document.getElementById( "lista1" );

lista.addEventListener("click", function() {
  if (lista.selectedIndex === 0) {
  atributo = "ninguno";
  document.getElementById("lista2").disabled = true;
  document.getElementById("lista3").disabled = true;
  console.log("hola")
  }else if(lista.selectedIndex === 1){
    atributo = "especie";
    document.getElementById("lista2").disabled = false;
    document.getElementById("lista3").disabled = false;
  }else if(lista.selectedIndex === 2){
    atributo = "localidad";
    document.getElementById("lista2").disabled = true;
    document.getElementById("lista3").disabled = true;
  }
} ); 




let buscar = document.getElementById( "itembuscado" );


buscar.addEventListener( "click", function() {
 let valor = prompt("Ingrese el valor a buscar");
  buscarCampos(valor, atributo);
} );

  function buscarCampos(valor, atributo){

    for (var i =  0; i < datos.length; i++) {
      datos[i]
    }

  }


// Getting all elements by tag name
var paragraphs = document.getElementsByTagName( "p" );
console.log( paragraphs );

// Adding a class to a multiple elements in array
for ( var i = 0; i < paragraphs.length; i++ ) {
  paragraphs[ i ].className = "paragraph";
}

// Getting all elements by class name
var paragraphs = document.getElementsByClassName( "paragraph" );
console.log( paragraphs );

// Adding a click event. Other options are: change, mouseover, mouseout, ...
paragraphs[ 0 ].onclick = function() {
  console.log( this );
};

// Creating a new paragraph
function addElement() {

  // Creating a new p element
  var newParagraph = document.createElement( "p" );
  newParagraph.id = "paragraph-4";

  // And creating its content
  var newContent = document.createTextNode( "This is a new paragraph!!!" );

  // Adding the text node to the newly created p
  newParagraph.appendChild( newContent );

}