import React from 'react'
import Cadastro from './components/Cadastro'
import Users from './components/Usuario'

class App extends React.Component{

  state = {
    telaAtual: 'Tela Cadastro'
  }

  telaDeEscolha = () =>{
    switch(this.state.telaAtual){
      case 'Tela Cadastro':
        return <Cadastro irParaUsuarios={this.irTelaUsuarios}/>
      case 'Tela Usuarios':
        return <Users irParaCadastro={this.irTelaCadastro}/>
      default:
        return <div>Algo deu errado!</div>   
    }
  }

  irTelaCadastro = () =>{
    this.setState({ telaAtual: 'Tela Cadastro' })
  }
  irTelaUsuarios = () =>{
    this.setState({ telaAtual: 'Tela Usuarios' })
  }
  

  render(){
    return(
      <>
        {this.telaDeEscolha()}
      </>
    )
  }
}

export default App
