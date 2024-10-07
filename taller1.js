"use strict";
console.log("Hola");
//TYPESCRIPT - SECCIÓN 1 
//Para los siguientes ejercicios, use let y const para declarar variables y constantes.
//Investigue: ¿cuál es la diferencia entre usar var y usar let y const en es6 ? Se le sugiere haga una búsqueda que involucre el término scope (alcance o ámbito de una variable) Implemente un ejemplo práctico.
/*Diferencias entre var, let y const:
var: Tiene un alcance de función, lo que significa que si se declara dentro de una función, no puede ser accedida fuera de ella. Además, puede ser redeclarada y es "hoisted", lo que significa que se puede usar antes de ser declarada, aunque su valor será undefined.

let: Tiene un alcance de bloque, lo que significa que solo existe dentro del bloque donde se declara. No puede ser redeclarada en el mismo bloque, pero se puede modificar.

const: También tiene un alcance de bloque y se utiliza para declarar constantes, es decir, variables que no pueden ser reasignadas después de su declaración. Sin embargo, si el valor es un objeto, se pueden modificar sus propiedades.*/
function ejemploScope() {
    if (true) {
        var variableVar = "var";
        let variableLet = "let";
        const variableConst = "const";
    }
    // console.log(variableVar); // "Soy var"
    // console.log(variableLet); // Error: variableLet is not defined
    // console.log(variableConst); // Error: variableConst is not defined
}
ejemploScope();
/*Declare e inicialice:
● Dos variables lógicas
● Dos variables numéricas
● Dos variables any
● Dos variables string
● Cree una plantilla de strings para mostrar un mensaje de bienvenida al usuario luego de registrarse en nuestro sitio, por ejemplo. “Bienvenida Paula Pérez a nuestro sitio web, gracias por registrarte”. Este template debe usar dos variables, nombres y apellidos*/
// Variables lógicas
let isLoggedIn = true;
const hasPermission = false;
// Variables numéricas
let age = 25;
const year = 2023;
// Variables any
let data = "Hola";
let anyValue = { key: "value" };
// Variables string
let firstName = "Paula";
let lastName = "Pérez";
// Mensaje de bienvenida
const welcomeMessage = `Bienvenida ${firstName} ${lastName} a nuestro sitio web, espero tengas un buen día☻.`;
console.log(welcomeMessage);
/*Declare e inicialice:
● Una variable array de números que contenga cinco elementos e imprima cada uno de sus
elementos.
● Una variable array de strings que contenga cinco elementos e imprima cada uno de sus
elementos.
● Recorra cada array creado usando for-each e imprimiendo cada uno de sus elementos*/
// Array de números
let numbers = [1, 2, 3, 4, 5];
console.log("Elementos del array de números:");
numbers.forEach(num => console.log(num));
// Array de strings
let fruits = ["manzana", "banana", "cereza", "naranja", "kiwi"];
console.log("Elementos del array de strings:");
fruits.forEach(fruit => console.log(fruit));
//Investigue: cómo eliminar elementos de un array, agregar elementos, leer y actualizar elementos.
// Agregar un elemento
fruits.push("mango");
console.log("Después de agregar mango:", fruits);
// Eliminar el último elemento
fruits.pop();
console.log("Después de eliminar el último elemento:", fruits);
// Leer un elemento
console.log("Primer elemento del array de frutas:", fruits[0]);
// Actualizar un elemento
fruits[0] = "uva";
console.log("Después de actualizar el primer elemento:", fruits);
/*Implemente ejemplos prácticos.
Declare e inicialice:
● Una variable tipo objeto cuyos valores sean los días de la semana
● Una variable tipo objeto cuyos valores sean los números del 0 al 9
● Recorra cada objeto creado usando for-in e imprimiendo cada uno de sus valores*/
// Objeto con días de la semana
let daysOfWeek = {
    lunes: "Lunes",
    martes: "Martes",
    miércoles: "Miércoles",
    jueves: "Jueves",
    viernes: "Viernes",
    sábado: "Sábado",
    domingo: "Domingo"
};
// Recorrer el objeto
console.log("Días de la semana:");
for (const day in daysOfWeek) {
    console.log(daysOfWeek[day]);
}
;
// Objeto con números del 0 al 9
let numbersObject = {
    0: "Cero",
    1: "Uno",
    2: "Dos",
    3: "Tres",
    4: "Cuatro",
    5: "Cinco",
    6: "Seis",
    7: "Siete",
    8: "Ocho",
    9: "Nueve"
};
// Recorrer el objeto
console.log("Números del 0 al 9:");
for (const num in numbersObject) {
    console.log(numbersObject[num]);
}
;
//Investigue: cómo eliminar elementos clave-valor de un objeto, cómo leer y actualizar valores. Implemente ejemplos prácticos.
//Leer un valor
console.log("Valor de 3:", numbersObject[3]);
// Actualizar un valor
numbersObject[3] = "Tres actualizado";
console.log("Después de actualizar 3:", numbersObject[3]);
// Eliminar un valor
delete numbersObject[3];
console.log("Después de eliminar 3:", numbersObject);
//Investigue: Ciclos for y while en TypeScript. Implemente ejemplos prácticos
//Ciclo for
console.log("Usando ciclo for:");
for (let i = 0; i < 5; i++) {
    console.log("Número:", i);
}
// Ciclo while
console.log("Usando ciclo while:");
let j = 0;
while (j < 5) {
    console.log("Número:", j);
    j++;
};
