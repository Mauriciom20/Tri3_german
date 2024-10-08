//TALLER TYPESCRIPT- SECCIÓN 2 
//● Cree una función con un parámetro opcional tipo boolean, uno por defecto tipo string, y uno obligatorio de tipo number. Haga el llamado a la función. 

function funcionParametroOpcional(opcional: boolean = true, porDefecto: string = "STRING", obligatorio: number = 1) {
    console.log(`Opción: ${opcional}, Texto: ${porDefecto}, Número: ${obligatorio}`);
}
funcionParametroOpcional(true, "Hola", 42);
funcionParametroOpcional(false, "Mundo", 10);

//● Cree una variable tipo función que tenga como parámetros dos números y retorne su suma, haga el llamado a la función. 

const sumar: (a: number, b: number) => number = (a, b) => a + b;

// Llamado a la función
const resultadoSuma = sumar(5, 7);
console.log(`La suma es: ${resultadoSuma}`);

//● Use setTimeOut para implementar un callback que se llame a los 5 segundos e imprima por consola el mensaje “HOLA ADSI” 
//● Cree una función flecha sin argumentos que imprima “Hola ADSI”. 
//● Creeunafunción flecha que tenga como parámetro edad y retorne un string que le diga al usuario cuál  fue la edad pasada como argumento, imprima el valor devuelto por la función. Use paréntesis para el parámetro y omita la palabra reservada return. 
//● Cree una función flecha que tenga como parámetros dos números y retorne el producto de éstos,  imprima el valor devuelto por la función. Use paréntesis para agrupar los parámetros, no use la palabra reservada return. 
//● Cree una función flecha que tenga como parámetros dos números y retorne el módulo de éstos, imprima el valor devuelto por la función. La función debe tener dos instrucciones, una donde se declare e inicialice la variable módulo que contendrá el módulo de los dos números y la otra donde se retorne la variable módulo. Use paréntesis para agrupar los parámetros, use llaves para agrupar las dos instrucciones. 

//Investigue: Desestructuración de objetos y arreglos. Implemente 3 ejemplos prácticos diferentes a los planteados en la guía de Typescript.