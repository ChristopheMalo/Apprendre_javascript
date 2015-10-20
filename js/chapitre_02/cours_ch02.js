/* 
 * Code Javascript - Cours - Chapitre 02
 */
/* Variables */
var a;
console.log(a);

a = 3.14;
console.log(a);

var b = 0; // b contient la valeur 0
console.log(b); // Affiche 0
b += 1; // b contient la valeur 1
console.log(b); // Affiche 1
b++; // b contient la valeur 2
console.log(b); // affiche 2


/* Expressions */
var c = 3;
var d = c;
console.log(d); // Affiche 3
d = d + 1;
console.log(d); // Affiche 4

var e = 3 + 2 * 4; // Affiche 11
console.log(e);
e = (3 + 2) * 4; // Affiche 20
console.log(e);


/* Conversions de types */
var f = 150;
console.log('La variable f contient la valeur ' + f);

var g = 'huit' * 24;
console.log(g); // Affiche NaN

var h = '35';
console.log(h + 10); // Affiche 3510

h = Number('25');
console.log(h + 10); // Affiche 35