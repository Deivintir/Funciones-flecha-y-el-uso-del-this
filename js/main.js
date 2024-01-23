//Funciones flecha y funciones de alto nivel para arrays.
//En esta unidad aprenderemos a utilizar tanto las funciones flecha (=>) como las funciones de alto nivel incorporadas con ECMAScript2015.

//Sintaxis de las funciones flecha (=>).
//Las funciones de expresión son extraordinariamente utilizadas en JavaScript; por ejemplo, en las funciones callback que son pasadas a otras funciones para manejar asincronía.
//ejemplo de sintaxis:
var suma = function(a,b){
    return a + b;
}
let add = (a,b)=>{
    return a+b
}
//De entrada advertimos que las funciones flecha no usan la palabra reservada "function", que es sustituida por el simbolo (=>) y además los parámetros preceden al símbolo compuesto.
//Además las funciones flecha pueden ser simplificadas bajo determinadas condiciones. Por ejemplo, si solo disponen de una expresión en una línea,
//se puede eliminar tanto las llaves como la palabra "return", que pasará a ser implícita.
//Ejemplo:
let drop = (a,b) => a-b;

//Si además la función flecha solo tiene un parámetro, se pueden eliminar los paréntesis.
//Ejemplo:
console.log(add(2,4));

let squareSurface = a=> a*a;
console.log(squareSurface(5));
//Podemos comprobar en la consola que ambas funciones flecha "add()" y "squareSurface()", 
//devuelven correctamente los valores de sus expresiones aunque se haya simplificado su sintaxis.


//Funciones flecha y el uso de "this".
//Otro de los motivos por los que las funciones flecha fueron introducidas en ECAMScript2015 es que, en las funciones de expresión tradicionales el uso de "this"
//está predeterminado al ámbito del objeto "window", es decir que funciona en el ámbito global del programa, lo que puede ocasionar side-effects.
//Ejemplo:
window.username = "Juan";
function User(){
    this.username = "Laura";
    setTimeout(function(){
        console.log('Usuari@ ' + this.username);
    }, 2000)
}
var user1 = new User();
//En este caso aunque dentro del contexto de "User()" se está asignando el valor "Laura" a la propiedad "username",
//cuando la ejecutamos dentro de la función anónima introducida en el seTimeout(), usa la referencia de esa propiedad en el contexto "windos";
//por eso la ejecución en la consola devuelve "Ususar@ Juan".

//En cambio, si reescribimos el código sustituyendo la función anónima clásica por una función flecha de la siguiente manera:
window.marcaCoche = "Renault";
function Coche(){
    this.marcaCoche = "Mercedes";
    setTimeout(()=>{
        console.log("El coche es un: " + this.marcaCoche);
    }, 2000)
}
let marca = new Coche();
//Comprobaremos que se utiliza el valor "Laura", ya que "this" tendrá como ámbito el determinado por la función "User()",
//no el del objeto "window".


//Función de alto nivel "foreach" para arrays.
//Son una de las aportaciones de ECMAScript2015 que más éxito han tenido en la comunidad de desarrolladores de JavaScript,
//sobre todo porque aportan una sintaxis muy sencilla para casos de uso habituales en los programas.
//Se basan en métodos que se ejecutan sobre arrays y reciben como argumento una función flecha en la que se iteran los elementos de cada array como parámetro,
// de manera que en el cuerpo de esa función flecha se introducen las expresiones que tratarán cada elemento,
//y esta función flecha será invocada una vez por cada elemento del array.
//una de las funciones  mas simples: foreach.
//Para comprobar esta sintaxis vamos a realizar una práctica con un array de objetos.
//Ejemplo:
let alumns = [
    {name: 'Maria', surname: 'Zuil', points: 4.6 },
    {name: 'Juan', surname: 'Gómez', points: 7},
    {name: 'Laura', surname: 'López', points: 3.6},
    {name: 'Carlos', surname: 'Pérez', points: 6.7},
]
let passAlumnCounter = 0;

alumns.forEach((alumn) => {
    if(alumn.points >= 5){
        passAlumnCounter++;
    }
})
console.log(passAlumnCounter);
//Disponemos de un array de objetos de alumnos, los cuales tienen una propieda, "points",
//que queremos evaluar para que, si iguala o supera el valor 5 aumente el número de alumnos aprobados,
//valor que queremos asignar a la variable "passAlumnCounter".

//En lugar de usar un ciclo "for" e iterar el array, forEach() permite pasar como argumento una función flecha
//que recibirá como argumento el valor de cada elemento del array; es decir, en el parámetro "alumn" tendremos cada elemento del array alumns.
//La flecha se invocará tantas veces como elementos tenga el array y, en este caso,
//y como ocurre la mayoría  de las veces, no ha sido necesario usar el segundo argumento de la función flecha,
//el índice; pero estará disponible en el método forEach() por si fuera necesario.
//Al ejecutar el programa en el navegador, podemos comprobar el resultado en la consola.

//Función de alto nivel "map()" para arrays.
//El otro gran método o función de alto nivel para arrays es "map", presente en cientos de librerías JavaScript
//y usado de manera masiva por los desarrolladores en sus bloques de código.
//Su sintaxis es similar a forEach, pero en este caso cada invocación de la función flecha que se pasa como callback retorna un valor,
//con lo cual usa en el cuerpo de la función la palabra "return" y la propia ejecución de map() será asignada a alguna variable o contante
//a la que se devuelven en forma de array esos valores.
//Usaremos  los valores anteriores para aprender a utilizar map().
//Ejemplo:
const alumnList = alumns.map((alumn, index) => {
    return `${index + 1}.- ${alumn.name} ${alumn.surname}`;
})
console.log(alumnList);
//Cada ejecución de la callback pasada a map() devuelve un elemento compuesto por la interpolación del índice más uno,
//puesto que el indexados es a cero, la interpolación del nombre del elemento y los apellidos.
//Con cada ejecución de la función flecha almacena el valor en un array y este es asignado a la constante "alumnlist",
//al imprimirla por la consola obtendremos el resultado de cada string devuelto por map().ás complejos 
///Puede ayudarnos en casos de uso mas complejos, cuando necesitamos mapear (de ahi su nombre), estructuras de datos mas complejos.
const dataSet = [
    {
        "city": "Madrid",
        "10-01-22": "430",
        "10-02-22": "450",
        "10-04-22": "310",
        "10-05-22": "290"
    },
    {
        "city": "Barcelona",
        "10-01-22": "230",
        "10-02-22": "480",
        "10-03-22": "290",
        "10-05-22": "510",
    },
    {
        "city": "Sevilla",
        "10-01-22": "670",
        "10-03-22": "560",
        "10-04-22": "320",    
    },
]
/*Supongamos que, en nuestro caso de uso, necesitamos obtener 
el promedio de esos valores; pero el problema que tenemos,
y es algo común, es que cada ciudad no tiene registrado el mismo número de valores,
por lo que tenemos que resolver dos requisitos: por una parte,
acumular los valores para obtener los totales de cada ciudad;
y por otra, promediar por el número de valores de cada ciudad.*/

//Con una combinación de map() y forEach() podemos solucionarlo,
//Ejemplo:
const dataSetAverage = dataSet.map(({city, ... dayData})=>{  // convierte cada elemento del array en un objeto con dos tipos de campos
    totalDayData = 0;//Variable que almacena el numero de campos de datos que tiene cada ciudad
    Object.values(dayData).forEach(value => totalDayData+=Number(value))//cada objeto "city" es pasado por el forEach y a cada itercion guarda en totalDayData el "value" como un number
    return{//Devuelve:
        city,//de cada objeto ciudad
        averageData: totalDayData / Object.values(dayData).length //average data almacena el promedio de totalDayData dividido entre dayData.length
    }

})
console.log(dataSetAverage);//muestra en consola de cada objeto city el valor promedio.