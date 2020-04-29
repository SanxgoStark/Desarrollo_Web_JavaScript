
 /**
  * 15. Uso de local storage
  * 
  * El local storage es un lugar donde se puede guardar informacion
  * , con el local estorage podemos guardar mayor cantidad de informacion
  * y es facil grabar y leer
  * 
  * El local storage solo almacena strings
  */

 /**
  * Como usamos el local storage?
  * Supongamos que esta informacion nosotros la queramos
  * almacenar para que cuando el usuario vuelva ya tenga todo
  * esto cargado previamente o nosotros lo podamos utilizar.
  * 
  * Tambien es muy usado cuando queremos mantener la sesion del
  * usuario conectado
  */

  //guardar_localstorage(); [1]

  obtener_localstorage(); 

  // Como obtener la informacion del local storage
  function obtener_localstorage(){

    if(localStorage.getItem("nombre")){

        // se que exiate el nombre en el local storage
        // para obtener atributo
        let nombre = localStorage.getItem("nombre");
    
        // para obtener string
        //let nombre = localStorage.getItem("persona");

        // para obtener objeto
        let nombre = JSON.parse(localStorage.getItem("persona"));    

        console.log(nombre);
        // Con esto se esta obteniendo un string que tiene la fora de un objeto JSON
        console.log(persona);

    }else{
        console.log("No hay entradas en el local storage")
    }
    
    
  } 

  function guardar_localstorage(){ // [1]

   let persona = {
      nombre: "Santiago",
      edad: 24,
      correo: "xyz@xyz.com",
      coords:{
         lat: 10,
         lng: -10
      }
   };

   let nombre = "Juan";

   // Para grabar en el local storage
   // Aquidentro las variables que se desean guardar
   localStorage.setItem("nombre",nombre);

   // Para grabar objetos grandes en el local storage, guarda los atributos por medio del json
   localStorage.setItem("nombre",JSON.stringify(persona));

  }