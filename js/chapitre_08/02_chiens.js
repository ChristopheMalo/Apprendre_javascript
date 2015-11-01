/* 
 * Code Javascript chapitre 07 exercice 02 - Chiens
 *
 */
// TODO : ajoutez ici la définition de l'objet Chien
var Chien = {
    init: function (nom, race, taille) {
        // Initialisation du chien
        this.nom =      nom;
        this.race =     race;
        this. taille =  taille;
    },
    
    // Retorune l'aboiement du chien
    aboyer: function () {
        // Basé sur la race
        switch (this.race) {
            case 'mâlin de Naples':
                return 'Grrr ! Grrr !';
                break;
            case 'bichon':
                return 'Kaii ! Kaii !';
                break;
        }
        
        // Autre possibilité - Basée sur la taille
//        var aboiement = "Whoua ! Whoua !";
//        if (this.taille < 25) {
//            aboiement = "Kaii ! Kaii !";
//        } else if (this.taille > 60) {
//            aboiement = "Grrr ! Grrr !";
//        }
//        return aboiement;
    }
};
    
var crokdur = Object.create(Chien);
crokdur.init('Crokdur', 'mâtin de Naples', 75);
console.log(crokdur.nom + ' est un ' + crokdur.race + ' mesurant ' + crokdur.taille + ' cm');
console.log("Tiens, un chat ! " + crokdur.nom + " aboie : " + crokdur.aboyer());

var pupuce = Object.create(Chien);
pupuce.init('Pupuce', 'bichon', 22);
console.log(pupuce.nom + ' est un ' + pupuce.race + ' mesurant ' + pupuce.taille + ' cm');
console.log('Tiens, un chat ! ' + pupuce.nom + ' aboie : ' + pupuce.aboyer());