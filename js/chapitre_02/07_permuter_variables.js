/* 
 * Code Javascript chapitre 02 exercice 07 - Permuter 2 variables
 *
 */
var nombre1 = 5;
var nombre2 = 3;
var nombreTemp;

nombreTemp = nombre1;   // Placer nombre1 dans nombreTemp
nombre1 = nombre2;      // Placer nombre2 dans 1
nombre2 = nombreTemp;   // Placer nombreTemp (valeur nombre1) dans nombre 2

console.log('Nombre 1 : ' + nombre1); // Affiche 3
console.log('Nombre 2 : ' + nombre2); // Affiche 5