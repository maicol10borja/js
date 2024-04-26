var saludo = "Hola mundo desde JavaScript"
console.log(saludo)
/*
Aquí va nuestro comentarios

Formas de escribir la sintaxis
var nombre
var $nombre
var _nombre
var nombre1
var nombre_estudiante
Como no se puede escribir una variable
var 8nombre
Tampoco de puede utilizar palabras reservadas de JavaScript
var if, while, case, for
¿Comó creamos nuestros archivos JavaScript?
JAVASCRIPT.js
var holaMundo
def HolaMundo{

}
*/

/*----Variables en JavaScript----
Existen dos tipos 
1. var=> Es una variable global se puede 
utilizar en toda la vida del programadoro
o todos los Iso alacance.
2. let=> Es una varible privada que se
utiliza en una parte especifica de mi 
programa eso quiere decir que es una 
varible local.
*/

var a
a=7
console.log("El valor de a es ",a)

let b
b=6
console.log("El valor de b es ",b)
console.log(window)
console.log(window.a)
console.log(window.b)
/*----Variable tipo b----*/
var música="Baldas"
console.log("Varible antes del bloque",música)
{
var música="Cumbias"
console.log("Varible dentro del bloque",música)
}
console.log("Varible fuera del bloque",música)
console.log("*******Let*******")
let música2="Salsa"
console.log("Varible antes de entrar al bloque",música2)
{
let música2="Meregue"
console.log("Varible dentro del bloque",música2)
}
console.log("Varible fuera del bloque",música2)

