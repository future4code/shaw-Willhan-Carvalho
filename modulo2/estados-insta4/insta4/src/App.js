import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
       <Post
          nomeUsuario={'Willhan'}
          fotoUsuario={'https://media-exp1.licdn.com/dms/image/C4E03AQFMk-cTaDNuFg/profile-displayphoto-shrink_200_200/0/1648055627013?e=1653523200&v=beta&t=CqQFsH4onlwXGQDc6oljCUQGZ3m5v-Mc4QOIKPjTMfU'}
          fotoPost={'https://picsum.photos/200/150'}
        />

       <Post
          nomeUsuario={'Juliana'}
          fotoUsuario={'https://media-exp1.licdn.com/dms/image/D4D35AQEEVAY1gEVw0g/profile-framedphoto-shrink_200_200/0/1643833387711?e=1648144800&v=beta&t=GXNeaUHpwEjOUapje1OO8xJnVduy40HJsuQGUBZum28'}
          fotoPost={'https://picsum.photos/200/150'}
        />
      </MainContainer>
      
    );
  }
}

export default App;
