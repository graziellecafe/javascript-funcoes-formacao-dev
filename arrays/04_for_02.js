const numeros = [32, 56, 43, 67, 89, 23, 54]; 

// foreach => par acada elemento do array 

for (let numero of numeros ) { 
  console.log(numero); 
}

for (let i in numeros) {
  console.log(`${i} => ${numeros[i]}`);
}