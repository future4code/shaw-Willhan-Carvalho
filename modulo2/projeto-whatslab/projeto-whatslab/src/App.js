import React from 'react';
import styled from "styled-components";
import { Mensagens} from "./components/mensagens"

const Main = styled.div`
  margin-top: 78px;
  width: 539px;
  height: 400px;
  border: 1px black solid;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  background-color: black;
  background-image: url(https://img.freepik.com/vetores-gratis/fundo-preto-com-malha-de-baixo-poli-vermelho-brilhante_1017-20215.jpg?size=626&ext=jpg);
  ;
  
  @media (max-width: 360px) {
    width: 45vh;
  }
`
const Ordem = styled.div`
  border-radius: 10px 10px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 57vh;
  border-bottom: 1px solid gray;
 
`



class App extends React.Component{
  render(){
    return ( 
      <Main>
        <Ordem>
        <Mensagens></Mensagens>
        
        <listaDeMensagens></listaDeMensagens>
        </Ordem>
      </Main>
      
    )
  }
}

export default App;