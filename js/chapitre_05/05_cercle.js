/* 
 * Code Javascript chapitre 05 exercice 05 - Cercle
 *
 */
// TODO : écrire les fonctions perimetre() et aire() selon rayon saisi par utilisateur
function perimetre(rayon) {
    return perimetre = 2 * Math.PI * rayon;
    // Simplifier -> return 2 * rayon * Math.PI;
}

function aire(rayon) {
    return aire = (Math.PI * (rayon * rayon)) ;
    // Simplifier -> return Math.pow(rayon, 2) * Math.PI;
}

var rayon = Number(prompt('Pour calculer le périmètre et l\'aire d\'un cercle, saisis son rayon (en cm) : '));
console.log('Le périmètre du cercle d\'un rayon ' + rayon + ' cm est : ' + perimetre(rayon) + '.');
console.log('Son aire est : ' + aire(rayon) + '.');