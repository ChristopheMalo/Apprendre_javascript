/* 
 * Code Javascript chapitre 07 exercice 01 - Jeu de rôle
 *
 */
// Création de l'objet personnage - Définition de l'objet
var personnage = {
    nom: 'Christophe',
    sante: 200,
    force: 40,
    xp: 0,
    
    decrire: function() {
        var description = this.nom + ' a ' + this.sante + ' points de vie, ' + this.force + ' en force et ' + this.xp + ' points d\'expérience.';
        return description;
    }
};

// Visualiser le personnage
console.log(personnage.decrire());
// Personnage bléssé
personnage.sante -= 20;

// Personnage trouve une arme
personnage.force += 10; // Raccourci de personnage.force = personnage.force + 10

// Personnage prend de l'expérience
personnage.xp += 15;

// Controler le personnage
console.log(personnage.decrire());