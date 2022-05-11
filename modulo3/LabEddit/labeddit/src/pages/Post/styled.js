import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 320px) and (max-width: 480px) {
       
        width: 100%;
        height: 100vh;
        padding: 0;
    }
    
`
export const Content = styled.div`
    position: relative;
    display: grid;
    padding: 30px 50px;
    grid-template-columns:2fr 1fr;
    gap: 50px;
    width: 80%;
    height: 80vh;
    border-radius: 10px;
    @media (min-width: 320px) and (max-width: 480px) {
        display: flex;
        flex-direction: column;
        gap: 50px;
        width: 100%;
        height: 100vh;
        padding: 0;
        
    }
    
    @media (min-width: 481px) and (max-width: 767px) {
        position: relative;
        display: grid;
        padding: 0;
        grid-template-columns:1fr 1fr;
        gap: 10px;
        width: 100%;
        height: 100vh;
    }
`
export const CommentTextArea = styled.form`
    border: 1px solid #ccc;
    height: 80%; 
    background-color:#FFFFFF;
    padding: 30px;
    
    @media (min-width: 320px) and (max-width: 480px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        
    }
    
    @media (min-width: 481px) and (max-width: 767px) {
        height: 100%;
        
    }
`
export const InputTitle = styled.input`
    margin-bottom: 50px;
    border: 1px solid #ccc;
    width: 100%; 
    background-color:#FFFFFF;
    padding: 10px;
    
`
export const Rules = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #ccc;
    height: 80%; 
    background-color:#FFFFFF;
    
    @media (min-width: 481px) and (max-width: 767px) {
        height: 100%;
        
    }
`
export const H2 = styled.h2`
    color: #FFFFFF;
    font-size: bold;
    
`
export const Title = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
    
`
export const Ol = styled.ol`
    margin: 10px 10px;
    
`
export const Li = styled.li`
    width: 95%;
    border: 0;
    border-bottom: 1px solid #ccc;
    padding: 10px;
    font-weight: bold;
    list-style: none;
    
`
export const P = styled.p`
    width: 95%;
    border: 0;
    border-top: 1px solid #ccc;
    padding: 10px;
    font-weight: 500;
    margin: 10px 10px;
    
`
export const Button = styled.button`
    margin: 10px auto;
    width: 40%;
    height:40px;
    border: 0;
    background-color:#0093E9;
    color: #FFFFFF;
    cursor: pointer;
`