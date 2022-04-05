import React from "react";
import axios from 'axios';

const urlUsers = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users';

const headers = {
    headers: {
      Authorization: "Willhan-marques-Shaw"
    }
};

export default class Home extends React.Component {

    state = {
        users: [],
        nomeUsuario: '',
        emailUsuario: ''
    }
    
    createUser = () => {
        const body = {
            name: this.state.nomeUsuario,
            email: this.state.emailUsuario
        }

        axios
            .post(urlUsers, body, headers)
            .then((res) => {
                alert (`O usuario ${this.state.nomeUsuario} foi cadastrado com sucesso!`);
                this.setState({ nomeUsuario:'', emailUsuario:''})
                /* this.getAllUsers() */
            })
            .catch((err) => {
                alert(err.response.data.message);
                this.setState({ nomeDoUsuario: '' , emailUsuario:''})
            })     
    }

    onChangeUsuario = (event) => {
        this.setState({ nomeUsuario: event.target.value })
    }
    onChangeEmail = (event) => {
        this.setState({ emailUsuario: event.target.value })
    }


    render(){
        return(
            <>  
                <h1>Tela de cadastro</h1>
                <input type="text" onChange={this.onChangeUsuario} value={this.state.nomeUsuario} placeholder="Nome"></input>
                <input type="text" onChange={this.onChangeEmail} value={this.state.emailUsuario} placeholder="Email"></input>
                <button onClick={this.createUser}>Cadastre aqui</button>
                {/* {copiaDosUsuarios} */}
                <button onClick={this.props.irParaUsuarios}>Ir página de usuarios</button>
            </>
        )
    }
}