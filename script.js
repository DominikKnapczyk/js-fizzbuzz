// CONSOLE LOG

for (let i = 0; i < 101; i++) {
  let numero = i + 1;

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

// FizzBuzzDOM

const listEl = document.getElementById("list");

for (let i = 0; i < 100; i++) {

  let numero = i + 1;
  const listItem = document.createElement("li");

  listItem.classList.add("box");

  // CASO IN CUI E` DIVISIBILE PER 5 E 3
  if (numero % 5 == 0 && numero % 3 == 0) {
    listItem.classList.add("box-fizz-buzz");
    listItem.innerHTML = "FizzBuzz";
  }
  
  // CASO IN CUI E` DIVISIBILE PER 5
  else if (numero % 5 == 0 ) {
    listItem.classList.add("box-buzz");
    listItem.innerHTML = "Buzz";
  }

  // CASO IN CUI E` DIVISIBILE PER 3
  else if (numero % 3 == 0 ) {
    listItem.classList.add("box-fizz");
    listItem.innerHTML = "Fizz";
  }

  // CASO IN CUI NON E` DIVISIBILE PER 5 O 3
  else {
    listItem.classList.add("box-number");
    listItem.innerHTML = i + 1;
  }
  listEl.append(listItem)
}