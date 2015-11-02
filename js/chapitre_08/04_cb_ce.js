/* 
 * Code Javascript chapitre 08 exercice 04 - Compte bancaire / Compte épargne
 *
 */
// TODO : ajoutez ici la définition des objets nécessaires
var CompteBancaire = {
    // Intialisation du compte bancaire
    initCB: function (titulaire, solde) {
        this.titulaire  = titulaire;
        this.solde      = solde;
    },
    
    // Description du compte
    decrire: function () {
        var description = 'Titulaire : ' + this.titulaire + ', solde : ' + this.solde + ' euros';
        return description;
    },
    
    // Débite le compte
    debiter: function (montant) {
        this.solde -= montant;
        // OU
        // this.solde = this.solde - montant;
    },
    
    // Crédite le compte
    crediter: function (montant) {
        this.solde += montant;
        // OU
        // this.solde = this.solde + montant;
    }
};



var CompteEpargne = Object.create(CompteBancaire);

// Initialisation du compte épargne
CompteEpargne.initCE = function (titulaire, solde, tauxInteret) {
    this.initCB (titulaire, solde);
    this.tauxInteret = tauxInteret;
};

// Calcule et ajout des interêts
CompteEpargne.ajouterInterets = function () {
    montantInterets = this.solde * this.tauxInteret;
    this.solde += montantInterets;
};


// Création des comptes
var compte1 = Object.create(CompteBancaire);
compte1.initCB("Alex", 100);
var compte2 = Object.create(CompteEpargne);
compte2.initCE("Marco", 50, 0.05);

console.log("Voici l'état initial des comptes :");
console.log(compte1.decrire());
console.log(compte2.decrire());

// Opérations
var montant = Number(prompt("Entrez le montant à transférer entre les comptes :"));
compte1.debiter(montant);
compte2.crediter(montant);

// Calcule et ajoute les intérêts au solde du compte
compte2.ajouterInterets();

console.log("Voici l'état final des comptes après transfert et calcul des intérêts :");
console.log(compte1.decrire());
console.log(compte2.decrire());