/* 
 * Code Javascript chapitre 03 exercice 02 - Comparaison de 2 nombres
 *
 */
var nombre01 = Number(prompt('Saisis un premier nombre :'));
var nombre02 = Number(prompt('Saisis un deuxième nombre :'));

if (nombre01 > nombre02) {
    console.log(nombre01 + ' est plus grand que ' + nombre02 + '.');
} else if (nombre01 < nombre02) {
    console.log(nombre01 + ' est plus petit que ' + nombre02 + '.');
} else {
    console.log(nombre01 + ' est égal à ' + nombre02 + '.');
}