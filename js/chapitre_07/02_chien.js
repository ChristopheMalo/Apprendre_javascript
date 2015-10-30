/* 
 * Code Javascript chapitre 07 exercice 02 - Chien
 *
 */
var chien = {
    // Propriétés
    nom:    'Crokdur',
    race:   'mâlin de Naples',
    taille: 75,
    
    // Méthode
    // Optionnelle dans cet exercice
    decrireChien: function() {
      var description = this.nom + ' est un ' + this.race + ' mesurant ' + this.taille + ' cm.';   
        return description;
    },
    
    aboyer: function() {
        var aboyer = 'Grrr ! Grrr!';
        return aboyer;
        // Simplifier
        // return 'Grrr ! Grrr !';
    }
};

console.log(chien.nom + ' est un ' + chien.race + ' mesurant ' + chien.taille + ' cm.');
console.log(chien.decrireChien());
console.log('Tiens, un chat ! ' + chien.nom + ' aboie : ' + chien.aboyer());