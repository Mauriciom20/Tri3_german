"use strict";
console.log("Hola");
//TYPESCRIPT - SECCIÓN 1 
//Para los siguientes ejercicios, use let y const para declarar variables y constantes.
//Investigue: ¿cuál es la diferencia entre usar var y usar let y const en es6 ? Se le sugiere haga una búsqueda que involucre el término scope (alcance o ámbito de una variable) Implemente un ejemplo práctico.
/*Diferencias entre var, let y const:
var: Tiene un alcance de función, lo que significa que si se declara dentro de una función, no puede ser accedida fuera de ella. Además, puede ser redeclarada y es "hoisted", lo que significa que se puede usar antes de ser declarada, aunque su valor será undefined.

let: Tiene un alcance de bloque, lo que significa que solo existe dentro del bloque donde se declara. No puede ser redeclarada en el mismo bloque, pero se puede modificar.

const: También tiene un alcance de bloque y se utiliza para declarar constantes, es decir, variables que no pueden ser reasignadas después de su declaración. Sin embargo, si el valor es un objeto, se pueden modificar sus propiedades.*/
function ejemploPractico() {
    if (true) {
        var variableVar = "var";
        let variableLet = "let";
        const variableConst = "const";
    }
    console.log(variableVar); // "var"
    //console.log(variableLet); // sale "Error: variableLet is not defined" debido a que el llamado no esta en el mismo bloque en el que se declaro.
    //console.log(variableConst); // sale "Error: variableConst is not defined" debido a que el llamado no esta en el mismo bloque en el que se declaro.
}
ejemploPractico();
/*Declare e inicialice:
● Dos variables lógicas
● Dos variables numéricas
● Dos variables any
● Dos variables string
● Cree una plantilla de strings para mostrar un mensaje de bienvenida al usuario luego de registrarse en nuestro sitio, por ejemplo. “Bienvenida Paula Pérez a nuestro sitio web, gracias por registrarte”. Este template debe usar dos variables, nombres y apellidos*/
// Variables lógicas
let realizandoTaller = true; // se declara la variable, se le asigna un tipo de dato booleano y se le asigna un valor a la variable.
const seRealizanCuatroTalleresHoy = false; // se declara la variable, se le asigna un tipo de dato booleano y se le asigna un valor a la variable.
// Variables numéricas
let ejemploEdad = 23; // se declara la variable, se le asigna un tipo de dato numerico y se le asigna un valor a la variable.
const año = 2024; // se declara la variable, se le asigna un tipo de dato numerico y se le asigna un valor a la variable.
// Variables any - pueden convertirse en otros tipos de datos sin presentar error
let tipoDato = "Texto"; // se declara la variable, se le asigna un tipo de dato any y se le asigna un valor a la variable, en este caso queda tipo string.
let anyObjeto = { key: "objeto" }; // se declara la variable, se le asigna un tipo de dato any y se le asigna un valor a la variable, en este caso queda tipo objeto.
// Variables string
let primerNombre = "Paula"; // se declara la variable, se le asigna un tipo de dato string y se le asigna un valor a la variable 
let primerApellido = "Pérez"; // se declara la variable, se le asigna un tipo de dato string y se le asigna un valor a la variable
// Mensaje de bienvenida
const welcomeMessage = `Bienvenida ${primerNombre} ${primerApellido} a nuestro sitio web, gracias por registrarte☻.`;
console.log(welcomeMessage); // se declara la variable, se utiliza una interpolación de string y el llamado de las dos variables.
/*Declare e inicialice:
● Una variable array de números que contenga cinco elementos e imprima cada uno de sus elementos.
● Una variable array de strings que contenga cinco elementos e imprima cada uno de sus elementos.
● Recorra cada array creado usando for-each e imprimiendo cada uno de sus elementos*/
// Array de números
let numeros = [1, 2, 3, 4, 5]; // se declara la variable, se le asigna un tipo de dato numerico y de tipo array, se le asignan los elementos al array.
console.log("Elementos del array de números:"); //estetico.
numeros.forEach(num => console.log(num)); //se imprime cada uno de los elementos del array.
// Array de strings
let frutas = ["manzana", "banano", "cereza", "naranja", "kiwi"]; // se declara la variable, se le asigna un tipo de dato string y de tipo array, se le asignan los elementos al array.
console.log("Elementos del array de strings:"); //estetico.
frutas.forEach(frutas => console.log(frutas)); //se imprime cada uno de los elementos del array.
//Investigue: cómo eliminar elementos de un array, agregar elementos, leer y actualizar elementos.
// Agregar un elemento
frutas.push("mango"); // agrega "mango" despues del ultimo elemento del array.
console.log("Después de agregar mango:", frutas); // llamado para ver el array despues de modificarlo.
// Eliminar el último elemento
frutas.pop(); // elimina "mango", es decir, el ultimo elemento del array.
console.log("Después de eliminar el último elemento:", frutas); // llamado para ver el array despues de modificarlo.
// Leer un elemento
console.log("Primer elemento del array de frutas:", frutas[0]); // llamado para ver un elemento del array.
// Actualizar un elemento
frutas[0] = "uva"; // actualiza el primer elemento del array "manzana" por "uva"
console.log("Después de actualizar el primer elemento:", frutas); // llamado para ver el array despues de modificarlo.
/*Implemente ejemplos prácticos.
Declare e inicialice:
● Una variable tipo objeto cuyos valores sean los días de la semana
● Una variable tipo objeto cuyos valores sean los números del 0 al 9
● Recorra cada objeto creado usando for-in e imprimiendo cada uno de sus valores*/
// Objeto con días de la semana
let diasSemana = {
    lunes: "Lunes",
    martes: "Martes",
    miércoles: "Miércoles",
    jueves: "Jueves",
    viernes: "Viernes",
    sábado: "Sábado",
    domingo: "Domingo"
}; // se declara la variable, se asigna un valor clave tipo string y de objeto, se asigna el tipo de los elementos como string, se asignan los elementos del objeto.
// Recorrer el objeto
console.log("Días de la semana:"); // estetico
for (const dia in diasSemana) {
    console.log(diasSemana[dia]);
}
; // imprime cada elemento del objeto en una nueva linea
// Objeto con números del 0 al 9
let objetoNumerosTexto = {
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
}; // se declara la variable, se asigna un valor clave tipo numerico y de objeto, se asigna el tipo de los elementos como string, se asignan los elementos del objeto.
// Recorrer el objeto
console.log("Números del 0 al 9:"); //estetico
for (const num in objetoNumerosTexto) {
    console.log(objetoNumerosTexto[num]);
}
; // imprime cada elemento del objeto en una nueva linea
//Investigue: cómo eliminar elementos clave-valor de un objeto, cómo leer y actualizar valores. Implemente ejemplos prácticos.
//Leer un valor
console.log("Valor de 3:", objetoNumerosTexto[3]); // llamado para ver un elemento del objeto("Tres").
// Actualizar un valor
objetoNumerosTexto[3] = "Tres actualizado"; // se actualiza "Tres" por "Tres actualizado"
console.log("Después de actualizar 3:", objetoNumerosTexto[3]); // llamado para ver un elemento del objeto despues de modificarlo.
// Eliminar un valor
delete objetoNumerosTexto[3]; // se elimina el elemento del bojeto ("Tres").
console.log("Después de eliminar 3:", objetoNumerosTexto); // llamado para ver un elemento del objeto despues de modificarlo.
//Investigue: Ciclos for y while en TypeScript. Implemente ejemplos prácticos.
//Ciclo for
console.log("Usando ciclo for:"); //estetico
for (let i = 0; i < 5; i++) {
    console.log("Número:", i);
}
; // imprime los numeros de 0 al 4.
// Ciclo while
console.log("Usando ciclo while:"); //estetico
let j = 0;
while (j < 5) {
    console.log("Número:", j);
    j++;
}
; // imprime los numeros de 0 al 4.
