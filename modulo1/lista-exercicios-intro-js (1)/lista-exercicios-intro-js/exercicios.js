 /*  // EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

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
const custoDoespetaculo = custo / valorIngresso
return custoDoespetaculo 
}

// EXERCÍCIO 08
const string1 = ("eae como esta hj")
const string2 = ("ola")

function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
const resultado = string1 >= string2 

return resultado 
}

  // EXERCÍCIO 09
const array = [1, 2, 3]
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array[0]
}   */

// EXERCÍCIO 10
/* const array =[1,2,3,4,5]
function retornaUltimoElemento(array) {
// implemente sua lógica aqui
const array1 = array.length-1

return array[array1] 

} 
 /* // EXERCÍCIO 11

function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const finalIndex = array.length-1
  const primeiroArray = array[finalIndex]
  const ultimoArray = array[0]
  array[0] = primeiroArray
  array[finalIndex] = ultimoArray
  return array 
}  */

// EXERCÍCIO 12
const string1 = banana
const const2 = Banana
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
const a =string2.toLowerCase()
const b =string1.toLowerCase()
return a===b
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}