/* 
 * Code Javascript - Cours - Chapitre 05
 */
/* Fonctions */
function sayHello() {
    console.log('Hello');
}

console.log('Start');
sayHello();
console.log('End');

/* variante */
function sayHello2() {
    return 'Hello 2!';
}

console.log('Start 2');
var result = sayHello2();
console.log(result);
console.log('Appel de la fonction avec console log : ' + sayHello2());
console.log('End 2');

/* variables locales */
function sayHello3() {
    var msg = 'Hello 3 par variable locale';
    return msg;
}

console.log(sayHello3());

/* passage de paramètres */
function sayHello4(firstname) { // Paramètre firstname
    var msg = 'Hello, ' + firstname + ' !';
    return msg;
}

console.log(sayHello4('Christophe')); // PAsser un argument 'Christophe' à la fonction
console.log(sayHello4('Emma'));

/* Test fonction péddéfinies */
console.log(Math.min(35, 56)); //Affiche 35
console.log(Math.random()); // Affiche un nombre aléatoire entre 0 et 1