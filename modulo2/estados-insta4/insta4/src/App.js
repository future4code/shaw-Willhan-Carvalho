import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const PostarCaixa = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  input{
    width: 300px;
    margin: 3px 0 ;

  }
  button{
    width: 302px;
    margin: 3px 0;
  }
`

class App extends React.Component {
  state = {
    pessoas: [
      {
        nomeUser: "Paulinha",
        fotoUser: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUser: "Willhan",
        fotoUser: "https://media-exp1.licdn.com/dms/image/C4E03AQFMk-cTaDNuFg/profile-displayphoto-shrink_200_200/0/1648055627013?e=1653523200&v=beta&t=CqQFsH4onlwXGQDc6oljCUQGZ3m5v-Mc4QOIKPjTMfU",
        fotoPost: "https://picsum.photos/203/150"
      },
      {
        nomeUser: "Juliana",
        fotoUser: "https://media-exp1.licdn.com/dms/image/D4D35AQEEVAY1gEVw0g/profile-framedphoto-shrink_100_100/0/1643833387711?e=1648231200&v=beta&t=XAnEPfTkX6YmxBpLsLQWCVlLnXXbzv77DvoPyNf8ibM",
        fotoPost: "https://picsum.photos/201/150"
      }
    ],
    valorInputNomeUser: '',
    valorInputFotoUser: '',
    valorInputFotoPost: ''
  }

  adicionaPost = () => {
    const novoPost = {
      nomeUser: this.state.valorInputNomeUser,
      fotoUser: this.state.valorInputFotoUser,
      fotoPost: this.state.valorInputFotoPost
    }
    const novoPost2 = [...this.state.pessoas, novoPost]
    this.setState({ pessoas: novoPost2 })
    this.setState({ valorInputNomeUser: ''})
    this.setState({ valorInputFotoUser: ''})
    this.setState({ valorInputFotoPost: ''})
  }

  onChangeInputNomeUser = (event) => {
    this.setState({ valorInputNomeUser: event.target.value })
  }

  onChangeInputFotoUser = (event) => {
    this.setState({ valorInputFotoUser: event.target.value })
  }

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value })
  }

  render() {
    const Postes = this.state.pessoas.map((pessoa) => {
      return (
        <MainContainer>
          <Post
            nomeUsuario={pessoa.nomeUser}
            fotoUsuario={pessoa.fotoUser}
            fotoPost={pessoa.fotoPost} />
        </MainContainer>
      )
    })
    return (
      <div>

      <PostarCaixa>
          <input
            value={this.state.valorInputNomeUser}
            onChange={this.onChangeInputNomeUser}
            placeholder={"Username"}
          />
          <input
            value={this.state.valorInputFotoUser}
            onChange={this.onChangeInputFotoUser}
            placeholder={"Link da foto"}
          />
          <input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Link da foto do post"}
          />
          <button onClick={this.adicionaPost}>Adicionar</button>
        </PostarCaixa>
        <div>
          {Postes}
        </div>
        
      </div>
    );
  }
}

export default App;
