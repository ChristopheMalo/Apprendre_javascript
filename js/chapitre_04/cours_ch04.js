/* 
 * Code Javascript - Cours - Chapitre 04
 */
/* Boucles */
// Boucle While - tant qu'une condition est vérifiée
// Nombre de tour de boucle non connu à l'avance
// Exemple : donnée saisie par l'utilisateur
console.log('Début');
var nombre = 1;
while (nombre < 10) {
    console.log(nombre);
    nombre++;
}
console.log('Fin');

var lettreSaisie = '';
while (lettreSaisie !== 'X') {
    lettreSaisie = prompt('Saisis une lettre ou X pour sortir :');
    console.log(lettreSaisie);
}


// For - basée sur la valeur d'une variable qui est modifiée dans le corps de la boucle
// Le nombre de tour de boucle doit être connu à l'avance
console.log('Start');
for (var count = 1; count < 10; count++) {
    console.log(count);
}
console.log('End');