/* 
 * Code Javascript - Cours - Chapitre 7
 */
// Création  d'un objet
var stylo = {
    type:       'bille',
    couleur:    'bleu',
    marque:     'Bic'
};

console.log('Type de l\'objet : ' + stylo.type);        // Affiche bille
console.log('Couleur de l\'objet : ' + stylo.couleur);  // Affiche bleu
console.log('Marque de l\'objet : ' + stylo.marque);    // Affiche Bic

// OU

console.log(stylo['type']);     // Affiche bille
console.log(stylo['couleur']);  // Affiche bleu
console.log(stylo['marque']);   // Affiche Bic

console.log('Mon stylo à ' + stylo.type + ' ' + stylo.marque + ' écrit en ' + stylo.couleur);

// Modifier les valeurs
stylo.couleur = 'rouge';
// Vérifier la nouvelle valeur
console.log('Mon stylo à ' + stylo.type + ' ' + stylo.marque + ' écrit en ' + stylo.couleur);

// ajouter dynamiquement une propriété
stylo.prix = 2.5;
console.log(stylo); // Vérifier la présence de la propriété


/* Créer un personnage - Jeu de rôle */
var personnage = {
    nom:    'Aurora',
    sante:  150,
    force:  25
};

console.log(personnage.nom + ' a ' + personnage.sante + ' points de vie et ' + personnage.force + ' en force.');

// Dérouleùment du jeu
// Le personnage est blessé
personnage.sante = personnage.sante - 20;

// Le personnage trouve une arme de défense - bracelet de force
personnage.force = personnage.force + 10;

console.log('Après quelques péripéties, ' + personnage.nom + ' a ' + personnage.sante + ' points de vie et ' + personnage.force + ' en force.');


// seconde étape - Création d'une méthode
var personnageTest2 = {
    nom:    'MagicGuy',
    sante:  190,
    force:  45,
    
    // Créer une nouvelle propriété qui appelle une fonction : une méthode
    decrirePersonnage: function() {
        var description = this.nom + ' a ' + this.sante + ' points de vie et ' + this.force + ' en force.';
        return description;
    }
};

console.log(personnageTest2.decrirePersonnage());

// Blessure
personnageTest2.sante = personnageTest2.sante - 20;

// Gain force
personnageTest2.force = personnageTest2.force + 10;
console.log('Après quelques péripéties, ' + personnageTest2.decrirePersonnage());

// Création d'un objet sans propriétés
var personnageTest3 = {};

// Création des propriétés
personnageTest3.nom =   'ChiefJedi';
personnageTest3.sante = 230;
personnageTest3.force = 55;
personnageTest3.decrirePersonnage = function () {
    var description = this.nom + ' a ' + this.sante + ' points de vie et ' + this.force + ' en force.';
    return description;
};

console.log(personnageTest3);
console.log(personnageTest3.decrirePersonnage());