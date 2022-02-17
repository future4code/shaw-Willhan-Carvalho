/* function minhaFuncao(variavel) {
	return variavel * 5
}
// sem o console nao tem como imprimir
console.log(minhaFuncao(2))//10
console.log(minhaFuncao(10))// 50 */

/* let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta) //false */

/* let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
/*  */
/* i.   Eu gosto de cenoura  - true
ii.  CENOURA é bom pra vista- true
iii. Cenouras crescem na terra- true  */



/* function sobreMim1(){  
    const sobreMim = "Eu sou willhan, tenho 22 anos, moro em Mato Grosso e sou estudante"

  return sobreMim
}

const sobreWillhan = sobreMim1()

console.log(sobreWillhan) */
/* const nome = "willhan"
const idade = 22
const ondeMora = "mato grosso"
const profissao = "estudande"

function sobremim(nome, idade, ondeMora, profissao){
const mensagem = `eu sou ${nome}, tenho ${idade} anos, moro em ${ondeMora}, e sou ${profissao}`


return mensagem
}
const mensagem2 =sobremim(nome, idade, ondeMora, profissao)

console.log(mensagem2)

 */
/* const numero = 30
const numero1 = 40

function calculo(numero, numero1){
    const calculo1 = numero + numero1
    
    return calculo1
}
const resposta = calculo(numero, numero1)
console.log(resposta) 
 */

/* const numero = 30
const numero1 = 40

function calculo(numero, numero1){
    const calculo1 = numero >= numero1//false
    
    return calculo1
}
const resposta = calculo(numero, numero1)
console.log(resposta) 

 */
/* const numero = 30


function calculo(numero){
    const calculo1 = numero % 2 ===0  //true
    
    return calculo1
}
const resposta = calculo(numero)
console.log(resposta)  */

/* const frase = "esta um belo dia hoje"

function comoEstaOdia (frase) {
const a = frase.toUpperCase()

return a
}
const frase1 = comoEstaOdia (frase)
 console.log(frase1); */

 

 const calculo = Number (prompt("digite um numero"))
 const calculo1 = Number (prompt("digite um numero"))


 const inseridos = `numero inseridos:${calculo} e ${calculo1}`

console.log (inseridos)

const soma = calculo + calculo1
function soma1(soma){
    return soma
}
const resultado = soma1(soma)
console.log(`soma: ${resultado}`);

const subitracao = calculo-calculo1
function soma2(subitracao){

    return subitracao
}
const resultado2 = soma2(subitracao)

console.log (`subitracao: ${resultado2}`)

const multiplicacao = calculo + calculo1
function soma3(multiplicacao){

    return multiplicacao

}
const resultado3 = soma3(multiplicacao)
console.log(`multiplicacao: ${resultado3}`) 

const divisao = calculo / calculo1
function soma4(divisao){
    return divisao

}
const resultado4 = soma4(divisao)
console.log(`divisao: ${resultado4}`)
