/* 
 * Code Javascript chapitre 02 exercice 05 - Calculer la TVA
 *
 */

var prixHT = Number(prompt('Saisis un prix HT ')); //
var prixTTC = prixHT * 1.2; // TVA à 20%

console.log('Pour un prix HT de ' + prixHT + ' euros, le prix TTC est de ' + prixTTC + ' euros.');
console.log('LA TVA est à 20% dans cet exercice.');

/* Améliorations pour la la TVA en variable */
var TVA = 20 / 100;
var prixTTC = prixHT * (1 + TVA);
console.log('TVA avec variable - Prix TTC : ' + prixTTC + ' euros.');