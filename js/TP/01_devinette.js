/* 
 * Code Javascript TP partie 1 - Créer un mini-jeu de devinette
 *
 */

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");



// TODO : complétez le programme

/* Initialisation des variables pour lancer la boucle */
var nombreSaisi     = 0,
    compteurEssai   = 0,
    compteurMax     = 6;

console.log('Vous devez trouver un nombre compris entre 1 et 100 (en 6 essais maximum).');

while ((nombreSaisi !== solution) && (compteurEssai < compteurMax)) { // Tant que la solution n'est pas trouvée et essai(s) inférieur ou égal à compteurMax
    
    nombreSaisi = Number(prompt('Saisissez un nombre entre 1 et 100')); // Demander un nombre à l'utilisateur
    compteurEssai++; // Incrémenter le compteur d'essai - même en cas d'erreur de saisie
    
    if ((nombreSaisi < 1) || (nombreSaisi > 100) || isNaN(nombreSaisi)) { // Vérifier si nombreSaisi correcte (Intervalle 1 à 100, gestion bouton annuler === 0 et pas de caractères)
        
        console.log('Vous devez saisir un nombre entre 1 et 100');
    
    } else if (nombreSaisi > solution) { // Le nombre saisi est supérieur à la solution

            console.log(nombreSaisi + ' est trop grand.');

    } else if (nombreSaisi < solution) { // Le nombre saisi est inférieur à la solution

        console.log(nombreSaisi + ' est trop petit.');
    }
}


if (nombreSaisi === solution) { // nombreSaisi === solution - Bonne réponse
    
    console.log('Bravo ! La solution était ' + solution + '.');
    console.log('Vous avez trouvé en ' + compteurEssai + ' essai(s).');

} else { // 6 coups utilisés + mauvaise réponse
    
    console.log('Désolé, vous avez perdu. Vous avez utilisé vos ' + compteurEssai + ' essais.');
    console.log('La solution était ' + solution + '.');

}