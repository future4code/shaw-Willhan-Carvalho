import React from "react";
import styled from "styled-components";

const Font = styled.div`
  color: brown;
`;
export class TelaDetailsPlaylists extends React.Component {
  render() {
    return (
      <div>
         <Font>
          <h4>Track</h4>
          <br />
          <li>Música: {this.props.nomeMusica}</li>
          <li>Artista/banda: {this.props.nomeArtista}</li>
        </Font>
      </div>
    );
  }
}