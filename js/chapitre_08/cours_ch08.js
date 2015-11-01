/* 
 * Code Javascript - Cours - Chapitre 8
 */
var myObject = {
    propriete1: 'Test création objet par prototypage'
};

// Création d'un objet basé sur myObjet - Prototype
var otherMyObject = Object.create(myObject);

console.log(otherMyObject.propriete1); // Affiche 2 'Test création objet par prototypage'

var newOneOtherMyObject = Object.create(otherMyObject);

console.log(newOneOtherMyObject.propriete1); // Affiche 'Test création objet par prototypage'
console.log(newOneOtherMyObject.propriete2); // Affiche undefined