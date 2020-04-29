/**
 * 14. El señor de los anillos - Juego para explicar JavaScript
 * (simulador de combate)
 */

// Declaraciond de jugadores
// Con J Mayuscula se indica que esta sera una funcion de primera clase
function Jugador(nombre){

    this.nombre = nombre;
    this.pv = 100;
    this.sp = 100;

    // Metodo que cura un jugador
    /**
     * Un jugador va a utilizar su sp y curar a otro
     */

     {
        
            // Recibe como parametro un jugador objetivo que es al personaje que yo quiero curar
            this.curar = function(jugadorObjetivo){
                
                if(this.sp >= 40){

                    // this apunta al jugador que esta disparandola habilidad
                     this.sp -= 40; // se necesitan 40 sp para curar

                    jugadorObjetivo.pv = jugadorObjetivo.pv + 20; // va a curar 20 puntos
                    // o tambien se puede escribirlo lo anterior como jugadorObjeto.pv += 20;
                }else{
                    console.info(this.nombre + " no tiene sp suficientes para curar a jugador")
                }
            
                this.estado(jugadorObjetivo);
            }

            this.tirarFlecha = function(jugadorObjetivo){

                if(jugadorObjetivo.pv > 40){

                    jugadorObjetivo.pv -= 40; // hace 40 puntos de daño
                
                }else{
                    jugadorObjetivo.pv = 0;
                    console.error(jugadorObjetivo.nombre + " murio...!!")
                }

                this.estado(jugadorObjetivo);
            }

            // Metodo para que se encargue de hacer todas las impresiones
            /**
            * La idea es que cada es que se ejecuta alguna accion
            * se haga la impresion de comoquedaron los jugadores
            */
            this.estado = function(jugadorObjetivo){
            console.info(this);
            console.info(jugadorObjetivo);
            }

    }
    
};

// Definir jugadores

var gandalf = new Jugador("Gandalf");
var legolas = new Jugador("Legolas");

console.log(gandalf);
console.log(legolas);

// Simulacion de gandalf curando a legolas
gandalf.curar(legolas);

