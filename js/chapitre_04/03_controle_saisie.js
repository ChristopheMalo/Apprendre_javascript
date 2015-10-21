/* 
 * Code Javascript chapitre 4 exercice 02 - Nombres pairs / Impairs
 *
 */
/* Boucle la plus adéquate : le nombre de saisie n'est pas connu -> While
 * 
 */

var nombreSaisi = 200; // Initialisation de la variable pour lancer la boucle - nombre supérieur à 100 

while (nombreSaisi > 100) { // Tant que nombre saisi supérieur à 100 alors affichage box saisie
    nombreSaisi = Number(prompt('Saisis un nombre inférieur ou égal à 100 : '));
}

console.log('Tu as saisi ' + nombreSaisi + '. C\'est un nombre correct !');


// Amélioration
var nombreSaisi = 0; // Initialisation de la variable pour lancer la boucle 

while ((nombreSaisi < 50) || (nombreSaisi > 100)) {
    nombreSaisi = Number(prompt('Saisis un nombre compris entre 50 et 100 : '));
}

console.log('Tu as saisi ' + nombreSaisi + '. C\'est un nombre correct !');