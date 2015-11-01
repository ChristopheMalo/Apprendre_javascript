/* 
 * Code Javascript chapitre 08 exercice 03 - Jeu de rôle - Update
 *
 */
// Création Personnage - Joueur et adversaire
// personnage générique
/* Méthode 1 */
//var Personnage = {
//    // Initialisation du personnage
//    initPersonnage: function (nom, sante, force, pieces, clef) {
//        this.nom    =   nom;
//        this.sante  =   sante;
//        this.force  =   force;
//        this.pieces =   10;
//        this.clef    =   1;
//    },
//    
//    // Méthode d'attaque
//    attaquer: function (cible) {
//        if (this.sante > 0) {
//            var degats = this.force;
//            console.log(this.nom + ' attaque ' + cible.nom + ' et lui fait ' + degats + ' points de dégâts');
//            cible.sante = cible.sante - degats;
//            
//            if (cible.sante > 0) {
//                console.log(cible.nom + ' a encore ' + cible.sante + ' points de vie');
//            } else {
//                cible.sante = 0;
//                console.log(cible.nom + ' est mort !');
//            }
//        } else {
//            console.log(this.nom + ' ne peut pas attaquer : il est mort...');
//        }
//    }
//};
//
//// Création du joueur
//var Joueur = Object.create(Personnage);
//
//// Initialise un joueur
//Joueur.initJoueur = function (nom, sante, force, pieces, clef) {
//    this.initPersonnage(nom, sante, force, pieces, clef);
//    this.xp = 0;
//};
//
//// Renvoie la description du joueur
//Joueur.decrireJoueur = function () {
//    var description = this.nom + ' a ' + this.sante + ' points de vie, ' + this.force + ' en force, ' + this.xp + ' points d\'expérience, ' + this.pieces + ' pièces d\or et ' + this.clef + ' clé(s).';
//    return description;
//};
//
//// Combat un adversaire
//Joueur.combattre = function (adversaire) {
//    this.attaquer(adversaire);
//    if (adversaire.sante === 0) {
//        console.log(this.nom + ' a tué ' + adversaire.nom + ' et gagne ' + adversaire.valeur + ' points d\'expérience, ainsi que ' + adversaire.pieces + ' pièces d\'or et ' + adversaire.clef + ' clé(s)');
//        this.xp += adversaire.valeur;
//        this.pieces += adversaire.pieces;
//        this.clef += adversaire.clef;
//    }
//};
//
//
//var Adversaire = Object.create(Personnage);
//
//// Initialise l'adversaire
//Adversaire.initAdversaire = function (nom, sante, force, race, valeur, pieces, clef) {
//    this.initPersonnage(nom, sante, force, pieces, clef);
//    this.race   =   race;
//    this.valeur =   valeur;
//};
//
//// Création
//var joueur1 = Object.create(Joueur);
//joueur1.initJoueur('Aurora', 150, 25);
//
//var joueur2 = Object.create(Joueur);
//joueur2.initJoueur('Glacius', 130, 30);
//
//console.log('Le jeu d\'aventure démarre ! Voici les héros :');
//console.log(joueur1.decrireJoueur());
//console.log(joueur2.decrireJoueur());
//
//var monstre = Object.create(Adversaire);
//monstre.initAdversaire('ZogZog', 40, 20, 'Orc', 10);
//
//console.log('Un affreux monstre arrive : c\'est un ' + monstre.race + ' nommé ' + monstre.nom);
//
//
//// Le combat
//monstre.attaquer(joueur1);
//monstre.attaquer(joueur2);
//
//joueur1.combattre(monstre);
//joueur2.combattre(monstre);
//
//console.log(joueur1.decrireJoueur());
//console.log(joueur2.decrireJoueur());


/* Méthode 2 */
var Personnage = {
    // Initialisation du personnage
    initPersonnage: function (nom, sante, force) {
        this.nom    =   nom;
        this.sante  =   sante;
        this.force  =   force;
        
        // Inventaire géré sous forme de propriété de type d'objet
        this.inventaire = {
            or:     10,
            clef:   1
        };
    },
    
    // Méthode d'attaque
    attaquer: function (cible) {
        if (this.sante > 0) {
            var degats = this.force;
            console.log(this.nom + ' attaque ' + cible.nom + ' et lui fait ' + degats + ' points de dégâts');
            cible.sante = cible.sante - degats;
            
            if (cible.sante > 0) {
                console.log(cible.nom + ' a encore ' + cible.sante + ' points de vie');
            } else {
                cible.sante = 0;
                console.log(cible.nom + ' est mort !');
            }
        } else {
            console.log(this.nom + ' ne peut pas attaquer : il est mort...');
        }
    }
};

// Création du joueur
var Joueur = Object.create(Personnage);

// Initialise un joueur
Joueur.initJoueur = function (nom, sante, force) {
    this.initPersonnage(nom, sante, force);
    this.xp = 0;
};

// Renvoie la description du joueur
Joueur.decrireJoueur = function () {
    var description = this.nom + ' a ' + this.sante + ' points de vie, ' + this.force + ' en force, ' + this.xp + ' points d\'expérience, ' + this.inventaire.or + ' pièces d\or et ' + this.inventaire.clef + ' clé(s).';
    return description;
};

// Combat un adversaire
Joueur.combattre = function (adversaire) {
    this.attaquer(adversaire);
    if (adversaire.sante === 0) {
        console.log(this.nom + ' a tué ' + adversaire.nom + ' et gagne ' + adversaire.valeur + ' points d\'expérience, ainsi que ' + adversaire.inventaire.or + ' pièces d\'or et ' + adversaire.inventaire.clef + ' clé(s)');
        this.xp += adversaire.valeur;
        this.inventaire.or      += adversaire.inventaire.or;
        this.inventaire.clef    += adversaire.inventaire.clef;
    }
};


var Adversaire = Object.create(Personnage);

// Initialise l'adversaire
Adversaire.initAdversaire = function (nom, sante, force, race, valeur) {
    this.initPersonnage(nom, sante, force);
    this.race   =   race;
    this.valeur =   valeur;
};

// Création
var joueur1 = Object.create(Joueur);
joueur1.initJoueur('Aurora', 150, 25);

var joueur2 = Object.create(Joueur);
joueur2.initJoueur('Glacius', 130, 30);

console.log('Le jeu d\'aventure démarre ! Voici les héros :');
console.log(joueur1.decrireJoueur());
console.log(joueur2.decrireJoueur());

var monstre = Object.create(Adversaire);
monstre.initAdversaire('ZogZog', 40, 20, 'Orc', 10);

console.log('Un affreux monstre arrive : c\'est un ' + monstre.race + ' nommé ' + monstre.nom);


// Le combat
monstre.attaquer(joueur1);
monstre.attaquer(joueur2);

joueur1.combattre(monstre);
joueur2.combattre(monstre);

console.log(joueur1.decrireJoueur());
console.log(joueur2.decrireJoueur());