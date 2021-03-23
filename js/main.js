var pagina = 0;

/*
 * Manipulation of arrays using functions
 */

let atributo = "ninguno";
let atributo2 = "ninguno";
let atributo3 = "ninguno";

// Getting an element by Id
let lista = document.getElementById( "lista1" );

lista.addEventListener("click", function() {
    
  if (lista.selectedIndex === 0) {
  atributo = "ninguno";
  atributo2 = "ninguno";
  atributo3 = "ninguno";
  document.getElementById("lista2").disabled = true;
  document.getElementById("lista3").disabled = true;
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

let lista2 = document.getElementById( "lista2" );

    lista2.addEventListener("click", function() {

  if (lista2.selectedIndex === 0) {
    atributo2 = "CANINO";
  }else{
    atributo2 = "FELINO";
  }
} ); 

  let lista3 = document.getElementById( "lista3" );

  lista2.addEventListener("click", function() {
  if (lista2.selectedIndex === 0) {
    atributo3 = "NO";
  }else{
    atributo3 = "SI";
  }
} ); 





let buscar = document.getElementById( "itembuscado" );


buscar.addEventListener( "click", function() {
  var removeTab = document.getElementById("1");
    if(removeTab != null ){
    removeTab.parentNode.removeChild(removeTab);
  }
  if(lista.selectedIndex === 0){
  wholeTable();
  }else if(lista.selectedIndex === 1){
    searchByVariousAttributtes(atributo2,atributo3);
  }else if(lista.selectedIndex === 2){
    var local = prompt("Escriba la localidad");
    searchByNeighbourhood(local);
  }
});



 function searchByNeighbourhood(valor){
  const anim = new Array();
  
    for (var i = 0; i < datos.length; i++) {
      if(datos[i].neighborhood === valor){
        anim.push(datos[i]);
      }
    }
    if (anim.length === 0) {
      alert("No se encontró ningun animal de esa localidad");
    }else{
      tableByAttributte(anim);
    }
 }


 function searchByVariousAttributtes(valor1, valor2){

   const anim = new Array();
  
    for (var i = 0; i < datos.length; i++) {
      if(datos[i].species === valor1 && datos[i].potentDangerous === valor2){
        anim.push(datos[i]);
      }
    }

    if (anim == undefined) {
      alert("No se encontró ningun animal con esos parámetros");
    }else{
      tableByAttributte(anim);
    }

  }




    function wholeTable(){
    var removeTab = document.getElementById("1");
    if(removeTab != null ){
    removeTab.parentNode.removeChild(removeTab);
    }
    var rBotonAd = document.getElementById("batras");
    var rBotonAt = document.getElementById("badelante");

    if(rBotonAd != null ){
    rBotonAd.parentNode.removeChild(rBotonAd);
    }
    if(rBotonAt != null ){
    rBotonAt.parentNode.removeChild(rBotonAt);
    }
    var body = document.getElementsByTagName("body")[0];
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");
 
    for (var i = 0; i <= 20 ; i++) {
    
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
      var tomar = i + (pagina*10);
       for (var j = 0; j < 7; j++) {
      var celda = document.createElement("td");
      if(j === 0){
        var textoCelda = document.createTextNode(tomar);
      }else if(j === 1){
        var textoCelda = document.createTextNode(datos[tomar].microchip);
      }else if(j === 2){
        var textoCelda = document.createTextNode(datos[tomar].species);
      }else if(j === 3){
        var textoCelda = document.createTextNode(datos[tomar].sex);
      }else if(j === 4){
        if (datos[i].size === "PEQUE�O") {
          var textoCelda = document.createTextNode("PEQUEÑO");
        }else{
        var textoCelda = document.createTextNode(datos[tomar].size);
      }
      }else if(j === 5){
        var textoCelda = document.createTextNode(datos[tomar].potentDangerous);
      }else if(j === 6){
        var textoCelda = document.createTextNode(datos[tomar].neighborhood);
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
    var botonatras = document.createElement("button");
    var botonadelante = document.createElement("button");
    botonatras.setAttribute("type","button");
    botonatras.setAttribute("id","batras");
    botonadelante.setAttribute("type","button");
    botonadelante.setAttribute("id","badelante");
    var textoadelante = document.createTextNode("Siguiente");
    var textoatras = document.createTextNode("Atras");
    botonadelante.append(textoadelante);
    botonatras.append(textoatras);
    body.appendChild(botonatras);
    body.appendChild(botonadelante);
    botonatras.addEventListener("click", function(){
      if(pagina === 0){

      }else{
        pagina = pagina -1;
        wholeTable();
      }

    });
   botonadelante.addEventListener("click", function(){
        pagina = pagina + 1;
        wholeTable();
    });
    }




    function tableByAttributte(animales){
  var body = document.getElementsByTagName("body")[0];

  var tabla   = document.createElement("table");
  var tblBody = document.createElement("tbody");

  for (var i = 0; i < animales.length; i++) {
    var hilera = document.createElement("tr");

    if(i === 0){
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
    }else{
       for (var j = 0; j < 7; j++) {
      var celda = document.createElement("td");
      if(j === 0){
        var textoCelda = document.createTextNode(i);
      }else if(j === 1){
        var textoCelda = document.createTextNode(animales[i].microchip);
      }else if(j === 2){
        var textoCelda = document.createTextNode(animales[i].species);
      }else if(j === 3){
        var textoCelda = document.createTextNode(animales[i].sex);
      }else if(j === 4){
         if (animales[i].size === "PEQUE�O") {
          var textoCelda = document.createTextNode("PEQUEÑO");
        }else{
        var textoCelda = document.createTextNode(animales[i].size);
      }
      }else if(j === 5){
        var textoCelda = document.createTextNode(animales[i].potentDangerous);
      }else if(j === 6){
        var textoCelda = document.createTextNode(animales[i].neighborhood);
      }
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
        }
    }
    tblBody.appendChild(hilera);
  }
  tabla.appendChild(tblBody);
  tabla.id = "1";
  body.appendChild(tabla);
}