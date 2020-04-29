
/*En la comsola de javascript en el navegador se puede 
llamar a variables y tambien crearlas 
*/

/**
 * Javascript solo corre un proceso a la ves,
 * no es multi hilo
 */

 /**
  * 4. Comprendiendo la comsola de JavaScript
  * 
  * var a = 1;
  * var b = "Santiago";
  * // informacion de cosola
  * // tambein sirven para hacer distintas anotaciones del codigo en la consola
  * console.log(a) // Me permmite imprimir en la consola de java script en el navegor el resultado de alguna variable
  * console.warn(a) // imprime icono de alerta en cosola
  * console.error(a) // imprime error
  * console.info(a)
  * 
  * // tambien se pueden realizar operaciones
  * console.log(a+a)
  * // desde la consola del navegador se pueden cambiar los valores del objeto global, esto es excelente para hacer pruebas
  */

/**
 * 5. Tipo especial "undefined" (indefinido)
 * 
 * Si se intenta imprimir o usar una variable antes de su creacion,
 * en la cosola imprimira undefined que esta indefinido, por que la
 * declaracion de la variable se encuentra abajo de la funcion de imprecion
 * 
 * El triple (===) compara tanto valor como objeto y en este caso undefined no es null
 * 
 * undefined === null -----> false
 * 
 * undefined == null ------> true (es como decir hay un vacio ahi)
 */

 /**
  * 6. Escritura dinamica
  * 
  * existen dos tipos de datos primitivos y objetos
  * 
  * // DATOS PRIMITIVOS
  * var num = 10; // Lo que le decimos a javascript es que reserve un espacio en memoria para la variable num
  * 
  * // Existen 5 tipos de datos primitivos
  * 
  * // Escitura dinamica refiere a que las variables no estan amarradas a un solo tipo de dato nadamas
  * 
  * var num = 10;
  * var str = "text";
  * var bol = true;
  * var und = undefined;
  * var nul = null;
  * 
  * // El valor de estas variables las podemos observar al ingresar la variable en la consola del navegador
  * 
  * // hay que tener cuidado por que java script no es n lenguaje tan estricto y a una variable de tipo num (numero) le puede otorgar un valor de tipo texto
  * 
  * num = str;
  * 
  * cosolole.log(num) -----> text (en consola)
  * 
  * // OBJETOS
  * 
  * // El objeto puede ser una coleccion o cunjuno de datos primitivos o otros objetos
  * 
  * var obj = {}; // declaracion de un objeto vacio
  * 
  * // las propiedades se encuentran dentro del objeto
  * 
  * var obj = {
  *     numero: 10, 
  *     texto: "Nuevo texto"
  * }
  * 
  * // Obejetos en consol se representan con llaves
  * // el objeto global esta contruido con datos primitivos y obejetos
  *
  * // Un objeto tambien puede tener objetos hijo
  *
  * // Usar estandar de excritura en camello objHijo
  * // Un objeto puede contener muchos obejetos
  *  
  * // Cuando se cree un objeto hijo, ya no esnecesario utilizar var por que el objeto padre con el var que utiliza ya reserva espacio en memoria y el espacio puede crecer 
  * 
  * var obj = {
  *     numero: 10,
  *     texto: "Nuevo texto",
  *     
  *     objHijo: {
  *     numero2: 20,
  *     text2: "Nuevo texto 2"
  * }
  * 
  * };
  * 
  * // La impresion del objeto en 
  * 
  */

  /**
   * 7. Por valor y referencia
   * 
   * // Puedo tener varios nombres apuntando al mismo lugar
   * // Impresion de valor con etiqueta
   * 
   * // Ambas variables tienen un espacio diferente en memoria
   * var a = 10;
   * var b = a;
   * 
   * console.log("a: ", a)
   * cosole.log("b: ", b)
   * 
   * // cambio de valor para variable primitiva a
   * a = 20;
   * 
   * // Al hacer la impresion no hay ningun problema
   * console.log("a: ", a)
   * cosole.log("b: ", b)
   * 
   * // Pero ahora que pasa con los objetos
   * var c = {
   * nombre: "Juana"
   * }
   * 
   * // Haciendo referencia a un objeto con una variable
   * // Al igualar objetos se pasan por referencia
   * 
   * // Esta igualacion apunta al mismo espacio de memoria, por eso de ven afectadas las dos si una es modificada
   * var d = c;
   * 
   * console.log("c: ", c);
   * console.log("d: ", d);
   * 
   * // para modificar un valor de un caracteristica interna de un objeto
   * c.nombre = "Ulises Santiago E."
   * 
   * // El cambio de valor para la caracteristica "nombre" se modifica en los objetos igualados 
   * console.log("c: ", c);
   * console.log("d: ", d);
   * 
   * // Otra forma de cambiar el valor de una caracteristica ahora haciendo referencia al objeto b
   * d.nombre = "Daniela"
   * 
   * console.log("c: ", c);
   * console.log("d: ", d);
   */

/* 
   8.Notacion de punto y corchetes

   // Creando un objeto y añadiendole atributos para consultarlos se puede axesar al atributo deseado por medio del objeto.atributo   
   var persona = {
   nombre: "Ulises Santiago",
   apellidos: "Estrada Jiménez",
   edad: 24,
   direccion: {
      pais: "Mexico",
      ciudad: "Celaya",
      edificio: {
         nombre: "Hight Garden",
         telefono: "12345-0976"
      }
   }
};

// impresion de atributo nombre
console.log(persona.nombre);
// impresion de atrbutos del objeto direccion
console.log(persona.direccion);
// impresion de un atributo en especifico del obejto direccion
console.log(persona.direccion.pais);
// impresion de un atributo en especifico del obejto direccion
console.log(persona.direccion.ciudad);

// Como agregar una propiedad nueva a un objeto que esta dentro de otro objeto
persona.direccion.zipcode = 1234;
// impresion
console.log(persona.direccion);

// consulta de telefono del objeto interno edificio
console.log(persona.direccion.edificio.telefono);
// Notacion muy extensa

// Otra forma 
// se crea una variable edificio y se apunta a la direccion de memoria del objeto edificio
var edificio = persona.direccion.edificio;

// para gregar una propiedad al edificio de manera mas rapida
edificio.nopiso = "8vo piso";

// impresion de todo el objeto
console.log(persona);

// Notacion corchete

// acceso a propiedades con corchete
console.log(persona["nombre"]);
console.log(persona["edad"]);

// Acceso contenido de pais con corchete
console.log(persona["direccion"] ["pais"] );

// creacion de variable con valor de variable edad
var campo = "edad";
console.log(persona[campo]);

// tener cuidado con esta notacion por que no regresa error de una referencia no creada solo regresa un indefinido
 */


/* 
//9. Funciones

// creacion de funcion

function primeraFuncion(){

   var a = 29;

   console.log(a);

}

// llamada a funcion
// Cuando la funcion es llamada javaScript regresa a la funcion y ve su contenido y reserva en memoria las cosas contenidas
primeraFuncion();

// la variable a puede estar dentro de la funcion o en el entorno global antes de la funcion
// si la variable se declara en la parte inferior del llamado a la funcion entonces al llamar a la funcion marcara como indefinido

// caso 2

var a = 29;

primeraFuncion();

function primeraFuncion(){

   console.log(a);

}

// Las funciones siempre regresan un valor
// valor de retor en consola undefined
// tener cuidado y colocar parentesis para indicar que es una funcion
function primeraFuncion_b(){

}

var f = primeraFuncion_b();

console.log(f);

// Convirtiendo funcion a objeto

function primeraFuncion_g(){
   console.log("Invocada");
}

// mi funcion ahora es un objeti que apunta a primeraFuncion
var miFuncion = primeraFuncion_g;
 */


// 10. El retorno de las funciones

// Que puede regresar una funcion de JavaScript?

/**
 * puede regresar un tipo:
 *    primitivo
 *    undefined
 *    objetos
 *    null
 */

 // Funcion que regresa un valor aleatorio entre 0 y 1
 function obtenerAleatorio(){

   return Math.random();
 }

 console.log(obtenerAleatorio() + 10);


 function obtenerNombre(){
    return "Santiago";
 }

 console.log("Ulises " + obtenerNombre());

 var nombre = obtenerNombre();
 console.log(nombre);

 // Creacion de funcion que llama a otra fun
 function esMayor(){
   if(obtenerAleatorio() > 0.5){
      return true;
   }else{
      return false;
   }
 }

 console.log(esMayor());

 if(esMayor()){
    console.log("Es mayor a 0.5");
 }else{
    console.log("Es menor a 0.5");
 }

 // Las funciones pueden regresar objetos
 // Los objetos en las funciones se pueden regresar de 2 maneras (Explicitas o anonimas)

 /**
  * objeto explicito:
  *   var obj = {}
  * 
  * return obj;
  * 
  * objeto anonimo:
  *   return{
  * 
  * }
  */

// Esta funcion regresa un objeto y el objeto tiene las propiedades nobre y apellido
 function crearPersona(nombre,apellido){

   return{

      // [nombreProiedad]:[respectivoValor]
      nombre: nombre,
      apellido: apellido

   }
   
 }

 // creando persona asignandole valores a propiedades
 var persona = crearPersona("Axel","Estrada");

 // impresion
 console.log(persona);

 // consulta de atributos especificos con el .
 console.log(persona.apellido);
 console.log(persona.nombre);

 // Ahora "persona" es un objeto 

 // Funciones que regresan funciones

 function creaFuncion(){

   return function(nombre){
      console.log("Me crearon..!!" + nombre);
      
      // esta funcion puede regresar mas funciones
      return function(){
         console.log("Segunda funcion")
      }
   }

 }

 //  Ahora nuevaFuncion tiene el valor de lo que retorno la funcion creaFuncion()
 var nuevaFuncion = creaFuncion();

 // llamar funcion "nuevaFuncion"
 nuevaFuncion(persona.nombre);
 // regresa el valor que obtuvo de la primera funcion

 var segundaFuncion = nuevaFuncion(persona.nombre);
 segundaFuncion();



 /**
  * 11. Funciones de primera clase
  * 
  * // Las funciones son objetos
  * // A las funciones se le puede poner cualquier cosa que se le pueda poner a un objeto como propiedades y metodos
  * 
  * funcion a(){
  *   
  *   console.log("Funcion a");
  * 
  * }
  * 
  * // llamado a la funcion
  * a();
  * 
  * // Ala funcion a le asignes una propiedad con el nombre "Rocio"
  * a.nombre = "Rocio";
  * 
  * // Tambien se puede objeto sobre objeto
  * a,direccion = {
  *   pais: "Costa Rica",
  *   ciudad: "San Jose",
  *   edificio: {
  *      piso: "8vo"
  *      nombre: "Edificio principal"
  * }
  * }
  * 
  */

  /**
   * 12. La palabra reservada new
   * 
   * // new crea un objeto basio pero necesita especificar de que es ese objeto vacio que se esta especificando
   * 
   * caso 1:
   * 
   * // Esto regresa un undefined
   * 
   * function Persona(){
   * 
   * }
   * 
   * var juan = Persona();
   * 
   * console.log(juan);
   * 
   * caso 2:
   * 
   * // Agregacion del news
   * // Esto regresa un objeto vacio pero javascript como de tipo persona
   * 
   * // Cuando se ustiliza el concepto new la funcion agarra un parecido a una clase
   * function Persona(nombre,apellido){
   * 
   * // Propiedades
   *  this.nombre = nombre;
   *  this.apellido = apellido;
   *  this.edad = 30;
   * 
   *  console.log("Paso por aqui");
   * 
   * // inclusive tambien se pueden crear metodos
   * this.nombreCompleto = function(){
   *  return this.nombre + " " + this.apellido + " " + this.edad;
   * }
   *  
   * }
   * 
   * var juan = new Persona(juan,medoza);
   * 
   * console.log(juan);
   * console.log(juan.nombre)
   * // this es elobjeto global de java script
   * // si no se agrega el new los atributos de la funcion persona se alojaran en el objeto global
   * 
   * // llamado a funcion nombreCompleto
   * console.log(juan.nombreCompleto())
   * 
   * 
   */

/**
 * 13. Metodos y el objeto THIS
 * 
 * // Los objetos tienen propiedades y metodos
 * // los metodos son funciones dentro del objeto
 * 
 * // En java Script cada ves que un contexto de ejecucion es corrido se crea el objeto window pero tambien se crea el this
 * 
 * // this es el objeto principal
 * 
 */

// Apesar de que haya otra variable nombre en el global
var nombre = "Axel Nieto"

 // creacion de objeto
 var persona5 = {
   
   nombre: "Maria",
   apellido: "Dubon",

   // Metodo
   imprimirNombre: function(){
      console.log(this.nombre + " " + this.apellido)
   },
   direccion: {
      pais: "Canada",
      obtenerPais: function(){

         // con esto el this apunta a canada
         // self es el nombre de una variable cualquiera
         var self = this;

         var nuevaDireccion = function(){
            // con esto esta funcion busca self afuera de ella y lo encuentra
            console.log(self);
            console.log("la direccion es en " + self.pais);
         }

         nuevaDireccion();
      }
   }

 }

// Modificacion de nombre
 persona5.nombre = "Daniela";
 persona5.imprimirNombre();
 persona5.direccion.obtenerPais();
