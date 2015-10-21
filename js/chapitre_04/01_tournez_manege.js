/* 
 * Code Javascript chapitre 4 exercice 01 - Tournez manège
 *
 */
/* Boucle la plus adéquate : nombre de tours est connu -> For
 * 
 */

// Boucle For
console.log("Boucle For");
for (var nombreTours = 1; nombreTours <= 10; nombreTours++) {
    console.log("C'est le tour numéro " + nombreTours);
}

// Boucle While
console.log("\nBoucle While");
var nombreTours = 1;
while (nombreTours <= 10) {
    console.log("C'est le tour numéro " + nombreTours);
    nombreTours++;
}


// Si on demande le nombre de tour à l'internaute
console.log("\nBoucle For avec prompt");
var nombreTours = Number(prompt("Combien de tours veux tu faire ?"));
for (var compteurTour = 1; compteurTour <= nombreTours; compteurTour++) {
    console.log("C'est le tour numéro " + compteurTour);
}