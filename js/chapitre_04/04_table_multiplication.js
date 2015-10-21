/* 
 * Code Javascript chapitre 4 exercice 02 - Nombres pairs / Impairs
 *
 */
/* Boucle la plus adéquate : For
 * 
 */

var nombreSaisi = Number(prompt('Saisis un nombre à multiplier :'));

console.log('Voici la table de multiplication de ' + nombreSaisi);

for (var i = 1; i <= 10; i++) {
    console.log(nombreSaisi + ' x ' + i + ' = ' + nombreSaisi * i);
}


// Améliorations - ici utilisation de while pour contrôler la saisie
var nombreSaisi = 0; // Initialisation de la variable pour lancer la boucle 

while ((nombreSaisi < 2) || (nombreSaisi > 9)) {
    nombreSaisi = Number(prompt('Saisis un nombre compris entre 2 et 9 : '));
}

console.log('Voici la table de multiplication de ' + nombreSaisi);

for (var i = 1; i <= 10; i++) {
    console.log(nombreSaisi + ' x ' + i + ' = ' + nombreSaisi * i);
}