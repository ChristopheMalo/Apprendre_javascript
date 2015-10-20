/* 
 * Code Javascript chapitre 03 exercice 01 - Jour suivant
 *
 */
// Méthode switch
var jourSaisi = prompt('Saisis le jour courant en minuscule :');
switch (jourSaisi) {
    case 'lundi':
        console.log('Demain, nous serons mardi');
        break;
    case 'mardi':
        console.log('Demain, nous serons mercredi');
        break;
    case 'mercredi':
        console.log('Demain, nous serons jeudi');
        break;
    case 'jeudi':
        console.log('Demain, nous serons vendredi');
        break;
    case 'vendredi':
        console.log('Demain, nous serons samedi');
        break;
    case 'samedi':
        console.log('Demain, nous serons dimanche');
        break;
    case 'dimanche':
        console.log('Demain, nous serons lundi');
        break;
    default:
        console.log('Le jour n\'est pas reconnu.');
}

// Méthode if
var jourSaisi = prompt('Saisis le jour courant en minuscule :');

// Solution avec un if
if ((jourSaisi === 'lundi') || (jourSaisi === 'Lundi')) {
    console.log('Demain, nous serons mardi');
} else if ((jourSaisi === 'mardi')  || (jourSaisi === 'Mardi')) {
    console.log('Demain, nous serons mercredi');
} else if ((jourSaisi === 'mercredi')  || (jourSaisi === 'Mercredi')) {
    console.log('Demain, nous serons jeudi');
} else if ((jourSaisi === 'jeudi')  || (jourSaisi === 'Jeudi')) {
    console.log('Demain, nous serons vendredi');
} else if ((jourSaisi === 'vendredi')  || (jourSaisi === 'Vendredi')) {
    console.log('Demain, nous serons samedi');
} else if ((jourSaisi === 'samedi')  || (jourSaisi === 'Samedi')) {
    console.log("Demain, nous serons dimanche");
} else if ((jourSaisi === 'dimanche')  || (jourSaisi === 'Dimanche')) {
    console.log('Demain, nous serons lundi');
} else {
    console.log('Le jour n\'est pas reconnu.');
}