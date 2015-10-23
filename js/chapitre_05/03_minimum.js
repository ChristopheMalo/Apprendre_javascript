/* 
 * Code Javascript chapitre 05 exercice 02 - Carré d'un nombre
 *
 */
// TODO : écrire la fonction min()
// Renvoie le plus petit des 2 nombres
function min(number1, number2) {
    if (number1 < number2) {
        return number1;
    } else {
        return number2;
    }
}

console.log(min(4.5, 5)); // Doit afficher 4.5
console.log(min(19, 9)); // Doit afficher 19
console.log(min(1, 1)); // Doit afficher 1