/* 
 * Code Javascript chapitre 09 exercice 02 - Somme
 *
 */
// Déclarer le tableau
var valeurs = [11, 3, 7, 2, 9, 10];
var sommeValeurs = 0;

for (var i = 0; i < valeurs.length; i++) {
    sommeValeurs += valeurs[i];
}

console.log('La somme des éléments vaut ' + sommeValeurs);