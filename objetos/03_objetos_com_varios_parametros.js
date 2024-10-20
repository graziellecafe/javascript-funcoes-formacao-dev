const cliente = { 
  codigo: 58934, 
  nome: 'Ana Medeiros Albuquerque', 
  vip: true, 
  endereco: { 
    logradouro: 'Rua XYZ', 
    numero: 987, 
    complemento: 'Apto 302, Bloco C', 
    pontosRef: 'Hospital São Pedro'
  }, 
  filhos: [ 
    { nome: 'Grazielle Café', idade: 30 }, 
    { nome: 'Jéssica Ferreira', idade: 28}, 
  ]
}

console.log(cliente.filhos[1].nome); 
// saída: Jéssica Ferreira 