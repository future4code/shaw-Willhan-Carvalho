 /* const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.") */
//}
//a) Explique o que o código faz. Qual o teste que ele realiza? 
// se for divisivel por 2 e resultado der resto zero entao esta correto
//b) Para que tipos de números ele imprime no console "Passou no teste"? 
//numero pares
//c) Para que tipos de números a mensagem é "Não passou no teste"?
// numero impar 

/* let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
//a) Para que serve o código acima?
//imprimir o valor da fruta pedido
//b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//vai imprimir 2.25 valor da maça
//c) 5 */

/* const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

//a) O que a primeira linha está fazendo?
//esta pedindo um numeo ao usuario
//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//nao foi pedido entao nao aparece nd.
//c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// mensagem esta dentro do escopo */

/* const idade = Number(prompt("qual a sua idade"))
if (idade >= 18 ){
    console.log("pode dirigir");

}else {
    console.log("nao pode dirigir")

} */

/* const turno = prompt(" Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno)").toUpperCase()

if (turno === "M" ) {
    console.log("bom dia");

}else if (turno === "V" ){
    console.log("boa tarde");

}else{
    console.log("boa noite");

} */

/* const turno = prompt(" Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno)").toUpperCase()

switch (turno) {
    case "M" :
    console.log("bom dia");
        
        break;
    case "V":
    console.log("boa tarde");
         
         break
    case "N" : 
    console.log("boa noite");

         break

    

    default:
        break;
}
 */

/* const genero = prompt("escolha um filme").toLocaleLowerCase()
const valor = Number (prompt("valor"))

if (genero == "fantasia" && valor === 15 ){
    console.log("bom filme");
}else {
    console.log("escolha outro filme");
} */

// DESAFIO


/* const genero = prompt("escolha um filme").toLocaleLowerCase()
const valor = Number (prompt("valor"))
const lanchinho = prompt("pipoca, chocolate, doces, etc").toLocaleLowerCase()


if (genero == "fantasia" && valor === 15)
{
    console.log("bom filme");
    console.log(`e aproveite seu lanchinho ${lanchinho}`);

} else {
    console.log("escolha outro filme")
} */



/* const nomeCompleto = prompt("Digite seu nome completo:")
const tipoDeJogo = prompt("Digite o tipo de jogo IN p/ Internacional ou DO p/ Domestico").toUpperCase()
const etapaJogos = prompt("Digite qual etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final").toUpperCase()
const categoria = Number(prompt("Digite o numero da categoria 1,2,3 ou 4"))
const quantidaDeIngressos = Number(prompt("Quantos ingressos?"))

console.log( "---Dados da compra---")
//TIPO DE JOGO
if(tipoDeJogo ==="IN"){
    console.log(`Nome do Cliente:${nomeCompleto}`);
    console.log("Tipo do jogo: Internacional");
}else if(tipoDeJogo === "DO"){
    console.log(`Nome do Cliente${nomeCompleto}`);
    console.log("Tipo do jogo: Nacional");
}
//ETAPA
if(etapaJogos === "SF"){
    console.log("Semi-final")
}else if(etapaJogos === "DT"){
    console.log("Decisão do Terceiro Lugar")

}else if(etapaJogos==="FI"){
    console.log("Etapa do jogo: Final");
}
//CATEGORIA
if(categoria === 1){
    console.log(`Categoria: ${categoria}`);
}else if(categoria === 2){
    console.log(`Categoria: ${categoria}`);
}else if(categoria === 3){
    console.log(`Categoria: ${categoria}`);
}else if(categoria === 4){
    console.log(`Categoria: ${categoria}`);
}
console.log(`Quantidade de ingressos: ${quantidaDeIngressos}`);
console.log("--- Valores ---")
let valorDoSf = [1320.00, 880.00, 550.00, 220.00]
let valorDoDt = [660.00, 440.00, 330.00, 170.00]
let valorDoFi =[1980.00, 1320.00,880.00,330.00]
//valores ingresso semi final
if(tipoDeJogo === "DO" && etapaJogos === "SF"  && categoria === 1){
    let valorIngresso = valorDoSf[0]
    let resultado = valorIngresso  * quantidaDeIngressos
    console.log(`O valor do ingresso é : ${valorIngresso}`)
    console.log(`Valor total :${resultado}`);
}else if(tipoDeJogo === "DO" && etapaJogos === "SF"  && categoria === 2){
    let valorIngresso = valorDoSf[1]
    let resultado = valorIngresso  * quantidaDeIngressos
    console.log(`O valor do ingresso é : ${valorIngresso}`)
    console.log(`Valor total :${resultado}`);
}else if(tipoDeJogo === "DO" && etapaJogos === "SF"  && categoria === 3){
    let valorIngresso = valorDoSf[2]
    let resultado = valorIngresso  * quantidaDeIngressos
    console.log(`O valor do ingresso é : ${valorIngresso}`)
    console.log(`Valor total :${resultado}`);
}else if(tipoDeJogo === "DO" && etapaJogos === "SF"  && categoria === 4){
    let valorIngresso = valorDoSf[3]
    let resultado = valorIngresso  * quantidaDeIngressos
    console.log(`O valor do ingresso é : ${valorIngresso}`)
    console.log(`Valor total :${resultado}`);
}
// VALORES TERCEIRO LUGAR
if(tipoDeJogo === "DO" && etapaJogos === "DT"  && categoria === 1){
    let valorIngresso = valorDoDt[0]
    let resultado = valorIngresso  * quantidaDeIngressos
    console.log(`O valor do ingresso é : ${valorIngresso}`)
    console.log(`Valor total :${resultado}`);
}else if(tipoDeJogo === "DO" && etapaJogos === "DT"  && categoria === 2){
    let valorIngresso = valorDoDt[1]
    let resultado = valorIngresso  * quantidaDeIngressos
    console.log(`O valor do ingresso é : ${valorIngresso}`)
    console.log(`Valor total :${resultado}`);
}else if(tipoDeJogo === "DO" && etapaJogos === "DT"  && categoria === 3){
    let valorIngresso = valorDoDt[2]
    let resultado = valorIngresso  * quantidaDeIngressos
    console.log(`O valor do ingresso é : ${valorIngresso}`)
    console.log(`Valor total :${resultado}`);
}else if(tipoDeJogo === "DO" && etapaJogos === "DT"  && categoria === 4){
    let valorIngresso = valorDoDt[3]
    let resultado = valorIngresso  * quantidaDeIngressos
    console.log(`O valor do ingresso é : ${valorIngresso}`)
    console.log(`Valor total :${resultado}`);
}
//VALORES FINAL
if(tipoDeJogo === "DO" && etapaJogos === "FI"  && categoria === 1){
    let valorIngresso = valorDoFi[0]
    let resultado = valorIngresso  * quantidaDeIngressos
    console.log(`O valor do ingresso é : ${valorIngresso}`)
    console.log(`Valor total :${resultado}`);
}else if(tipoDeJogo === "DO" && etapaJogos === "FI"  && categoria === 2){
    let valorIngresso = valorDoFi[1]
    let resultado = valorIngresso  * quantidaDeIngressos
    console.log(`O valor do ingresso é : ${valorIngresso}`)
    console.log(`Valor total :${resultado}`);
}else if(tipoDeJogo === "DO" && etapaJogos === "FI"  && categoria === 3){
    let valorIngresso = valorDoFi[2]
    let resultado = valorIngresso  * quantidaDeIngressos
    console.log(`O valor do ingresso é : ${valorIngresso}`)
    console.log(`Valor total :${resultado}`);
}else if(tipoDeJogo === "DO" && etapaJogos === "Fi"  && categoria === 4){
    let valorIngresso = valorDoFi[3]
    let resultado = valorIngresso  * quantidaDeIngressos
    console.log(`O valor do ingresso é : ${valorIngresso}`)
    console.log(`Valor total :${resultado}`);
}
// VALORES INTERNACIONAIS
if(tipoDeJogo === "IN" && etapaJogos === "SF"  && categoria === 1){
    let valorIngresso = valorDoSf[0]
    let variavelDolar = valorIngresso * 4.1
    let resultado = variavelDolar * quantidaDeIngressos
    console.log(`O valor do ingresso em Dolar é : ${variavelDolar}`)
    console.log(`Valor total :${resultado}`);
}else if(tipoDeJogo === "IN" && etapaJogos === "SF"  && categoria === 2){
    let valorIngresso = valorDoSf[1]
    let variavelDolar = valorIngresso * 4.1
    let resultado = variavelDolar * quantidaDeIngressos
    console.log(`O valor do ingresso em Dolar é : ${variavelDolar}`)
    console.log(`Valor total :${resultado}`);
}else if(tipoDeJogo === "IN" && etapaJogos === "SF"  && categoria === 3){
    let valorIngresso = valorDoSf[2]
    let variavelDolar = valorIngresso * 4.1
    let resultado = variavelDolar * quantidaDeIngressos
    console.log(`O valor do ingresso em Dolar é : ${variavelDolar}`)
    console.log(`Valor total :${resultado}`);
}else if(tipoDeJogo === "IN" && etapaJogos === "SF"  && categoria === 4){
    let valorIngresso = valorDoSf[3]
    let variavelDolar = valorIngresso * 4.1
    let resultado = variavelDolar * quantidaDeIngressos
    console.log(`O valor do ingresso em Dolar é: ${variavelDolar}`)
    console.log(`Valor total :${resultado}`);
}
// VARLOR TERCEIRO INTERNACIONAL
if(tipoDeJogo === "IN" && etapaJogos === "DT"  && categoria === 1){
    let valorIngresso = valorDoDt[0]
    let variavelDolar = valorIngresso * 4.1
    let resultado = variavelDolar * quantidaDeIngressos
    console.log(`O valor do ingresso em Dolar é : ${variavelDolar}`)
    console.log(`Valor total :${resultado}`);
}else if(tipoDeJogo === "IN" && etapaJogos === "DT"  && categoria === 2){
    let valorIngresso = valorDoDt[1]
    let variavelDolar = valorIngresso * 4.1
    let resultado = variavelDolar * quantidaDeIngressos
    console.log(`O valor do ingresso em Dolar é : ${variavelDolar}`)
    console.log(`Valor total :${resultado}`);
}else if(tipoDeJogo === "IN" && etapaJogos === "DT"  && categoria === 3){
    let valorIngresso = valorDoDt[2]
    let variavelDolar = valorIngresso * 4.1
    let resultado = variavelDolar * quantidaDeIngressos
    console.log(`O valor do ingresso em Dolar é : ${variavelDolar}`)
    console.log(`Valor total :${resultado}`);
}else if(tipoDeJogo === "IN" && etapaJogos === "DT"  && categoria === 4){
    let valorIngresso = valorDoDt[3]
    let variavelDolar = valorIngresso * 4.1
    let resultado = variavelDolar * quantidaDeIngressos
    console.log(`O valor do ingresso em Dolar é: ${variavelDolar}`)
    console.log(`Valor total :${resultado}`);
}
// VALOR FINAL INTERNACIONAL
if(tipoDeJogo === "IN" && etapaJogos === "FI"  && categoria === 1){
    let valorIngresso = valorDoFi[0]
    let variavelDolar = valorIngresso * 4.1
    let resultado = variavelDolar * quantidaDeIngressos
    console.log(`O valor do ingresso em Dolar é : ${variavelDolar}`)
    console.log(`Valor total :${resultado}`);
}else if(tipoDeJogo === "IN" && etapaJogos === "FI"  && categoria === 2){
    let valorIngresso = valorDoFi[1]
    let variavelDolar = valorIngresso * 4.1
    let resultado = variavelDolar * quantidaDeIngressos
    console.log(`O valor do ingresso em Dolar é : ${variavelDolar}`)
    console.log(`Valor total :${resultado}`);
}else if(tipoDeJogo === "IN" && etapaJogos === "FI"  && categoria === 3){
    let valorIngresso = valorDoFi[2]
    let variavelDolar = valorIngresso * 4.1
    let resultado = variavelDolar * quantidaDeIngressos
    console.log(`O valor do ingresso em Dolar é : ${variavelDolar}`)
    console.log(`Valor total :${resultado}`);
}else if(tipoDeJogo === "IN" && etapaJogos === "Fi"  && categoria === 4){
    let valorIngresso = valorDoFi[3]
    let variavelDolar = valorIngresso * 4.1
    let resultado = variavelDolar * quantidaDeIngressos
    console.log(`O valor do ingresso em Dolar é: ${variavelDolar}`)
    console.log(`Valor total :${resultado}`);
}  */

// Densevolvi junto ao Pablo Gomes dos Santos


