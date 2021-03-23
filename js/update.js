







    
      var form = document.getElementById("actualizar");

      form.addEventListener( "click", function() {

      var comprobante = document.getElementById("formulario");

      if(comprobante != undefined){
        comprobante.parentNode.removeChild(comprobante);
      }
     
      var nnn = document.getElementById("da").value;

      if (searchMicrochip(nnn) != undefined) {
        var pos = getPosition(nnn);
        var removeTab = document.getElementById("1");
        if(removeTab != null ){
          removeTab.parentNode.removeChild(removeTab);
        }
        var myParent = document.body;

        var form = document.createElement("form");
        form.setAttribute("id", "formulario");
        form.setAttribute("onsubmit" , "return false");

        var label_owner = document.createElement("p"); 
        label_owner.setAttribute("type", "text"); 
        label_owner.setAttribute("id", "Lowner");
        var text1 = document.createTextNode("Dueño de la mascota:");
        label_owner.append(text1);

        var address = document.createElement("input"); 
        address.setAttribute("type", "text"); 
        address.setAttribute("id", "address");
        address.required = true;

        var label_address = document.createElement("p"); 
        label_address.setAttribute("type", "text"); 
        label_address.setAttribute("id", "Laddress");
        var text2 = document.createTextNode("Dirección:");
        label_address.append(text2);

        var image = document.createElement("input"); 
        image.setAttribute("type", "text"); 
        image.setAttribute("id", "image");
        image.required = true;

        var label_image = document.createElement("p"); 
        label_image.setAttribute("type", "text"); 
        label_image.setAttribute("id", "Limage");
        var text3 = document.createTextNode("Link de imagen de mascota:");
        label_image.append(text3);


        var owner = document.createElement("input"); 
        owner.setAttribute("type", "text"); 
        owner.setAttribute("id", "owner");
        owner.required = true;

        var race = document.createElement("select"); 
        race.setAttribute("type", "text"); 
        race.setAttribute("id", "race");

        var label_race = document.createElement("p"); 
        label_race.setAttribute("type", "text"); 
        label_race.setAttribute("id", "Lrace");
        var text4 = document.createTextNode("Raza de la mascota:");
        label_race.append(text4);

        var submit = document.createElement("button")
        submit.setAttribute("id", "enviar");
        submit.setAttribute("type", "button"); 
        submit.setAttribute("class", "btn btn-outline-secondary")
        var text6 = document.createTextNode("Actualizar");
        submit.append(text6);

       


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
        form.appendChild(label_image);
        form.appendChild(image);
        form.append(label_owner);
        form.append(owner);
        form.appendChild(label_address);
        form.appendChild(address);
        form.appendChild(label_race);
        form.appendChild(race);
        form.appendChild(submit);
        myParent.appendChild(form);
        var h = document.getElementById("race")
        var raz = h.options[0].text;

      h.addEventListener("click", function(){
          raz = h.options[h.selectedIndex].text;
      });

      submit.addEventListener("click", function(){

        var im = image.value;
        var du = owner.value;
        var ad = address.value;
       
        if(im != "" && du != "" && ad != ""){

          datos[pos]["race"] = raz;  
          datos[pos]["image"] = im;  
          datos[pos]["owner"] = du;  
          datos[pos]["address"] = ad; 

          alert("la mascota fue actualizada correctamente"); 

          var comprobante = document.getElementById("formulario");

          if(comprobante != undefined){
          comprobante.parentNode.removeChild(comprobante);
         }




        }

      });

    


      }else{
        alert("no se encontró una mascota con ese microchip");
      }


    
    });


    function searchMicrochip(value){

    var result;
    var posicion;

    for (var i = 0; i < datos.length; i++) {
      if(datos[i].microchip === value){
        result = datos[i];
        posicion = i;
      }
    }
    return result;
    }

    function getPosition(value){

    var result;
    var posicion;

    for (var i = 0; i < datos.length; i++) {
      if(datos[i].microchip === value){
        posicion = i;
      }
    }
    return posicion;
    }