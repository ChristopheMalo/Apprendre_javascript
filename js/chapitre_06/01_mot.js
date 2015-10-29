/* 
 * Code Javascript chapitre 06 exercice 01 - Mot
 *
 */
var motSaisi = prompt('Saisis un mot : ');

var longueurMot = motSaisi.length; // Longueur de la chaîne
console.log('Le mot ' + motSaisi + ' contient ' + longueurMot + ' caractère(s).');

var minMot = motSaisi.toLowerCase(); // Méthode mot en minuscule
console.log('Il s\'écrit en minuscule ' + minMot);

var majMot = motSaisi.toUpperCase(); // Méthode mot en majuscule
console.log('Il s\'écrit en majuscule ' + majMot);

/* compter les voyelles - retourner le nombre de voyelles et de consonnes */
function compterNbVoyelles(chaine) {
    var compteurVoyelles = 0;
    // var longueurMot = chaine.length; // à décommenter si la longueur n'est pas calculée dans l'exercice
    // chaine = chaine.toLowerCase(); // Passer le mot en minuscule si pas utiliser dans l'exercice
    for (var i = 0; i < longueurMot; i++) { // Ici j'utilise le calcul précédent en début d'exercice
        switch (chaine[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            case 'y':
                compteurVoyelles++;
                break;      
        }
    }
    return compteurVoyelles;
}

var voyelles = compterNbVoyelles(minMot); // Utilisation du mot en mininuscule
var consonnes = longueurMot - voyelles; // Calculer le nombre de consonnes
console.log('Il contient ' + voyelles + ' voyelle(s) et ' + consonnes + ' consonnes(s).');


/* Inversion du mot - Lecture du mot à l'envers */
function inverser(chaine) {
    var chaineInverse = '';
    for (var i =  (longueurMot -1); i >= 0 ; i--) {
        chaineInverse += chaine.charAt(i);
    }
    return chaineInverse;
}

var motInverse = inverser(motSaisi);
console.log('Il s\'écrit à l\'envers ' + motInverse);


/* Vérifier si le mot est un palindrome */
var motInverseMinMot = motInverse.toLowerCase(); // Transformer le mot saisi en minuscule

if (motInverseMinMot === minMot) { // Comparer le mot inverser en minuscule et le mot saisi en minuscule
    console.log('C\'est un palindrome.');
} else {
    console.log('Ce n\'est pas un palindrome.');
}


/* Convertir un mot en en leet speak */
function trouverLettreLeet(lettre) {
    switch(lettre.toLowerCase()) {
        case 'a':
            return 4;
            break;
        case 'b':
            return 8;
            break;
        case 'e':
            return 3;
            break;
        case 'l':
            return 1;
            break;
        case 'o':
            return 0;
            break;
        case 's':
            return 5;
            break;
        default:
            return lettre;
            break;
    }
}

/* Tester la fonction trouverLettreLeet() */
console.log('La lettre a en leet ' + trouverLettreLeet('a'));
console.log('La lettre a en leet ' + trouverLettreLeet('A'));
console.log('La lettre o en leet ' + trouverLettreLeet('o'));


function convertirEnLeetSpeak(motSaisi) {
    var chaineLeet = '';
    for (var i = 0; i < longueurMot; i++) {
        var lettre = motSaisi[i];
        //console.log(lettre);
        var lettreLeet = trouverLettreLeet(lettre);
        //console.log (lettreLeet);
        chaineLeet += lettreLeet; 
    }
    return chaineLeet;
}

var motLeet = convertirEnLeetSpeak(motSaisi);
console.log('Le mot en leet speak : ' + motLeet);