const notas = [32, 56, 43, 67, 89, 23, 54]; 

let total = 0; 
let media = 0; 

for (let i = 0; i < notas.length; i ++) {
  total += notas[i]; 
}

console.log(total); 