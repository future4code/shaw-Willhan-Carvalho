import React from "react";
import styled from "styled-components";

const InputUsuario = styled.input`
    width: 14vh;
    border-radius: 5px;
    margin-left: 6px;
    position: fixed;
    bottom: 25.65vh;
    border: 1px solid gray;
    height: 20px;
`

const InputMensagem = styled.input`
    width: 32vh;
    margin-left: 155px;
    border-radius: 5px;
    height: 15px;
    position: fixed;
    bottom: 25.65vh;
    border: 1px solid gray;
    height: 20px;
`

const Botao = styled.button`
    border-radius: 5px;
    margin-left: 470px;
    height: 25px;
    position: fixed;
    bottom: 25.65vh;
    background-color: lightgreen;
    font-weight: bold;
    border: 1px solid gray;
    :hover{
        background-color: rgb(0,250,154);
  }
`

const EstiloDiv = styled.div`
    margin-bottom: 1px;
    padding-left:5px ;
`

const BarraDeMensagem = styled.div`
    background-color: lightgreen;
    border-radius: 10px 10px 10px 0px;
    margin-left: 2px;
    min-width: 50px;
    padding-left: 7px;
    padding-right: 7px;
    box-shadow: 4px 8px 8px gray;
    width: fit-content;
    max-width: 60%;
    word-wrap: break-word;
`

const Estilo = styled.h1`
    color: green;
    font-size: 15px;
    margin-bottom: -14px;
    
`

const EstiloDois = styled.p`
    font-size: 14px;
    
`
export class Mensagens extends React.Component {
    state = {

        mensagemEnviada:
            [
                {
                    mensagem: "",
                    usuario: ""
                }
            ],
        valorInputMensagem: "",
        valorInputUsuario: ""
    }

    mandarMensagem = () => {

        const novaMensagem = {
            mensagem: this.state.valorInputMensagem,
            usuario: this.state.valorInputUsuario
        }

        const novasMensagens = [...this.state.mensagemEnviada, novaMensagem]

        this.setState({
            mensagemEnviada: novasMensagens,
            valorInputMensagem: "",
            valorInputUsuario: ""
        })
    }

    onChangeMensagem = (event) => {
        this.setState({ valorInputMensagem: event.target.value })
    }

    onChangeUsuario = (event) => {
        this.setState({ valorInputUsuario: event.target.value })
    }


    render() {

        const listaDeMensagens = this.state.mensagemEnviada.map((msg) => {
            return (
                <div>
                    <BarraDeMensagem>
                        <Estilo>{msg.usuario}</Estilo>
                        <EstiloDois>{msg.mensagem}</EstiloDois>
                    </BarraDeMensagem>
                </div>
            )
        })
        return (
            <EstiloDiv>
                {listaDeMensagens}
                <InputUsuario
                    placeholder="Nome"
                    value={this.state.valorInputUsuario}
                    onChange={this.onChangeUsuario}
                />
                <InputMensagem
                    placeholder="Mensagem"
                    value={this.state.valorInputMensagem}
                    onChange={this.onChangeMensagem}
                />
                <Botao onClick={this.mandarMensagem}> Enviar </Botao>

            </EstiloDiv>
        )
    }
}
