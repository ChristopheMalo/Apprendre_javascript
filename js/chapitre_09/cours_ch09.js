/* 
 * Code Javascript - Cours - Chapitre 9
 */
// Création d'un tableau
var films = ['Le loup de Wall street', 'Vice-Versa', 'Babysitting'];

// Taille d'un tableau
console.log('Longueur du tableau films : ' + films.length);


var testTableauVide = [];
console.log('\nLongueur du tableau vide : ' + testTableauVide.length);

// Accéder aux éléments d'un tableau
console.log('\nAccéder aux éléments d\'un tableau : ')
console.log('Élément indice 0 : ' + films[0]);
console.log('Élément indice 1 : ' + films[1]);
console.log('Élément indice 2 : ' + films[2]);
console.log('Élément indice 3 : ' + films[3]);


// Parcourir un tableau
console.log('\nParcourir un tableau avec for - Films :');
for (var i = 0; i < films.length; i++) {
    console.log(films[i]);
}

console.log('\nParcourir un tableau avec forEach - Films :');
films.forEach(function (film) {
   console.log(film); 
});

// Ajouter un élament à un tableau
films.push('Les bronzés font du ski');

console.log('\nÉlément indice 3 : ' + films[3] + '\n\n');


// Tableaux d'objets
// Création d'un objet film - modèle des films
var Film = {
    // Initialisation du film
    init: function (titre, anneeSortie) {
        this.titre          = titre;
        this.anneeSortie    = anneeSortie;
    },
    
    // Retourne la description du film
    decrire: function () {
        var description = this.titre + ' (' + this.anneeSortie + ')';
        return description;
    }
};
 
// Création des objets avec le prototype film
var film1 = Object.create(Film);
film1.init('Le loup de Wall Street', 2013);

var film2 = Object.create(Film);
film2.init('Vice-Versa', 2015);

var film3 = Object.create(Film);
film3.init('Babysitting', 2013);

// Création d'un tableau films contenant tous les objets film
var films = [];
// Ajouter les objets film au tableau
films.push(film1);
films.push(film2);
films.push(film3);

// Afficher la description des films en parcourant le tableau
films.forEach(function (film) {
    console.log(film.decrire());
});