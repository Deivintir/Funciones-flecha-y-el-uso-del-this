ñ//Funciones flecha y funciones de alto nivel para arrays.
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
