/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Boas vindas ao jogo de Blackjack!");

let pergunta = (confirm("Quer iniciar um partida sim ou não"))
console.log("Bora jogar?")
if(pergunta){
   let usuario1 = comprarCarta()
   let usuario2 = comprarCarta()
   let pontoUsuario = usuario1.valor + usuario2.valor
   console.log(`Cartas compradas pelo usuário: ${usuario1.texto} + ${usuario2.texto} = ${pontoUsuario}`);

   let pc1 = comprarCarta()
   let pc2 = comprarCarta()
   let pontopc = pc1.valor + pc2.valor
   console.log(`Cartas compradas pelo Computador: ${pc1.texto} + ${pc2.texto} = ${pontopc}`);
   
   if (pontoUsuario > pontopc){
      console.log("O usuário ganho✔️!");


   }else if (pontopc > pontoUsuario){
      console.log("O computador ganho✔️!");

   }else if (pontopc === pontoUsuario){
      console.log("Empate😞");
   }

}else{
   console.log("O jogo acabou");
}




