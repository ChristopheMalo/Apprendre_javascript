/* 
 * Code Javascript chapitre 05 exercice 02 - Carré d'un nombre
 *
 */
// Renvoie le carré d'un nombre
function carre(x) {
    // TODO : compléter le code de la fonction
    var carre = x * x;
    return carre;
    // OU
    // return x * x;
}

console.log('Carré de 0 : ' + carre(0)); // Doit afficher 0
console.log('Carré de 2 : ' + carre(2)); // Doit afficher 4
console.log('Carré de 5 : ' + carre(5)); // Doit afficher 25

/* amélioration - Carré des nombres de 0 à 10 */
console.log('\nAmélioration - carré de 0 à 10');
for (var i = 0; i <= 10; i++) {
    console.log('Carré de ' + i + ' : ' + carre(i) );
}