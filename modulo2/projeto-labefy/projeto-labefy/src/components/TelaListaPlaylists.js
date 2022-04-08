import React from "react";
import axios from "axios";
import styled from "styled-components";
import { TelaDetailsPlaylists } from "./TelaDetailsPlaylists";

const Page = styled.div`
  background-image:  linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  width: 100%;
  height: 100vh;
  li {
    list-style-type: none;
  }
  button {
    color: brown;
    border: 1px solid rosybrown;
    border-radius: 30px;
    padding: 8px;
    margin: 8px;
  }
  h2 {
    color: brown;
    font-size: 45px;
  }
`;
const MenuLateral = styled.div`
  display: grid;
  align-content: space-around;
  width: 160px;
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
const CardUsuario = styled.div`
  display: flex;
  font-weight: bold;
  flex-direction: column;
  align-items: center;
  width: 70%;
  color: brown;
`;
const Line = styled.hr`
  border: 5px solid #f7797d;
  width: 600px;
`;
export class TelaListaPlaylists extends React.Component {
  state = {
    playlists: [],
    playlistDetails: [],
  };
  componentDidMount() {
    this.pegarPlaylists(); 
  }
  

  pegarPlaylists = () => {
   

    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    const headers = { headers: { Authorization: "Willhan-Marques-Shaw" } };
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({ playlists: res.data.result.list });
        
      })
      .catch((err) => {
  

        alert(
          "Ocorreu um problema, pode ser que você não esteja conectado a internet, tente novamente mais tarde."
        );
      });
  };

  deletarPlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`;
    const headers = { headers: { Authorization: "Willhan-Marques-Shaw" } };

    axios
      .delete(url, headers)
      .then((res) => {
     
        alert("Playlist deletada com sucesso");
        this.pegarPlaylists(); 
      })
      .catch((err) => {
        
        alert("Ocorreu um erro tente novamente mais tarde");
      });
  };

  detailsPlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`;
    const headers = { headers: { Authorization: "Willhan-Marques-Shaw" } };
    axios
      .get(url, headers)
      .then((res) => {
        console.log(res.data.result.tracks);
        this.setState({ playlistDetails: res.data.result.tracks });
        this.detailsPlaylist(); 
      })
      .catch((err) => {
        console.log(err);
      
      });
  };
  render() {
  
    const listaPlaylists = this.state.playlists.map((playlist) => {
      return (
        <div key={playlist.id}>
          <button onClick={this.props.irParaTocarMusica}>
            {playlist.name}
          </button>
          <p>Id: {playlist.id}</p>
          <button onClick={() => this.detailsPlaylist(playlist.id)}>
            Ver mais detalhes
          </button>

          <button onClick={() => this.deletarPlaylist(playlist.id)}>
            Deletar
          </button>

          <Line />
        </div>
      );
    });
    
    const listaPlaylistsDetails = this.state.playlistDetails.map((track) => {
      return (
        <TelaDetailsPlaylists
          key={track.id}
          nomeMusica={track.name}
          nomeArtista={track.artist}
        >
       
        </TelaDetailsPlaylists>
      );
    });

    return (
      <div>
        <Page>
          <MenuLateral>
            
            <button onClick={this.props.irParaCriarPlaylist}>Home</button>
          </MenuLateral>
          <CardUsuario>
            <br />
            <br />
            <h2>Playlists</h2>
            <br />
            {listaPlaylistsDetails}
            {listaPlaylists}
          </CardUsuario>
        </Page>
      </div>
    );
  }
}