//-------------------------------------------------------------------------------//
//                   Ejercicio 1: Declarar una variable para un número entero
//-------------------------------------------------------------------------------//
var numeroEntero = 5;

// Declarar una variable para un número decimal
var numeroDecimal = 2.5;

// Realizar operaciones
var suma = numeroEntero + numeroDecimal;
var resta = numeroEntero - numeroDecimal;
var multiplicacion = numeroEntero * numeroDecimal;
var division = numeroEntero / numeroDecimal;
var exponente = Math.pow(numeroEntero, 2); 

// Mostrar los resultados en la consola
console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);
console.log("Exponente: " + exponente);


//-------------------------------------------------------------------------------//
//                          Ejercicio 2: Concatenar cadenas de texto
//-------------------------------------------------------------------------------//
var nombreCompleto = "CRISTIAN JAVIER MARTINEZ MARTINEZ";
var carneEstudiante = "SMSS083722";

var concatenacion = nombreCompleto + " - " + carneEstudiante;

console.log("Ejercicio 2 - Concatenación: " + concatenacion);


//-------------------------------------------------------------------------------//
//                          Ejercicio 3: Convertir número a cadena de texto
//-------------------------------------------------------------------------------//

var numero = 42; // Puedes cambiar este número según lo necesites
// Convertir el número a cadena de texto
var numeroComoCadena = numero.toString();

console.log("Ejercicio 3 - Número como cadena de texto: " + numeroComoCadena);


//-------------------------------------------------------------------------------//
//                           Ejercicio 4: Convertir cadena a número
//-------------------------------------------------------------------------------//

var cadenaNumero = "42"; // Puedes cambiar esta cadena según lo necesites

// Convertir la cadena a un número
var numeroDesdeCadena = parseFloat(cadenaNumero);

console.log("Ejercicio 4 - Cadena a número: " + numeroDesdeCadena);
//-------------------------------------------------------------------------------//
//                            Constantes de gravedad en m/s^2
//-------------------------------------------------------------------------------//
const gravedadTierra = 9.8;
const gravedadLuna = 1.625;  // Gravedad en la Luna
const gravedadMarte = 3.72076;  // Gravedad en Marte
const gravedadMercurio = 3.7;  // Gravedad en Mercurio

// Masa en kilogramos
var masa = 75;  // Puedes cambiar este valor según lo necesites

// Cálculo del peso en Newtons (N) en diferentes planetas
var pesoTierra = masa * gravedadTierra;
var pesoLuna = masa * gravedadLuna;
var pesoMarte = masa * gravedadMarte;
var pesoMercurio = masa * gravedadMercurio;

// Mostrar resultados en la consola
console.log("Peso en la Tierra: " + pesoTierra + " N");
console.log("Peso en la Luna: " + pesoLuna + " N");
console.log("Peso en Marte: " + pesoMarte + " N");
console.log("Peso en Mercurio: " + pesoMercurio + " N");

