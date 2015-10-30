/* 
 * Code Javascript chapitre 07 exercice 03 - Cercle
 *
 */
// Demander à l'utilisateur de saisir le rayon d'un cercle
var r = Number(prompt('Saisis le rayon d\'un cercle :'));

// Créer l'objet avec 2 méthodes pour calculer le périmètre et l'aires
var cercle = {
    // Propriétés
    rayon: r,
    
    // Méthode pour calculer perimetre et aire
    perimetre: function () {
        return 2 * this.rayon * Math.PI;  
    },
    
    aire: function () {
        return Math.pow(this.rayon, 2) * Math.PI;
        // possiblité 2
        // return this.rayon * this.rayon * Math.PI;
    }
};

console.log('Son périmètre vaut ' + cercle.perimetre());
console.log('Son aire vaut ' + cercle.aire());