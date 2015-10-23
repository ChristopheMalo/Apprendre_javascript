/* 
 * Code Javascript chapitre 05 exercice 04 - Calculatrice
 *
 */
// TODO : écrire la fonction calculer()
function calculer(nombre01, signe, nombre02) {
    var resultat;
    switch (signe) {
        case '+':
            resultat = nombre01 + nombre02;
            break;
        case '-':
            resultat = nombre01 - nombre02;
            break;
        case '*':
            resultat = nombre01 * nombre02;
            break;
        case '/':
            resultat = nombre01 / nombre02;
            break;
        default: // Le default est optionnel
            resultat = 'Le signe ' + signe + ' n\'est pas pris en compte';
    }
    
    return resultat;
}

console.log(calculer(4, "+", 6)); // Doit afficher 10
console.log(calculer(4, "-", 6)); // Doit afficher -2
console.log(calculer(2, "*", 0)); // Doit afficher 0
console.log(calculer(12, "/", 0)); // Doit afficher Infinity

console.log(calculer(12, "%", 0)); // Test complémentaire pour default - affiche le message