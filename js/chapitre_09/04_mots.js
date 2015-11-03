/* 
 * Code Javascript chapitre 09 exercice 04 - Mots
 *
 */
var motsSaisis = [];
var motSaisi = '';


while (motSaisi!== 'stop') {
    motSaisi = prompt('Saisis un mot ou saisis stop pour arrêter le programme : ');
    motsSaisis.push(motSaisi);
}

motsSaisis.forEach(function(motSaisi) {
    console.log(motSaisi);
});