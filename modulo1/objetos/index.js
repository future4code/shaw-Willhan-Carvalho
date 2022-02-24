 const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])//"Matheus Nachtergaele"
console.log(filme.elenco[filme.elenco.length - 1])//"Virginia Cavendish"
console.log(filme.transmissoesHoje[2])//{canal: "Globo", horario: "14h"} */

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)//juca
console.log(gato)//juba
console.log(tartaruga)//jubo */

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))//false
console.log(minhaFuncao(pessoa, "altura")) //undefined
//Explique o valor impresso no console. Você sabe por que isso aconteceu? nao tem valor definido. */

const pessoa = {
 nome :"willhan",
 apelido : ["will","wil","bill"]
 


}
console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de ${pessoa.apelido[0]}, ${pessoa.apelido[1]} ou
${pessoa.apelido[2]}`)

const segundaPessoa = { ...pessoa, apelido: ["fofao","fofim","ursao"]


}
console.log(`Eu sou ${segundaPessoa.nome}, mas pode me chamar de ${segundaPessoa.apelido[0]}, ${segundaPessoa.apelido[1]} ou
${segundaPessoa.apelido[2]}`) 

const pessoa = {
    nome:"willhan",
    idade: 22,
    profisao: "estudante"

}
const pessoa2 = {
    nome: "andreyna",
    idade: 20,
    profisao: "estudante"

}
function minhaFuncao(pessoa) {
  const resultado = []
  let nome1 = pessoa.nome.length 
  let valor1 = pessoa.nome
  let idade1 =pessoa.idade
  let profissao1 = pessoa.profisao
  let valor2 = pessoa.profisao.length
resultado.push(valor1,nome1,idade1,profissao1,valor2)


  return resultado
}
console.log(minhaFuncao(pessoa)); 
 

let frutas = {
 objeto:{nome: "mamao", disponibilidade:true},
 obejto1:{nome1: "pera", disponibilidade:true},
 obejto2:{nome2:"laranja", disponibilidade:true},
 
}
function carrinho1(frutas){
    let carrinho = []  
carrinho.push(frutas.objeto,frutas.obejto1,frutas.obejto2)
return carrinho


}

console.log(carrinho1(frutas))
