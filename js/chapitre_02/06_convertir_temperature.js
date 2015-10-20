/* 
 * Code Javascript chapitre 02 exercice 06 - Convertir température
 *
 */
var temperatureCelcius = Number(prompt('Saisis une température en degré Celcius : '));
var temperatureFahrenheit = temperatureCelcius * 9 / 5 + 32;

console.log(temperatureCelcius + ' °C = ' + temperatureFahrenheit + ' °F');