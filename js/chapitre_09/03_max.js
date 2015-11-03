/* 
 * Code Javascript chapitre 09 exercice 03 - Max des valeurs
 *
 */
// Pour tester le programme -> Ajout de la valeur 80
var valeurs = [11, 3, 7, 80, 2, 9, 10];

// Initialiser la variable maxValeur avec la première valeur du tableau
var maxValeur = valeurs[0];

for (i = 1; i < valeurs.length; i++) {  // Parcours du tableau - Indice i à 1 car maxValeur initialisé avec 1ère valeur du tableau
    if (valeurs[i] > maxValeur) {       // Comparer les valeurs - Si la valeur temporaire est supérieure à la valeur MAX
        maxValeur = valeurs[i];         // Alors la valeur est affectée à valeurMax
    }
}

console.log('Le maximum des éléments vaut ' + maxValeur);