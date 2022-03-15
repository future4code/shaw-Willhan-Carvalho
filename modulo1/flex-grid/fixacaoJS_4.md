``` contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let resultado = []
  
    for(let i = 0; i < arrayDeNumeros.length ; i++){
        let posicao = arrayDeNumeros[i]
        if(posicao === numeroEscolhido){
        resultado.push(numeroEscolhido)}}
    if(resultado.length === 0){
        return  "Número não encontrado"
    }else{
        return  `O número ${numeroEscolhido} aparece ${resultado.length}x`
    }
}

    



  
  
  
 

  

  
  