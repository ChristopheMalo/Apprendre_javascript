/* 
 * Code Javascript chapitre 09 exercice 05 - Films
 *
 */
// Créer un objet film
var Film = {
    // Initialisation de l'objet film
    init: function (titre, anneeSortie, realisateur) {
        this.titre          = titre;
        this.anneeSortie    = anneeSortie;
        this.realisateur    = realisateur;
    },
    
    // Retourne la description du film
    decrire: function () {
        var description = this.titre + ' (' + this.anneeSortie + ', ' + this.realisateur + ')';
        return description;
    }
};

// Création des objets films
var film1 = Object.create(Film);
film1.init('Le loup de Wall Street', 2013, 'Martin Scorcese');

var film2 = Object.create(Film);
film2.init('Vice-Versa', 2015, 'Pete Docter');

var film3 = Object.create(Film);
film3.init('Babysitting', 2013, 'Philippe Lacheau et Nicolas Benamou');


var films = [];
films.push(film1);
films.push(film2);
films.push(film3);

// OU
// var films = [film1, film2, film3];

films.forEach(function (film) {
    console.log(film.decrire());
});