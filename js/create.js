	 var create = document.getElementById("crear");

      create.addEventListener( "click", function() {

      var comprobante = document.getElementById("formulario");
      var tabla = document.getElementById("1");

      if(comprobante != undefined){
        comprobante.parentNode.removeChild(comprobante);
      }
       if(tabla != undefined){
        tabla.parentNode.removeChild(tabla);
      }
     
     

     
        
        var removeTab = document.getElementById("1");
        if(removeTab != null ){
          removeTab.parentNode.removeChild(removeTab);
        }
        var myParent = document.body;

        var form = document.createElement("form");
        form.setAttribute("id", "formulario2");
        form.setAttribute("onsubmit" , "return false");

        var label_micro = document.createElement("p"); 
        label_micro.setAttribute("type", "text"); 
        label_micro.setAttribute("id", "Lmicro");
        var text1 = document.createTextNode("Microchip:");
        label_micro.append(text1);

        var micro = document.createElement("input"); 
        micro.setAttribute("type", "number"); 
        micro.setAttribute("id", "micro");
        micro.required = true;

        var label_specie = document.createElement("p"); 
        label_specie.setAttribute("type", "text"); 
        label_specie.setAttribute("id", "Lspecie");
        var text2 = document.createTextNode("Especie:");
        label_specie.append(text2);

        var specie = document.createElement("select"); 
        specie.setAttribute("type", "text"); 
        specie.setAttribute("id", "specie");
        var o1 = document.createElement("option");
        o1.value = "CANINO";
        o1.text = "CANINO";
        var o2 = document.createElement("option");
        o2.value = "FELINO";
        o2.text = "FELINO";

        specie.appendChild(o1);
        specie.appendChild(o2);


        var label_sex = document.createElement("p"); 
        label_sex.setAttribute("type", "text"); 
        label_sex.setAttribute("id", "Lsex");
        var text3 = document.createTextNode("Sexo:");
        label_sex.append(text3);


        var sex = document.createElement("select"); 
        sex.setAttribute("type", "text"); 
        sex.setAttribute("id", "sex");

        var o1 = document.createElement("option");
        o1.value = "MACHO";
        o1.text = "MACHO";
        var o2 = document.createElement("option");
        o2.value = "HEMBRA";
        o2.text = "HEMBRA";

        sex.appendChild(o1);
        sex.appendChild(o2);

        var label_size = document.createElement("p"); 
        label_size.setAttribute("type", "text"); 
        label_size.setAttribute("id", "Lsize");
        var text3 = document.createTextNode("Tamaño:");
        label_size.append(text3);

        var size = document.createElement("select"); 
        size.setAttribute("type", "text"); 
        size.setAttribute("id", "size");

        var o1 = document.createElement("option");
        o1.value = "MINIATURA";
        o1.text = "MINIATURA";
        var o2 = document.createElement("option");
        o2.value = "PEQUE�O";
        o2.text = "PEQUE�O";
        var o3 = document.createElement("option");
        o3.value = "MEDIANO";
        o3.text = "MEDIANO";
        var o4 = document.createElement("option");
        o4.value = "GRANDE";
        o4.text = "GRANDE";
        var o5 = document.createElement("option");
        o5.value = "MUY GRANDE";
        o5.text = "MUY GRANDE";

        size.appendChild(o1);
        size.appendChild(o2);
        size.appendChild(o3);
        size.appendChild(o4);
        size.appendChild(o5);
        


        var label_dan = document.createElement("p"); 
        label_dan.setAttribute("type", "text"); 
        label_dan.setAttribute("id", "Ldan");
        var text4 = document.createTextNode("¿Posiblemente Peligroso?:");
        label_dan.append(text4);

        var dan = document.createElement("select"); 
        dan.setAttribute("type", "text"); 
        dan.setAttribute("id", "dan");

        var o1 = document.createElement("option");
        o1.value = "SI";
        o1.text = "SI";
        var o2 = document.createElement("option");
        o2.value = "NO";
        o2.text = "NO";

        dan.appendChild(o1);
        dan.appendChild(o2);

        var label_local = document.createElement("p"); 
        label_local.setAttribute("type", "text"); 
        label_local.setAttribute("id", "lneighborhood");
        var text1 = document.createTextNode("Ubicacion:");
        label_local.append(text1);

        var local = document.createElement("input"); 
        local.setAttribute("type", "text"); 
        local.setAttribute("id", "neighborhood");
        local.required = true;



        var submit = document.createElement("button")
        submit.setAttribute("id", "crearN");
        submit.setAttribute("type", "button"); 
        submit.setAttribute("class", "btn btn-outline-secondary")
        var text6 = document.createTextNode("Crear");
        submit.append(text6);

       


        form.appendChild(label_micro);
        form.appendChild(micro);
        form.appendChild(label_specie);
        form.appendChild(specie);
        form.appendChild(label_sex);
        form.appendChild(sex);
        form.appendChild(label_size);
        form.appendChild(size);
        form.appendChild(label_dan);
        form.appendChild(dan);
        form.appendChild(label_local);
        form.appendChild(local);
        form.appendChild(submit);
        myParent.appendChild(form);
        var s = document.getElementById("sex");
        var sel1 = s.options[0].text;

      s.addEventListener("click", function(){
          sel1 = s.options[s.selectedIndex].text;
      });

      var si = document.getElementById("size");
        var sel2 = si.options[0].text;

      si.addEventListener("click", function(){
          sel2 = si.options[si.selectedIndex].text;
      });

      var da = document.getElementById("dan");
      var sel3 = da.options[0].text;

      da.addEventListener("click", function(){
          sel3 = da.options[da.selectedIndex].text;
          console.log(sel3);
      });

      var spec = document.getElementById("specie");
        var sel4 = spec.options[0].text;

      spec.addEventListener("click", function(){
          sel4 = spec.options[spec.selectedIndex].text;
      });

      submit.addEventListener("click", function(){

        var m = micro.value;
        var lo = local.value;
       
        if(m != "" && lo != ""){
        lo = lo.toUpperCase();

          var nuevo = {
          	"microchip" : m,
          	"species" : sel4,
          	"sex" : sel1,
          	"size" : sel2,
          	"potentDangerous" : sel3,
          	"neighborhood" : lo
          }

          datos.push(nuevo);



           

          alert("la mascota fue creada correctamente"); 

          var creee = document.getElementById("formulario2");

          if(creee != undefined){
          creee.parentNode.removeChild(creee);
         }




        }

      });
    });


    