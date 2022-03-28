import React from "react";
import Questions from "./Questions";

export default class Home extends React.Component {

    state = {
        estaLogado: false
    };

    fazerLogin = () => {
        this.setState({ estaLogado: true });
    };

    fazerLogout = () => {
        this.setState({ estaLogado: false })
    }

    render() {
        console.log(this.state);
        const mudarTela = () => {
            if (this.state.estaLogado) {
                return <Home botaoLogout={this.fazerLogout} />
            }
            else {
                return <Questions botaoLogin={this.fazerLogin} />
            }
        }

        return (
            <div>
                <h1>Bem-vindo(a)! Vamos iniciar?</h1>
                <div>
                    <button onClick={this.props.botaoLogout}>Logout</button>

                    <h3>Aperte no botão abaixo para iniciar</h3>
                </div>
                {mudarTela()}
            </div>
        );
    }
}