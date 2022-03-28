import React from "react";

export class QuestionsThree extends React.Component {


    render() {
        return (
            <div>
                <h3>Está cursando ou terminou o Ensino Médio </h3>

                <h3>5. Por que não terminou uma graduação?</h3>
                <input type="text"></input>
                <h3>6. Você fez curso complementar?</h3>
                <input type="text"></input>

                <select>
                    <option value="English">Curso de Inglês</option>
                    <option selected value="Null">Nenhum</option>
                    <option value="Curso">Curso Técnico</option>
                </select>

            </div>
        )
    }


}
