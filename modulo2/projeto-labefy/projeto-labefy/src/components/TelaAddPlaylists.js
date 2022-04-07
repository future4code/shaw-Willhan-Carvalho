import React from "react";
import axios from "axios";
import styled from "styled-components";
const Page = styled.div`
  background-image: linear-gradient(to right, #c6ffdd, #fbd786, #f7797d);
  height: 100vh;
  display: flex;
`;
const MenuLateral = styled.div`
  display: grid;
  align-content: space-around;
  width: 150px;
  margin-left: 50px;
  height: 300px;
  margin-top: 100px;
  button {
    font-size: 20px;
    color: brown;
    border: 1px solid rosybrown;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    width: 150px;
    height: 60px;
  }
`;
const TelaPlayist = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 50px;
  align-items: center;
  width: 60%;
  button {
    font-size: 15px;
    color: brown;
    border: 1px solid rosybrown;
    border-radius: 30px;
    padding: 8px;
    margin: 8px;
  }
  input {
    border: 3px solid rosybrown;
    border-radius: 30px;
    padding: 8px;
    margin: 8px;
  }
  h2 {
    color: brown;
    font-size: 35px;
  }
  h1 {
    color: brown;
    font-size: 60px;
  }
`;
export class TelaAddPlaylist extends React.Component {
  state = {
    nome: "",
  };
  handleNome = (event) => {
    this.setState({ nome: event.target.value });
  };

  createPlaylist = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    const body = {
      name: this.state.nome,
    };
    const headers = { headers: { Authorization: "Willhan-Marques-Shaw" } };
    axios
      .post(url, body, headers)
      .then((res) => {
        console.log(res); 
        alert(`A playlist ${this.state.nome} foi criada com sucesso!`);
        this.setState({ nome: "" }); 
        
      })
      .catch((err) => {
        console.log(err.response.data); 
        console.log(err); 
        alert(err.response.data.message);
        this.setState({ nome: "" }); 
      });
    console.log(this.state); 
  };

  render() {
    return (
      <Page>
        <MenuLateral>
          <button onClick={this.props.irParaLista}>
            Ir para lista de Playlists
          </button>
          <button onClick={this.props.irParaTocarMusica}>Ouvir música</button>
          <button onClick={this.props.irParaAddMusic}>Adicionar música</button>
        </MenuLateral>

        <TelaPlayist>
          <h1>Labefy</h1>

          <h2>Criar Playlist</h2>
          <input
            placeholder={"Nome"}
            value={this.state.nome}
            onChange={this.handleNome}
          />
          <button onClick={this.createPlaylist}>Criar Playlist</button>
        </TelaPlayist>
      </Page>
    );
  }
}