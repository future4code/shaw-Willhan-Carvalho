import styled from 'styled-components'; 

//*{ margin:0, padding:0, box-sizing: border-box}

export const HeaderHome = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    h2 {grid-column: 2/5;
        color: #a60311;   
    };
    img {
        border-radius: 10px;
        :hover{
            cursor:pointer;
        }
        :active{
            background-color: #a60311;
        }
    }
    `

export const ContainerPerfil = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    height:80vh;    
    p {
    margin: 15px 30px 15px 30px;
    }
    img {
    max-width: 90vw;
    height:40vh;
    border-radius: 10px;
    margin: 0 10px
    }
    `
export const FooterHome = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: center;
    img {
        border-radius: 10px;
        :hover{
            cursor:pointer;            
        }
        :active{
            background-color: #a60311 ;
        }
        
    }
    `

export const ImagemCentro = styled.img`
    width: 30px;
`

export const BotoesFooter =  styled.div`
    width:50%;
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    `

export const ContainerMatchList = styled.div`
    display:flex;
    flex-direction: column;
    height:100%;
    `
export const TituloMatchList = styled.h3`
    color: #a60311;
    display: flex;
    justify-content: center;
    `

export const Fotos = styled.img`
    height:40px;
    max-width: 40px;
    border-radius: 20px;
    `

export const ContainerCardMatchs = styled.div`
    display:flex;
    align-items: center;
    margin: 10px;
    border-radius: 10px;
    p {
    margin-left: 10px;
    }
    `
export const Maincards = styled.div`
    display:flex;
    flex-direction: column;
    flex-grow: 1;
    `