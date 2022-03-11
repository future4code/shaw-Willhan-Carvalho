/* let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)//10
 */

/* const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)//19, 21, 23, 25, 27, 30
	}
}
//b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
//precisar criar uma variavel de controle
 */

/* const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}
// *
// **
// ***
// **** */

/* const estimacao = Number (prompt("Quantos bichinhos de estimação você tem?"))
let animais = []
if (estimacao === 0) {
    console.log( "Que pena! Você pode adotar um pet!");

}else {
    for(let i = 0; i < estimacao; i++){
        resultado = prompt("quais seus pets?")
        animais.push(resultado)
    }
    console.log(animais);
 
} */

const arrayOriginal = [20, 10, 33, 40, 60]

function aparte1(array1){
for(let i = 0; i < 5; i++){
    console.log(array1[i])
}
}
aparte1(arrayOriginal)

function parte2 (array2){
    let i = 0
    while(i < array2.length){
    let resultado = array2[i]/10
        i++
        console.log(resultado);
    }
  }
    parte2(arrayOriginal)

function parte3 (array3){
    let array = []
    for(let i = 0; i <= array3.length; i++){
    if(array3[i] % 2 === 0){
     array.push(array3[i])
     

    } 
    }
    console.log(array);
    }
    parte3(arrayOriginal)
   
    


   
 