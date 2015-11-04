/* 
 * Code Javascript chapitre 09 exercice 06 - Chenils
 *
 */
var Chien = {
    // initialise le chien
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    // Retourne l'aboiement du chien
    aboyer: function () {
        var aboiement = "Whoua ! Whoua !";
        if (this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = "Grrr ! Grrr !";
        }
        return aboiement;
    },
    
    // Décrire le chien + appel de la function aboyer
    decrire: function () {
        var description = this.nom + ' est un ' + this.race + ' mesurant ' + this.taille + ' cm. Il aboie : ' + this.aboyer();
        return description;
    }
};

// Créer les chiens
var chien1 = Object.create(Chien);
chien1.init('Crokdur', 'mâlin de Naples', 75);
// OU
// var crokdur.init('Crokdur', 'mâlin de Naples', 75);

var chien2 = Object.create(Chien);
chien2.init('Pupuce', 'bichon', 22);

var chien3 = Object.create(Chien);
chien3.init('Médor', 'labrador', 58);

// Créer le tableau + stocker les chiens dans le tableau
var chiens = [chien1, chien2, chien3];
// OU
// var chenil = [];
// chenil.push(crokdur)
// ...

// Afficher le nombre de chien
console.log('Le chenil héberge ' + chiens.length + ' chien(s)');
// OU
// console.log('Le chenil héberge ' + chenil.length + ' chien(s)');

// Afficher la description de tous les chiens
chiens.forEach(function (chien) {
    console.log(chien.decrire());
    // OU
    // Si pas de fonction de description
    // console.log(chien.nom + ' est un ' + chien.race + ' mesurant ' + chien.taille + ' cm. ' + 'Il aboie : ' + chien.aboyer());
});
