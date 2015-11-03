/* 
 * Code Javascript chapitre 09 exercice 01 - Mousquetaires
 *
 */
// Étape 1 - Création du tableau avec les 3 mousquetaires
var mousquetaires = ['Athos', 'Porthos', 'Aramis'];

// Parcourir le tableau avec une boucle for
console.log('Voici les trois mousquetaires :');
for (var i = 0; i < mousquetaires.length; i++) {
    console.log(mousquetaires[i]);
}

// Ajouter d'Artagnan au tableau
mousquetaires.push('D\'Artagnan');

console.log('À présent, ils sont quatre !');
// Parcourir le tableau avec un forEach
mousquetaires.forEach(function (mousquetaire) {
    console.log(mousquetaire);
});