/* 
 * Code Javascript chapitre 03 exercice 06 - Heure suivante
 *
 */
/* Methode 1 */
var heures      = Number(prompt('Saisis les heures :'));
var minutes     = Number(prompt('Saisis les minutes :'));
var secondes    = Number(prompt('Saisis les secondes :'));

// Si heure correcte
if (((heures >= 0) && (heures <= 23)) && ((minutes >= 0) && (minutes <= 59)) && ((secondes >= 0) && (secondes <= 59))) {
    
    if (secondes === 59) {
        secondes = 0; // Passer secondes à 0 si secondes === 59
        
            if (minutes === 59) {
                minutes = 0; // Passer les minutes à 0
                
                if (heures === 23) {
                    heures = 0; // Passer heure à 0 si 23h59mn59s
                    
                } else {
                    heures++; // Si heure ex 4h59mn59s alors incrémenter de 1 l'heure soit 5h0mn0s
                }
                
            } else {
                minutes++; // Si secondes passer ) 0, incrémenter minutes
            }
            
    } else { // si secondes différentes de 59
        secondes++; // incrémenter de 1 les secondes
        
    }
    
    console.log('Dans une seconde, il sera ' + heures + ' heures, ' + minutes + ' minutes et ' + secondes + ' secondes');
      
} else { // si heure incorrecte
    
    console.log('Heure incorrecte !');

}


/* Methode 2 */
var heures      = Number(prompt('Saisis les heures :'));
var minutes     = Number(prompt('Saisis les minutes :'));
var secondes    = Number(prompt('Saisis les secondes :'));

// Si heure correcte
if (((heures >= 0) && (heures <= 23)) && ((minutes >= 0) && (minutes <= 59)) && ((secondes >= 0) && (secondes <= 59))) {
    secondes++; // incrémenter de 1 les secondes
    
    if (secondes === 60) {
        secondes = 0; // Passer secondes à 0
        minutes++; // Passer à la minute suivante
        
            if (minutes === 60) {
                minutes = 0; // Passer les minutes à 0
                heures++; // Passer à l'heure suivante
                
                if (heures === 24) {
                    heures = 0; // Passer heure à 0
                    
                } 
            }        
    }
    
    console.log('Dans une seconde, il sera ' + heures + ' heures, ' + minutes + ' minutes et ' + secondes + ' secondes');
      
} else { // si heure incorrecte
    
    console.log('Heure incorrecte !');

}