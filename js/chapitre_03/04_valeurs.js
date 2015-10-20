/* 
 * Code Javascript chapitre 03 exercice 04 - Valeurs
 *
 */
var nb1 = Number(prompt("Entrez nb1 :"));
var nb2 = Number(prompt("Entrez nb2 :"));
var nb3 = Number(prompt("Entrez nb3 :"));

if (nb1 > nb2) {
    nb1 = nb3 * 2;
} else {
    nb1++;
    if (nb2 > nb3) {
        nb1 = nb1 + nb3 * 3;
    } else {
        nb1 = 0;
        nb3 = nb3 * 2 + nb2;
    }
}
console.log('nb1 = ' + nb1);
console.log('nb2 = ' + nb2);
console.log('nb3 = ' + nb3);

/* Exercice 1 */
// nb1=nb2=nb3=4
// Valeur finale nb1 = 0
// Valeur finale nb2 = 4
// Valeur finale nb3 = 12

/* Exrcice 2 */
//nb1=4, nb2=3, nb3=2
// Valeur finale nb1 = 4
// Valeur finale nb2 = 3
// Valeur finale nb3 = 2

/* Exercice 3 */
// nb1=2, nb2=4, nb3=0
// Valeur finale nb1 = 3
// Valeur finale nb2 = 4
// Valeur finale nb3 = 0