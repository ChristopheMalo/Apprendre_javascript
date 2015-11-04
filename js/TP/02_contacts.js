/* 
 * Code Javascript TP partie 2 - Créer un gestionnaire des contacts
 *
 */
// Création de l'objet Contact
var Contact = {
    // Initilisation du contact
    initContact: function (nom, prenom) {
        this.nom    = nom;
        this.prenom = prenom;
    },
    
    // Description du contact
    decrireContact: function () {
        var description = 'Nom : ' + this.nom + ', prénom : ' + this.prenom;
        return description;
    }
};

// Initialisation au lancement du programme
// Création des contacts par prototypage
var contact1 = Object.create(Contact);
contact1.initContact('Lévisse', 'Carole');

var contact2 = Object.create(Contact);
contact2.initContact('Nelsonne', 'Mélodie');

// Création du tableau contacts pour stocker les contacts
// Avec ajout direct des contacts
var contacts = [contact1, contact2];



console.log('Bienvenue dans le gestionnaire des contacts');

// Faire un choix - initialisation de la variable pour lancer la boucle
// ici 3 car 0, 1 et 2 sont réservés pour le programme
var choixOption = 3;

while (choixOption !== 0) { // Tant que l'utilisateur ne quitte pas avec 0 ou le bouton annuler, le programme boucle sur la question des choix
    
    // Proposition des choix
    console.log('1 : Lister les contacts');
    console.log('2 : Ajouter un contact');
    console.log('0 : Quitter');
    
    // Demander le choix de l'utilisateur
    choixOption = Number(prompt('Choisissez une option'));
    
    // Condition switch pour gérer les choix - Clarté du code
    switch (choixOption) {
        
        // Lister les contacts - Choix 1
        case 1:
            console.log('\nVoici la liste de tous vos contacts :');
            
            contacts.forEach(function (contact) {
                console.log(contact.decrireContact());
            });
            
            console.log('\n'); // Placer un espace après la liste pour la lisibilité
            break;
        
        
        // Ajouter un contact - Choix 2
        case 2:
            // Initialiser les variables pour lancer les boucles while
            var nom     = '';
            var prenom  = '';
            
            while ((!nom) || (nom.trim() === '')) { // Gérer la chaine vide ou le bouton annuler
                nom = prompt('Entrez le nom du nouveau contact :');
            }
            
            // Si un nom est saisi, alors saisie du prénom
            while ((!prenom) || (prenom.trim() === '')) {
                prenom  = prompt('Entrez le prénom du nouveau contact :');
            }
            
            var contact = Object.create(Contact);           // Création du contact par prototypage
            contact.initContact(nom, prenom);               // Initialisation du contact avec les valeurs saisies
            
            contacts.push(contact);                         // Ajout du contact au tableau contacts
            
            // Vérifier si le contact est bien ajouté au tableau
            
            console.log('\nLe nouveau contact a été ajouté.\n\n');
            break;
            
        // Attention rappel : le default est optionnel
    }
}

console.log('\nAu revoir');