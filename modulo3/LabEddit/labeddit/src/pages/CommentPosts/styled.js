import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    
`
export const Content = styled.div`
    position: relative;
    display: grid;
    margin-top: 50px;
    padding: 30px 50px;
    grid-template-columns:2fr 1fr;
    gap: 50px;
    width: 80%;
    border-radius: 10px;
    list-style: none;
    @media (min-width: 320px) and (max-width: 480px) {
        position: relative;
        display: grid;
        margin-top: 50px;
        padding: 0;
        grid-template-columns:1fr;
        gap: 50px;
        width: 100%;
        
    }
    @media (min-width: 481px) and (max-width: 767px) {
        position: relative;
        display: grid;
        margin-top: 50px;
        padding: 0;
        grid-template-columns:1fr 1fr;
        width: 100%;
    }
    
`
export const CommentTextArea = styled.form`
    border: 1px solid #ccc;
    height: 80%; 
    background-color:#FFFFFF;
    padding: 30px;
    
    @media (min-width: 320px) and (max-width: 480px) {
        width: 100%;
        height: 80vh;
        
    }
`
export const Rules = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #ccc;
    height: 80%; 
    background-color:#FFFFFF;
    
    
`
export const CommentsPost = styled.div`
    border: 1px solid #ccc;
    width: 75%;
    background-color:#FFFFFF;
    padding: 30px;
    
    @media (min-width: 320px) and (max-width: 480px) {
        width: 100%;
        
    }
    
`
export const H2 = styled.h2`
    color: #000000;
    font-size: bold;
    
`
export const Title = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
    
`
export const Ol = styled.ol`
    margin: 10px 10px;
    list-style: none;
    
`
export const Ul = styled.ul`
    margin: 10px 10px;
    list-style: none;
    
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
    background-color: #0093E9;
    color: #FFFFFF;
    cursor: pointer;
`
export const CardComment = styled.div`
    
`
export const ContainerVotes = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.2rem;
    background-color: #f2f2f2;
    width: auto;
    height: 100%;
    padding: 4px;
    font-weight: 200;
    
`
/**
@media (min-width: 768px) and (max-width: 1024px) {}
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {}
@media (min-width: 481px) and (max-width: 767px) {}
 */