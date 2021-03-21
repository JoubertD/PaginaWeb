
let datos = undefined;
// Loading a CSV using D3
d3.dsv( ";", "../data/pets-citizens.csv" )
  .then( function( data ) {
    datos = data;
     for (var i = 0; i < datos.length; i++) {
    datos[i].size.replace("�" , "Ñ");
    }

  } )
  .catch( function( error ) {
    // handle error   
  } );


let buscar = document.getElementById( "mDatos" );


buscar.addEventListener( "click", function() {
  var removeTab = document.getElementById("1");
  if(removeTab != null ){
    removeTab.parentNode.removeChild(removeTab);
  }
  wholeTable();

});


function wholeTable(){
    var body = document.getElementsByTagName("body")[0];

    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");
 
    for (var i = 0; i <= 1000; i++) {
    
    var hilera = document.createElement("tr");

    if(i == 0){
      console.log("llegue aca")
      for (var j = 0; j < 7; j++) {
      var celda = document.createElement("td");
      if(j === 0){
        var textoCelda = document.createTextNode("#");
      }else if(j === 1){
        var textoCelda = document.createTextNode("Microchip");
      }else if(j === 2){
        var textoCelda = document.createTextNode("Especie");
      }else if(j === 3){
        var textoCelda = document.createTextNode("Sexo");
      }else if(j === 4){
        var textoCelda = document.createTextNode("Tamaño");
      }else if(j === 5){
        var textoCelda = document.createTextNode("Peligrosidad");
      }else if(j === 6){
        var textoCelda = document.createTextNode("Localidad");
      }
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
      }
      tblBody.appendChild(hilera);
    }else{
       for (var j = 0; j < 7; j++) {
      var celda = document.createElement("td");
      if(j === 0){
        var textoCelda = document.createTextNode(i);
      }else if(j === 1){
        var textoCelda = document.createTextNode(datos[i].microchip);
      }else if(j === 2){
        var textoCelda = document.createTextNode(datos[i].species);
      }else if(j === 3){
        var textoCelda = document.createTextNode(datos[i].sex);
      }else if(j === 4){
        if (datos[i].size === "PEQUE�O") {
          var textoCelda = document.createTextNode("PEQUEÑO");
        }else{
        var textoCelda = document.createTextNode(datos[i].size);
      }
      }else if(j === 5){
        var textoCelda = document.createTextNode(datos[i].potentDangerous);
      }else if(j === 6){
        var textoCelda = document.createTextNode(datos[i].neighborhood);
      }
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
    }
     tblBody.appendChild(hilera);
    }
    tabla.appendChild(tblBody);
    tabla.id = "1";

    body.appendChild(tabla);
    }
    console.log(tabla.id);
    }