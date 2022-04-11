import React from "react";
import axios from 'axios';
import styled from "styled-components";

const Li = styled.li`
    border: 1px solid;
    padding: 5px;
    width: 300px;
    background-color: lightcoral;
    list-style: none;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    justify-content:center;
    margin-top:20px ;
`
const Button = styled.button`
    width: 170px;
    padding: 4px;
    font-size: 15px;
    cursor: pointer;
    font-style: italic;
`

const BtnLi = styled.button`
    cursor: pointer;
    font-weight:bold;
    background-color: black;
    color: white;
    border: 2px solid white;
`

class Users extends React.Component{
    state = {
        users: []
    }
    componentDidMount(){
        this.getAllUsers()
    }
    getAllUsers = () => {
        const urlUsers = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users';
        const headers = {
        headers: {
        Authorization: "Willhan-marques-Shaw"
    }
    };
        axios
        .get(urlUsers, headers)
        .then((res) => { this.setState({ users: res.data }) })
        .catch((err) => { alert("Algo deu errado!") })
    }
    deleteUser(id){
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios
        .delete(url, { headers: {Authorization: "Willhan-Marques-Shaw"}})
        .then((res) => {
            alert("Usuario(a) deletado(a) com sucesso")
            this.getAllUsers()
        })
        .catch((err) =>{
            alert("Ocorreu um erro, tente novamente")
        })
    }
    render(){
        console.log(this.state.users)
        const copiaDosUsuarios = this.state.users.map((usuarios) => {
            return (
                <Li key={usuarios.id}>{usuarios.name}<BtnLi onClick={() => this.deleteUser(usuarios.id)}>x</BtnLi></Li>
            )
        })
        return(
            <>
                <h1>Tela de usuarios</h1>
                <Button onClick={this.props.irParaCadastro}>Ir página de cadastro</Button>
                {copiaDosUsuarios}
            </>
        )
    }
}

export default Users