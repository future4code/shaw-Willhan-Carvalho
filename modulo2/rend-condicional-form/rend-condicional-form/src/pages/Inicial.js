import React from "react";
import Home from "./Home";
import Login from "../components/Login";
export class Inicial extends React.Component {

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
        const telaInicial = () => {
            if (this.state.estaLogado) {
                return <Home botaoLogout={this.fazerLogout} />
            }
            else {
                return <Login botaoLogin={this.fazerLogin} />
            }
        }

        return (
            <div>
                {telaInicial()}
            </div>
        )
    }
}
