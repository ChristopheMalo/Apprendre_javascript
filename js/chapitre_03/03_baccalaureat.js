/* 
 * Code Javascript chapitre 03 exercice 03 - Baccalaureat
 *
 */
var moyenneBac = Number(prompt('Saisis ta moyenne obtenue au baccalauréat :'));

if (moyenneBac < 10) {
    
    console.log('Ta moyenne est ' + moyenneBac + '. Tu es recalé');
    
} else if (moyenneBac < 12) { // moyenne >= 10 et moyenne < 12
    
    console.log('Ta moyenne est ' + moyenneBac + '. Tu es reçu.');
    
} else { // moyenne >= 12
    
    console.log('Ta moyenne est ' + moyenneBac + '. Tu es reçu avec mention.');
    
}