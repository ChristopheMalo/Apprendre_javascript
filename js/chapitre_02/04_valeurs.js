/* 
 * Code Javascript chapitre 02 exercice 04 - Valeurs
 *
 */
var a = 2;
a = a - 1; // a contient 1
console.log('a = a - 1 affiche ' + a); // Affiche 1

a++; // a contient 2
console.log('a++ affiche ' + a); // Affiche 2

var b = 8;
b += 2; // b contient 10
console.log('b += 2 affiche ' + b); // Affiche 10

var c = a + b * b; // c contient 102
console.log('c = a + b * b affiche ' + c); // Affiche 102

var d = a * b + b; // d contient 30
console.log('d = a * b + b affiche ' + d); // Affiche 30

var e = a * (b + b); // e contient 40
console.log('e = a * (b + b) affiche ' + e); // Affiche 40

var f = a * b / a; // f contient 10
console.log('f = a * b / a affiche ' + f); // Affiche 10

var g = b / a * a; // g contient 10
console.log('g = b / a * a affiche ' + g); // Affiche 10