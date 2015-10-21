/* 
 * Code Javascript chapitre 4 exercice 02 - Nombres pairs / Impairs
 *
 */
/* Boucle la plus adéquate : nombre est connu -> For
 * 
 */

console.log('Boucle For');
for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + ' est pair');
    } else {
        console.log(i + ' est impair');
    }
}

// Amélioration -> L'utilisateur saisit un nombre
console.log('\nBoucle for avec prompt - max 10 nombres');
var nombreSaisi = Number(prompt('Saisis un nombre initial :'));
var nombreMax = 10;

for (var i = nombreSaisi; i < nombreSaisi + nombreMax; i++) {
    if (i % 2 === 0) {
        console.log(i + ' est pair');
    } else {
        console.log(i + ' est impair');
    }
}