  let array
console.log('a. ', array)//indefinido

 array = null
console.log('b. ', array)//null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)//11

let i = 0
console.log('d. ', array[i]) //3

array[i+1] = 19
console.log('e. ', array)//3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13


const valor = array[i+6]
console.log('f. ', valor) //9 
 


 const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)//maiúsculo e altera o "A" pelo "I" e  a quantidade de itens 
 //numero impresso e 27 
 

 const nome = prompt ("nome do usuario")
const email = prompt ("email do usuario")

console.log (`O e-mail ${email}, foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}`)  

  const comida = ['feijao tropeiro', 'baião de dois', 'churrasco', 'arroz carreteiro', 'arroz a grega']

 console.log (`Essas são as minhas comidas preferidas:
${comida[0]}
${comida[1]}
${comida[2]}
${comida[3]}
${comida[4]}`) 
 
const comida1 = prompt('qual sua comida favorita')
const i = 0
comida[i+1] = comida1
console.log (comida) 


const listaDeTarefas = []

const atividade1 = prompt ("atividade1")
const atividade2 = prompt ("atividade2")
const atividade3 = prompt ("atividade3")

listaDeTarefas.push(atividade1)
listaDeTarefas.push(atividade2)
listaDeTarefas.push(atividade3) 


const atividadeFeita = prompt ("qual atividade você realizou hoje?")
listaDeTarefas.pop(atividadeFeita)
console.log (listaDeTarefas)
