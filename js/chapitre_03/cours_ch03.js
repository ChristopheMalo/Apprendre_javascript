/* 
 * Code Javascript - Cours - Chapitre 03
 */
/* Conditions */
//var nombreSaisi = Number(prompt('Saisis un nombre :'));
//if (nombreSaisi > 0) {
//    console.log(nombreSaisi + ' est un nombre positif.');
//}

//var nombreSaisi = Number(prompt('Saisis un nombre :'));
//if (nombreSaisi >= 0) {
//    console.log(nombreSaisi + ' est positif ou nul.');
//}

//var nombreSaisi = Number(prompt('Saisis un nombre :'));
//if (nombreSaisi > 0) {
//    console.log(nombreSaisi + ' est un nombre positif.');
//} else {
//    console.log(nombreSaisi + ' est négatif ou nul');
//}


/* Methode 1 */
//var nombreSaisi = Number(prompt('Saisis un nombre :'));
//if (nombreSaisi > 0) {
//    console.log(nombreSaisi + ' est un nombre positif.');
//} else { // nombre <= 0
//    if (nombreSaisi < 0) { // nombre < 0
//        console.log(nombreSaisi + ' est négatif');
//    } else { // nombre === 0
//        console.log(nombreSaisi + ' est nul');
//    }
//}

/* Méthode 2 */
//var nombreSaisi = Number(prompt('Saisis un nombre :'));
//if (nombreSaisi > 0) {
//    
//    console.log(nombreSaisi + ' est un nombre positif.');
//    
//} else if (nombreSaisi < 0) {
//    
//    console.log(nombreSaisi + ' est négatif');
//    
//} else {
//    
//    console.log(nombreSaisi + ' est nul');
//    
//}


/* Conditions composées */
/* Opérateur logique ET (&&) */
//var nombreSaisi = Number(prompt('Saisis un nombre :'));
//if ((nombreSaisi >= 0) && (nombreSaisi <= 100)) {
//    console.log(nombreSaisi + ' est compris entre 0 et 100');
//}

/* Table de vérité de l'opérateur && */
//console.log(true && true); // Affiche true
//console.log(true && false); // Affiche false
//console.log(false && true); // Affiche false
//console.log(false && false); // Affiche false

/* Opérateur logique ou (||) */
//var nombreSaisi = Number(prompt('Saisis un nombre :'));
//if ((nombreSaisi < 0) || (nombreSaisi > 100)) {
//    console.log(nombreSaisi + ' n\'est pas compris entre 0 et 100');
//}

/* Table de vérité de l'opérateur || */
//console.log(true || true); // Affiche true
//console.log(true || false); // Affiche true
//console.log(false || true); // Affiche true
//console.log(false || false); // Affiche false

/* Opérateur logique ou (||) */
//var nombreSaisi = Number(prompt('Saisis un nombre :'));
//if (!(nombreSaisi > 100)) {
//    console.log(nombreSaisi + ' est inférieur ou égal à 100');
//}

/* Table de vérité de l'opérateur || */
//console.log(!true); // Affiche false
//console.log(!false); // Affiche true

/* CHoix */
var meteo = prompt("Quel temps fait-il dehors ?");
if (meteo === "soleil") {
    console.log("Sortez en t-shirt.");
} else if (meteo === "vent") {
    console.log("Sortez en pull.");
} else if (meteo === "pluie") {
    console.log("Sortez en blouson.");
} else if (meteo === "neige") {
    console.log("Restez au chaud à la maison.");
} else {
    console.log("Je n'ai pas compris !");
}


var meteo = prompt("Quel temps fait-il dehors ?");
switch (meteo) {
case "soleil":
    console.log("Sortez en t-shirt.");
    break;
case "vent":
    console.log("Sortez en pull.");
    break;
case "pluie":
    console.log("Sortez en blouson.");
    break;
case "neige":
    console.log("Restez au chaud à la maison.");
    break;
default:
    console.log("Je n'ai pas compris !");
}