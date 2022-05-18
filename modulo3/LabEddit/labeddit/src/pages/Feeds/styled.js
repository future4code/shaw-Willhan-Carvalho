import styled from 'styled-components'

export const Container = styled.div`
    
    @media (min-width: 320px) and (max-width: 480px) {
        width: 100%;
        margin: 0;
        padding: 0;
    }
    
`
export const ContainerPost = styled.div`
    position: relative;
    margin: 12px 20px;
    height: 60px;
    background-color:#FFFFFF;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    padding: 0 20px;
    
    
`
export const Input = styled.input`
    width: 100%;
    padding: 10px 20px;
    margin: 0 20px;
    background-color:#f2f2f2;
    border:0;
    border-radius: 4px;
    font-size: 1rem;
    &:hover {
        background-color: #FFFFFF;
        border: 1px solid #9D9797;
    }
`
export const Icon = styled.div`
    font-size: 1.5rem;
    color:#9D9797;
    cursor: pointer;
    
    &:hover {
        background-color: #ccc;
        height: 80%;
        border-radius: 10px;
    }
`
export const ContainerGrid = styled.div`
    padding: 10px 20px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    @media (min-width: 320px) and (max-width: 480px) {
        margin: 0;
        padding: 0;
    }
    
`
export const SectionFedds = styled.div`
    background-color: #FFFFFF;
    border-radius: 4px;
    @media (min-width: 320px) and (max-width: 480px) {
        width: 100%;
        margin: 0;
        padding: 0;
    }
    @media (min-width: 481px) and (max-width: 767px) {
        width: 100%;
        margin: 0;
        padding: 0;
    }
`

export const ContainerVotes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.2rem;
    background-color: #f2f2f2;
    width: auto;
    height: 100%;
    padding: 4px;
    font-weight: 200;
`
export const ButtonStyle = styled.button`
    margin-top: 50px;
    cursor: pointer;
    @media (min-width: 481px) and (max-width: 767px) {
        position: absolute;
        top: 40px;
        right: 50px;
    }
`
/**
@media (min-width: 768px) and (max-width: 1024px) {}
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {}
@media (min-width: 481px) and (max-width: 767px) {}
@media (min-width: 320px) and (max-width: 480px) {}
 */