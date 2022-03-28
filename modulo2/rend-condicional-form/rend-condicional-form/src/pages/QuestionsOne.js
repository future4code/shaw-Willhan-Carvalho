import React from "react";

export class QuestionsOne extends React.Component {

    render(){
  
        return (
            <div>
                <form>
                    <h1>Eu funcionei</h1>
                    <h3>1. Qual o seu nome?</h3>
                    <input type="text"></input>
                    <h3>2. Qual a sua idade?</h3>
                    <input type="number"></input>
                    <h3>3. Qual seu email?</h3>
                    <input type="email"></input>
                    <h3>4. Qual sua escolaridade?</h3>

                    <select>
                        <option value="EMC">Ensino médio completo</option>
                        <option value="EMI">Ensino médio incompleto</option>
                        <option selected value="ESC">Ensino superior incompleto</option>
                        <option value="ESI">Ensino superior completo</option>
                    </select>

                </form>
            </div>
        );
    }
}
