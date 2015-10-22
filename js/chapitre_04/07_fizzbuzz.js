/* 
 * Code Javascript chapitre 4 exercice 07 - FizzBuzz
 *
 */
/* Boucle la plus adéquate : For
 * 
 */
console.log('Multiple de 3 -> Fizz et Multiple de 5 -> Buzz');
for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

// Améliorations
console.log('\nMultiple de 3 -> Fizz -- Multiple de 5 -> Buzz -- Multiple de 3 et 5 -> FizzBuzz');
for (var i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}