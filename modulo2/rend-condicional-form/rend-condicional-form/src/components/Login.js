import React from "react";

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Questionário</h1>
        <h3>Faça seu login para continuar</h3>
        <button onClick={this.props.botaoLogin}>Fazer Login</button>
      </div>
    );
  }
}
