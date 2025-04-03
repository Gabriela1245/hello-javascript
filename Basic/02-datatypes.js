/*
Clase 17 - Tipos de datos
Vídeo: https://youtu.be/1glVfFxj8a4?t=3599
*/

// Tipos de datos primitivos

// Cadenas de texto (string)
let myName = "Brais Moure"
let alias = 'MoureDev'
let email = `braismoure@mouredev.com`

// Números (number)
let age = 37 // Entero
let height = 1.77 // Decimal

// Booleanos (boolean). 
// Solo se pueden tener 2 valores: True y false.
let isTeacher = true
let isStudent = false

// Undefined
//Para una variable uqe ha sido declarada, pero no inicializada, es decir, no se le ha asignado ningún valor.
let undefinedValue
console.log(undefinedValue)

// Null
//Sirve para declarar una variable con un valor, pero vale "nulo" porque ahora no se sabe que irá alli; quizas a futuro muy probablemente se le asigne un valor como tal .
let nullValue = null

// Symbol

let mySymbol = Symbol("mysymbol")

// BigInt
//Para introducir grandes cnatidades de números enteros, ya que normalmente a un número se le da un almacenamiento de 64 bits. Pero en este caso con BigInt el limite de memoria es el del almacenamiento de tu pc.
let myBigInt = BigInt(817239871289371986589716389471628379612983761289376129)
let myBigInt2 = 817239871289371986589716389471628379612983761289376129n

// Mostramos los tipos de datos, muestra qué tipo de dato es: Un string, número, etc 
console.log(typeof myName)
console.log(typeof alias)
console.log(typeof email)

console.log(typeof age)
console.log(typeof height)

console.log(typeof isTeacher)
console.log(typeof isStudent)

console.log(typeof undefinedValue)

console.log(typeof nullValue)

console.log(typeof mySymbol)

console.log(typeof myBigInt)
console.log(typeof myBigInt2)
