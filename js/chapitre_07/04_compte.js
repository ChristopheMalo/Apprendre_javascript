/* 
 * Code Javascript chapitre 07 exercice 04 - Compte
 *
 */
/* Méthode 1 */
montantCredit   = Number(prompt('Saisissez un montant à créditer :'));
montantDebit    = Number(prompt('Saisissez un montant à débiter :'));

var compte = {
    // Propriétés du compte bancaire
    titulaire: 'Alex',
    solde:      0,
    credit:     montantCredit,
    debit:      montantDebit,
    
    // Méthode pour créditer, débiter et décrire le compte
    crediter: function () {
        this.solde = this.solde + this.credit;
        return this.solde;
    },
    debiter: function () {
        this.solde = this.solde - this.debit;
        return this.solde;
    },
    decrire: function () {
        return 'Titulaire : ' + this.titulaire + ', solde : ' + this.solde + ' euros';
    }
};

console.log(compte.decrire());
compte.crediter();
compte.debiter();
console.log(compte.decrire());


/* Méthode 2 */
//var compte = {
//    titulaire: "Alex",
//    solde: 0,
//
//    // Crédite le compte d'un certain montant
//    crediter: function (montantSaisi) {
//        this.solde = this.solde + montantSaisi;
//    },
//    // Débite le compte d'un certain montant
//    debiter: function (montantSaisi) {
//        this.solde = this.solde - montantSaisi;
//    },
//    // Renvoie la description du compte
//    decrire: function () {
//        var description = 'Titulaire : ' + this.titulaire + ', solde : ' + this.solde + ' euros';
//        return description;
//    }
//};
//
//console.log(compte.decrire());
//var montantCredit = Number(prompt('Saisissez un montant à créditer :'));
//compte.crediter(montantCredit);
//var montantDebit = Number(prompt('Saisissez un montant à débiter :'));
//compte.debiter(montantDebit);
//console.log(compte.decrire());