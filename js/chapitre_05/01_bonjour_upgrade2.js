/* 
 * Code Javascript chapitre 05 exercice 01 - Bonjour amélioré
 *
 */
/* Interaction avec l'utilisateur - Affichage par fonction */
// Renvoie un message de bienvenue
function direBonjour(prenom, nom) {
    var message = "Bonjour, " + prenom + " " + nom + " !";
    return message;
}

// TODO : faire saisir le prénom et le nom de l'utilisateur
var firstname   = prompt('Saisis ton prénom : ');
var lastname    = prompt('Saisis ton nom : ');

// TODO : appeler direBonjour() avec les bons arguments et afficher son résultat
console.log(direBonjour(firstname, lastname));