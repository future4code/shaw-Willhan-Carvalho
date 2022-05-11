import styled from "styled-components"

export const Container = styled.div`
    background-color: #FFFFFF;
    width: 100%;
    height: 50px;
    
    
`
export const Ul = styled.ul`
    
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
        
   
`
export const Li = styled.li`
    
    display: flex;
    flex-direction: row;
    font-size: 1.2rem;
    padding: 3px 20px;
    align-items: center;
    justify-content: center;
    color:#9D9797;
    cursor: pointer;
        
    @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
    flex-direction: row;
    font-size: 1.2rem;
    padding: 3px 5px;
    }
`
export const Icon = styled.div`
    font-size: 1.8rem;
    color: #FF4500;
        
   
`