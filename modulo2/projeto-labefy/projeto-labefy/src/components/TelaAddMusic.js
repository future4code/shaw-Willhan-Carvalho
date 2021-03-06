import React from "react";
import axios from "axios";
import styled from "styled-components";
const TelaParaAddMusic = styled.div`
  background-image: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%);
  height: 100vh;
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  button {
    color: brown;
    border: 1px solid rosybrown;
    border-radius: 30px;
    padding: 8px;
    margin: 8px;
    margin-top: 30px;
    font-size: 20px;
  }
  input {
    border: 3px solid rosybrown;
    border-radius: 30px;
    padding: 8px;
    margin: 8px;
  }
  h2 {
    color: brown;
    font-size: 45px;
  }
`

export class TelaAddMusic extends React.Component {
  state = {
    musics: [],
    id: "",
    nome: "",
    artists: "",
    music: "",
   
  };
  handlePlaylistId = (event) => {
    this.setState({ id: event.target.value });
  };

  handleNome = (event) => {
    this.setState({ nome: event.target.value });
  };
  handleArtists = (event) => {
    this.setState({ artists: event.target.value });
  };

  handleMusic = (event) => {
    this.setState({ music: event.target.value });
  };
  componentDidMount() {
    this.addMusics();
  }
  addMusics = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.id}/tracks`;
    const body = {
      name: this.state.nome,
      artist: this.state.artists,
      url: this.state.music,
    };
    const headers = { headers: { Authorization: "Willhan-Marques-Shaw" } };
    axios
      .post(url, body, headers)
      .then((res) => {
        console.log(res); 
        alert(`A m??sica ${this.state.nome} foi criada com sucesso!`);
        this.setState({ nome: "", artists: "", id: "" }); 
        
      })
      .catch((err) => {
        console.log(err.response.data); 
        console.log(err);
        alert(err.response.data.message);
        this.setState({ nome: "", artists: "", id: "" }); 
      });
    console.log(this.state); 
  };

  render() {
    return (
      <div>
        <TelaParaAddMusic>
          <MenuLateral>
            <button onClick={this.props.irParaCriarPlaylist}>Home</button>
            <button onClick={this.props.irParaLista}>
              Ir para lista de Playlists
            </button>
          </MenuLateral>
          <Body>
            <br />
            <br />
            <h2>Adicione uma m??sica</h2>

            <input
              placeholder={"Id da playlist"}
              value={this.state.id}
              onChange={this.handlePlaylistId}
            />
            <input
              placeholder={"Nome da m??sica"}
              value={this.state.nome}
              onChange={this.handleNome}
            />
            <input
              placeholder={"Artista(s)"}
              value={this.state.artists}
              onChange={this.handleArtists}
            />
            <input
              placeholder={"Url da m??sica"}
              value={this.state.music}
              onChange={this.handleMusic}
            />
            <button onClick={() => this.addMusics()}>Adicionar m??sica</button>
            </Body>
        </TelaParaAddMusic>
      </div>
    );
  }
}