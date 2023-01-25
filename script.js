for (let i = 0; i < 101; i++) {
  let numero = i;

  // CASO IN CUI E` DIVISIBILE PER 5 E 3
  if (numero % 5 == 0 && numero % 3 == 0) {
    console.log('FizzBuzz')
  }
  
  // CASO IN CUI E` DIVISIBILE PER 5
  else if (numero % 5 == 0 ) {
    console.log('Buzz')
  }

  // CASO IN CUI E` DIVISIBILE PER 3
  else if (numero % 3 == 0 ) {
    console.log('Fizz')
  }

  // CASO IN CUI NON E` DIVISIBILE PER 5 O 3
  else {
    console.log(numero)
  }
}