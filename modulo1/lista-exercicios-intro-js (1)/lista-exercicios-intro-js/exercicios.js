  // EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const altura =Number (prompt("altura"))
const largura =Number  (prompt("largura"))
const soma = largura*altura
console.log(soma);
}


// EXERCÍCIO 02

function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual =Number (prompt("ano atual"))
  const anoDeNascimento = Number (prompt("ano de nascimento"))
  const idade = anoAtual-anoDeNascimento

  console.log(idade);
}

// EXERCÍCIO 03

const peso= 85
const altura= 1.8

function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

const imc= peso/ ( altura* altura )

return imc



}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nome = prompt("seu nome")
const idade = prompt ("sua idade")
const email = prompt("digite seu email")
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const a = prompt("cor favorita")
const b = prompt ("cor")
const c = prompt ("cor")
const array = [a, b, c]
console.log(array);
}

// EXERCÍCIO 06

const string = ("o dia esta lindo hoje")
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

 string= string.toUpperCase()

return string
}

// EXERCÍCIO 07
const custo = 3000
const valorIngresso = 30

function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
 const custoTotal = custo / valorIngresso
return custoTotal

} 

// EXERCÍCIO 08


function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
let string = string1.length 
let string3 = string2.length
let resulta = string === string3
return resulta 
}
console.log(checaStringsMesmoTamanho())


 // EXERCÍCIO 09

function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

return array[0]
}   

// EXERCÍCIO 10

function retornaUltimoElemento(array) {
// implemente sua lógica aqui
const array1 = array.length-1

return array[array1]

} 
 // EXERCÍCIO 11

function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const finalIndex = array.length-1
  const primeiroArray = array[finalIndex]
  const ultimoArray = array[0]
  array[0] = primeiroArray
  array[finalIndex] = ultimoArray
  return array 
}  

// EXERCÍCIO 12

function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
const a =string2.toLowerCase()
const b =string1.toLowerCase()
return a===b
} 

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
const anoAtual = Number (prompt("ano autal"))
const anoDeNascimento = Number (prompt("ano de nascimento"))
const anoDoRG = Number (prompt("ano do rg"))
let ano = anoAtual - anoDeNascimento
let rg = anoAtual - anoDoRG
let jovem = rg >= 5 && ano <= 20
let adulto = ano > 20 && ano <= 50 && rg >= 10 
let idoso = ano > 50 && rg >= 15
let resultado = jovem || adulto || idoso
console.log(resultado);
}


// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
let saoBissexto = ano % 400 === 0 || ano %  4 === 0 && ano % 100 !==0
return saoBissexto
}
checaAnoBissexto()

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
 
const idade = prompt ("Você tem mais de 18 anos?")
const escolaridade = prompt ("Você possui ensino médio completo")
const disponibilidade = prompt (" Você possui disponibilidade exclusiva durante os horários do curso?")
let resultado = idade == ("sim") && escolaridade == ("sim") && disponibilidade == ("sim")
console.log(resultado)


}
