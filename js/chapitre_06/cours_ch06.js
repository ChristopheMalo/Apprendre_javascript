/* 
 * Code Javascript - Cours - Chapitre 06
 */
/* Manipulez les chaînes de caractères */
// Obtenir la longueur d'une chaîne - propriété length
console.log('Longueur d\'une chaîne - Length')
console.log('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.length);   // Affiche 26
console.log('Je suis ton père'.length);             // Affiche 16

var word = 'Ordinateur';
var calculLongueur = word.length;
console.log(calculLongueur);                        // Affiche 10


/* Conversion min / maj - méthode toLowercase() et toUppercase() */
console.log('\nConversion min / maj');
var originWord  = 'PapaMaman';

var minWord     = originWord.toLowerCase();
console.log(minWord);                               // affiche papamaman

var majWord     = originWord.toUpperCase();
console.log(majWord);                               // affiche PAPAMAMAN


/* Comparaison de 2 chaînes */
console.log('\nComparaison de 2 chaînes');
var word = 'Test du mot';
console.log(word === 'Test simple');
console.log(word === 'Test du mot');


/* Accéder à un caractère d'une chaîne */