var cowsay = require("cowsay");

console.log(cowsay.say({
    text: "I'm a CowConsole",
    e: "o-",
    T: "U "
}));

// or cowsay.think()

//palindrome 
function palindrome(word) {
    var reverse = word.split("").reverse().join("");
    return word === reverse;
}
// console.log(palindrome("madam"));
console.log(cowsay.say({
    text: "Madam es una palabra palindrome, vaca? " + palindrome("madam"),
    e: "o-",
    T: "U "
}));

//funcion longesCountry 
function longestCountry(countries) {
    var longest = countries[0];
    for (var i = 1; i < countries.length; i++) {
        if (countries[i].length > longest.length) {
            longest = countries[i];
        }
    }
    return longest;
}
// console.log(longestCountry(["Colombia ", "Mexico", "Panamá", "España"]));
console.log(cowsay.say({
    text: "El pais mas largo de este array es  " + longestCountry(["Colombia", "Mexico", "Panamá", "España"]),
    e: "o-",
    T: "U "
}));

//funcion farenheitToCelsius 
function farenheitToCelsius(farenheit) {
    return (farenheit - 32) * 5 / 9;
}
// console.log(farenheitToCelsius(32));
console.log(cowsay.say({
    text: "32 grados Farenheit son " + farenheitToCelsius(32) + " grados celsius.",
    e: "o-",
    T: "U "
}));

//funcion que imprima el numero de parametros enviados a la funcion con spread operator
function printArgs(...args) {
    // console.log(args);
    console.log(cowsay.say({
        text: "El numero de parametros enviados a la funcion es " + args.length,
        e: "o-",
        T: "U "
    }));
}
printArgs(1, 2, 3, 4, 5);