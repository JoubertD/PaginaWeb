
let datos = undefined;
// Loading a CSV using D3
d3.dsv( ";", "../data/pets-citizens.csv" )
  .then( function( data ) {
    datos = data;
  } )
  .catch( function( error ) {
    // handle error   
  } );


var buscar = document.getElementById( "mDatos" );


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

    
      var form = document.getElementById("actualizar");

      form.addEventListener( "click", function() {
     
      var nnn = document.getElementById("da").value;
      if (searchMicrochip(nnn) != undefined) {
        var removeTab = document.getElementById("1");
        if(removeTab != null ){
          removeTab.parentNode.removeChild(removeTab);
        }
        var myParent = document.body;

        var label_owner = document.createElement("p"); 
        label_owner.setAttribute("type", "text"); 
        label_owner.setAttribute("id", "Lowner");
        var text1 = document.createTextNode("Dueño de la mascota:");
        label_owner.append(text1);

        var address = document.createElement("input"); 
        address.setAttribute("type", "text"); 
        address.setAttribute("id", "address");

        var label_address = document.createElement("p"); 
        label_address.setAttribute("type", "text"); 
        label_address.setAttribute("id", "Laddress");
        var text2 = document.createTextNode("Dirección:");
        label_address.append(text2);

        var image = document.createElement("input"); 
        image.setAttribute("type", "text"); 
        image.setAttribute("id", "image");

        var label_image = document.createElement("p"); 
        label_image.setAttribute("type", "text"); 
        label_image.setAttribute("id", "Limage");
        var text3 = document.createTextNode("Link de imagen de mascota:");
        label_image.append(text3);


        var owner = document.createElement("input"); 
        owner.setAttribute("type", "text"); 
        owner.setAttribute("id", "owner");

        var race = document.createElement("select"); 
        race.setAttribute("type", "text"); 
        race.setAttribute("id", "race");

        var label_race = document.createElement("p"); 
        label_race.setAttribute("type", "text"); 
        label_race.setAttribute("id", "Lrace");
        var text4 = document.createTextNode("Raza de la mascota:");
        label_race.append(text4);

        var race = document.createElement("select"); 
        race.setAttribute("type", "text"); 
        race.setAttribute("id", "race");



       


        var Cdiminuto = ["Crestado chino", "Pekinés", 
        "Affenpinscher" , "Yorkie poo", "Maltipoo" ,
        "Pinscher miniatura", "Pomsky", "Teddy roosevelt terrier" ];

        var Cpequeño = ["Chihuahua" , "Bichón Frisé", "Bichón Maltés"
        , "Yorkshire Terrier" , "Shih Tzu", "Caniche" , "Pomerania"
        , "Australian Silky Terrie" ]

        var Cmediano = [ "Bóxer", "Husky Siberiano" , "Pitbull"
        , "Bulldog inglés" , "Chow Chow" , "Samoyedo"
        , "Border Collie", "Dálmata"];

        var Cgrande = [ "Dogo Alemán o Gran Danés" , "Dogo de Burdeos" , 
        "Dogo argentino" , "San Bernardo" , "Mastín del Pirineo" , "Mastín Español"
        ,"Pastor Yugoslavo"]

        var CMgrande = ["Tosa japonés" , "Leonberger", "Kuvasz"
        , "Mastín español" , "Terranova" , "Tosa japonés",
        "Bullmastiff" , "San Bernardo"]

        var Fdiminuto = ["Singapur" , "Korat" , 
        "Munchkin" , "Skookum" , "Devon rex"]

        var Fpequeño = [ "gato rusty manchado" , "Munchkin" , "gato balinés"
        ,"El mau egipcio" , "Gatito minskin"]

        var Fmediano = [ "Gato pixie bob" , "Gato tonkinés" , "Gato LaPerm"
        , "Gato curl americano" , "Gato burmés"]

        var Fgrande = ["El Maine coon" , "El gato savannah El gato cheetoh"
        , "Gato ragdoll" , "Gato chausie" , 
        "Gato bosque de Noruega naranja" , "Gato bosque de Siberia"
        ,"El gato bosque de Siberia"]

        var FMgrande = ["Ligre" , "Tigre siberiano" , "Tigre de Bengala"
        ,"León" , "Jaguar" , "Puma" , "Lince euroasiático"]

        var specie = searchMicrochip(nnn).specie;

        var size = searchMicrochip(nnn).size;
            if(specie === "CANINO"){
              if( size === "MINIATURA"){
                for (var i = 0; i < Cdiminuto.length; i++) {
                  var option = document.createElement("option");
                  option.value = Cdiminuto[i];
                  option.text = Cdiminuto[i];
                  race.appendChild(option);
                }

              }else if (size === "PEQUE�O"){
                for (var i = 0; i < Cpequeño.length; i++) {
                  var option = document.createElement("option");
                  option.value = Cpequeño[i];
                  option.text = Cpequeño[i];
                  race.appendChild(option);
                }

              }else if (size === "MEDIANO"){

                for (var i = 0; i < Cmediano.length; i++) {
                  var option = document.createElement("option");
                  option.value = Cmediano[i];
                  option.text = Cmediano[i];
                  race.appendChild(option);
                }
                
              }else if (size === "GRANDE"){

                for (var i = 0; i < Cgrande.length; i++) {
                  var option = document.createElement("option");
                  option.value = Cgrande[i];
                  option.text = Cgrande[i];
                  race.appendChild(option);
                }
                
              }else if (size === "MUY GRANDE"){
                for (var i = 0; i < CMgrande.length; i++) {
                  var option = document.createElement("option");
                  option.value = CMgrande[i];
                  option.text = CMgrande[i];
                  race.appendChild(option);
                }
                
              }
            }else{
              if( size === "MINIATURA"){
                for (var i = 0; i < Fdiminuto.length; i++) {
                  var option = document.createElement("option");
                  option.value = Fdiminuto[i];
                  option.text = Fdiminuto[i];
                  race.appendChild(option);
                }

              }else if (size === "PEQUE�O"){
                for (var i = 0; i < Fpequeño.length; i++) {
                  var option = document.createElement("option");
                  option.value = Fpequeño[i];
                  option.text = Fpequeño[i];
                  race.appendChild(option);
                }

              }else if (size === "MEDIANO"){

                for (var i = 0; i < Fmediano.length; i++) {
                  var option = document.createElement("option");
                  option.value = Fmediano[i];
                  option.text = Fmediano[i];
                  race.appendChild(option);
                }
                
              }else if (size === "GRANDE"){

                for (var i = 0; i < Fgrande.length; i++) {
                  var option = document.createElement("option");
                  option.value = Fgrande[i];
                  option.text = Fgrande[i];
                  race.appendChild(option);
                }
                
              }else if (size === "MUY GRANDE"){
                for (var i = 0; i < FMgrande.length; i++) {
                  var option = document.createElement("option");
                  option.value = FMgrande[i];
                  option.text = FMgrande[i];
                  race.appendChild(option);
                }
                
              }
            }

        myParent.appendChild(label_owner);
        myParent.appendChild(owner);
        myParent.appendChild(label_address);
        myParent.appendChild(address);
        myParent.appendChild(label_race);
        myParent.appendChild(race);
        myParent.appendChild(label_image);
        myParent.appendChild(image);
        var h = document.getElementById("race")

      }else{
        alert("no se encontró una mascota con ese microchip");
      }


    
    });


    function searchMicrochip(value){

    var result;

    for (var i = 0; i < datos.length; i++) {
      if(datos[i].microchip === value){
        result = datos[i];
      }
    }
    return result;
    }