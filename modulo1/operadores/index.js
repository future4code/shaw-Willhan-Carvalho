 const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)//false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) //false

resultado = !resultado && (bool1 || bool2) //false
console.log("c. ", resultado)

console.log("d. ", typeof resultado)//booleano 


let primeiroNumero = Number (prompt("Digite um numero!"))
let segundoNumero = Number (prompt("Digite outro numero!"))//era do tipo string e foi alterado para Number

const soma = primeiroNumero + segundoNumero

console.log(soma) //foi alterado para Number assima impressao foi o esperado
 

const idade = prompt ("idade")

const MinhaIdade = prompt("minha idade")

console.log(MinhaIdade>idade) 

 const numero1 = prompt("numero par")

numero1 % 2


console.log (numero1%2)//nao tem resto 
//o numero impar o resulta sera o resto da divisao

 const idade = Number (prompt("idade"))

const meses = 12 * idade
const dias = 365 * idade
const horas =(24*365)*idade

console.log (`${meses} meses,${dias} dias,${horas} horas`) 

const numero1= Number (prompt("numero1"))
const numero2= Number (prompt("numero2"))


console.log("O primeiro numero é maior que segundo", numero1>numero2)
console.log("O primeiro numero é igual ao segundo", numero1===numero2)
console.log("O primeiro numero é divisível pelo segundo", (numero1 % numero2)===0)
console.log("O segundo numero é divisível pelo primeiro", (numero2 % numero2)===0)









