import React from 'react';
import style from "styled-components"

const Conteiner = style.div`
display: flex;
align-items: center;
border: 1px solid black;
padding: 20px 10px;
margin-bottom: 10px;
height: 100px;
width: 350px;
img{
    width: 30px;
}

`



function CardPequeno(props) {
    return (
        <Conteiner>
        
          <img src={ props.imagem } />
            <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            
        
        </Conteiner>
    )
}


export default CardPequeno