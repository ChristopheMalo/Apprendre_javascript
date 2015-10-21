/* 
 * Code Javascript chapitre 4 exercice 05 - Ni oui ni non
 *
 */
/* Boucle la plus adéquate : While
 * 
 */
var chaineSaisie = '';
while ((chaineSaisie !== 'oui') && (chaineSaisie !== 'non')) {
    chaineSaisie = prompt('Veux tu jouer au jeu du ni oui ni non ?');
}
console.log('Tu as perdu !!!');