/* 
 * Code Javascript chapitre 08 exercice 01 - Jeu de rôle
 *
 */


/*
 * Partie 1
 * 
 *
 */
// Création de l'objet personnage - Définition de l'objet - Méthode 1
var Personnage = {
    // Propriétés
    nom: '',
    sante: 0,
    force: 0,
    xp: 0,
    
    // Méthodes
    // Description du personnage
    decrirePersonnage: function () {
        var description = this.nom + ' a ' + this.sante + ' points de vie, ' + this.force + ' en force et ' + this.xp + ' points d\'expérience.';
        return description;
    }
};

// Méthode de création 1
console.log('Méthode 1');

var personnage1 = Object.create(Personnage);
personnage1.nom =      'Aurora';
personnage1.sante =    150;
personnage1.force =    25;

var personnage2 = Object.create(Personnage);
personnage2.nom =       'Glacius';
personnage2.sante =     130;
personnage2.force =     35;

console.log(personnage1.decrirePersonnage());
console.log(personnage2.decrirePersonnage());



/*
 * Partie 2
 *
 *
 */
// Création de l'objet personnage - Méthode 2
var Personnage2 = {
    // Méthode d'initialisation du personnage
    init: function (nom, sante, force, xp) {
        this.nom    = nom;
        this.sante  = sante;
        this.force  = force;
        this.xp     = xp;
    },
    
    // Méthode de description du personnage
    decrirePersonnage: function () {
        var description = this.nom + ' a ' + this.sante + ' points de vie, ' + this.force + ' en force et ' + this.xp + ' points d\'expérience.';
        return description;
    }
};

// Méthode de création 2
console.log('\n Méthode 2');

var personnage3 = Object.create(Personnage2);
personnage3.init("JediLePetit", 170, 30, 20);

var personnage4 = Object.create(Personnage2);
personnage4.init('Padawan', 200, 100, 100);

console.log(personnage3.decrirePersonnage());
console.log(personnage4.decrirePersonnage());



/*
 * Partie 3
 * 
 * 
 */
// Création Personnage - Joueur et adversaire
// personnage générique
var Personnage3 = {
    // Initialisation du personnage
    initPersonnage3: function (nom, sante, force) {
        this.nom =      nom;
        this.sante =    sante;
        this.force =    force;
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
var Joueur = Object.create(Personnage3);

// Initialise un joueur
Joueur.initJoueur = function (nom, sante, force) {
    this.initPersonnage3(nom, sante, force);
    this.xp = 0;
};

// Renvoie la description du joueur
Joueur.decrireJoueur = function () {
    var description = this.nom + ' a ' + this.sante + ' points de vie, ' + this.force + ' en force et ' + this.xp + ' points d\'expérience.';
    return description;
};

// Combat un adversaire
Joueur.combattre = function (adversaire) {
    this.attaquer(adversaire);
    if (adversaire.sante === 0) {
        console.log(this.nom + ' a tué ' + adversaire.nom + ' et gagne ' + adversaire.valeur + ' points d\'expérience');
        this.xp += adversaire.valeur;
    }
};


var Adversaire = Object.create(Personnage3);

// Initialise l'adversaire
Adversaire.initAdversaire = function (nom, sante, force, race, valeur) {
    this.initPersonnage3(nom, sante, force);
    this.race =     race;
    this.valeur =   valeur;
};



// Méthode de création 3
console.log('\n Méthode 3');

var joueur1 = Object.create(Joueur);
joueur1.initJoueur('Morgane la Fée', 150, 25);

var joueur2 = Object.create(Joueur);
joueur2.initJoueur('Dindon le corbeau', 130, 30);

console.log('Le jeu d\'aventure démarre ! Voici les héros :');
console.log(joueur1.decrireJoueur());
console.log(joueur2.decrireJoueur());

var monstre = Object.create(Adversaire);
monstre.initAdversaire('Le monstre vert', 40, 20, 'Dragon', 10);

console.log('Un affreux monstre arrive : c\'est un ' + monstre.race + ' nommé ' + monstre.nom);


// Le combat
monstre.attaquer(joueur1);
monstre.attaquer(joueur2);

joueur1.combattre(monstre);
joueur2.combattre(monstre);

console.log(joueur1.decrireJoueur());
console.log(joueur2.decrireJoueur());