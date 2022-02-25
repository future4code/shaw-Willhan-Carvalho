 /* const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })
  // vai imprimir nome,posiçao e apelido */

 /*  const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)
// array3 
 const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)
 // array 0 e 2 


 const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
//A
const nomeDoPet = pets.map((pets)=>{
    console.log(pets.nome)
})  

//B
 const nomeDoPet2 = pets.filter((pet)=>{

     return pet.raca === "Salsicha"
     
})
 console.log(nomeDoPet2)
 

 //C
const nomeDoPet3 = pets.filter((pets)=>{

    return pets.raca === "Poodle"

}).map((pets)=>{
    
    return (`Você ganhou um cupom de desconto de 10% para tosar ${pets.nome}`)

})
console.log(nomeDoPet3); 

// atividade 2
 */
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

/*  // A
let produto1 = produtos.map((produto)=>{
    
    return produto.nome
      
    })
 console.log(produto1)   */

 // B
   const 

   let desconto1 = produtos.filter((produtos)=>{
   let desconto6 = produtos * 0.05 - produtos.preco
   return desconto6

 }).map((produtos)=>{

  return `${produtos.nome}, ${produtos.preco}`
 })
console.log(produtos2);
 
/* // C
 const bebidas = produtos.filter((produtos)=>{
    return produtos.categoria === "Bebidas"
})
 console.log(bebidas); 

 // D
  const sabao = produtos.filter((produtos)=>{
     return produtos.nome.includes("Ypê")
 })
 console.log(sabao);

 
// E
const sabao = produtos.filter((produtos)=>{
    return produtos.nome.includes("Ypê")
}).map((produtos)=>{
    return (` Compre ${produtos.nome}, por ${produtos.preco}`)
})

console.log(sabao); */