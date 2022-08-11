var cowsay = require("cowsay");

console.log(cowsay.say({
    text: "I'm a Callback",
    e: "o-",
    T: "U "
}));

// or cowsay.think()

//1.- Muestra un mensaje en consola mediante un callback.
//La función que escribas debe poder mostrar el mensaje como console.warn, console.log, console.info,
//o cualquier método para pintar en consola del objeto console.
function mostrarMensaje(mensaje1, mensaje2, callback) {
    var mensajeCompleto = mensaje1 + " " + mensaje2;
    callback(mensajeCompleto);
}
mostrarMensaje("hola", "amigo", function(mensajeCompleto) {
    console.log(mensajeCompleto);
});

// 2.- Crear una función que reciba como
//     argumento una variable de cualquier tipo y un callback.
//La función debe retornar como resultado, mediante el callback,
//cual es el tipo de dato de la variable ingresada e imprimir su contenido.

function tipoDato(variable, callback) {
    var tipo = typeof variable;
    callback(tipo, variable);
}

tipoDato(1, function(tipo, variable) {
    console.log(tipo, variable);
});

// 3.- Crear una función que reciba como
// argumentos, dos números y un callback. Según el callback
// que se pase a la función, se devuelve la suma de los
// dos números, la resta de los dos números o la
// multiplicación de los dos números.

function operacion(numero1, numero2, callback) {
    var resultado = callback(numero1, numero2);
    console.log(resultado);
}

operacion(2, 2, function(numero1, numero2) {
    return numero1 + numero2 + " es la suma de los dos numeros";
});
operacion(2, 2, function(numero1, numero2) {
    return numero1 - numero2 + " es la resta de los dos numeros";
});
operacion(2, 2, function(numero1, numero2) {
    return numero1 * numero2 + " es la multiplicacion de los dos numeros";
});

// 4.- Escribe una función que reciba una cadena de
//     caracteres y debe devolver, mediante un callback, la
//     cadena de caracteres en mayúsculas o en minúsculas.
//             ordenSuperior("PejeLagarto", minus);
//             -> pejelagarto
//             ordenSuperior("PejeLagarto", mayus);
//             -> PEJELAGARTO

function ordenSuperior(cadena, callback) {
    var resultado = callback(cadena);
    console.log(resultado);
}
ordenSuperior("PejeLagarto", function(cadena) {
    return cadena.toUpperCase();
});
ordenSuperior("PejeLagarto", function(cadena) {
    return cadena.toLowerCase();
});

// 5.- Hacer un arreglo de 4 cantidades de tiempo (en minutos)
//     EJEMPLO [120, 80, 200, 100] y tomar solo las cantidades
//     mayores a dos horas (hacer la comparación en horas) regresar el nuevo array mediante un callback.

//arreglo de 4 cantidades de tiempo en minutos  EJEMPLO [120, 80, 200, 100]
var tiempos = [120, 80, 200, 100, 800];

function comparacion(tiempo, callback) {
    var resultado = callback(tiempo);
    console.log(resultado);
}
comparacion(tiempos, function(tiempo) {

    return tiempo.filter(function(tiempo) {
        return tiempo > 120;
    });
});