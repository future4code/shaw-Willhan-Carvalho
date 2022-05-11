import styled from "styled-components"

export const Container = styled.div`
    height: 100vh;
    overflow: hidden;
    background-color: #0093E9;
    background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
 
`
export const Form = styled.form`
    margin: 100px auto;
    width: 60%;
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 10px;
    
@media (min-width: 768px) and (max-width: 1024px) {
    margin: 100px auto;
    width: 100%;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
}
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    margin: 0 auto;
    width: 100%;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
@media (min-width: 481px) and (max-width: 767px) {
    margin: 0 auto;
    width: 100%;
    padding:0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
@media (min-width: 320px) and (max-width: 480px) {
    margin: 100px auto;
    width: 100%;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: none;
}
 
`
export const Logo = styled.image`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Text = styled.p`
    font-size: 1.8rem;
    color: #DAE0E6;
`
export const Input = styled.input`
    width: 50%;
    height: 50px;
    margin: 10px;
    border: 0;
    padding: 5px;
    border-radius: 4px;
    border: 0.3px solid #cccc;
    @media (min-width: 768px) and (max-width: 1024px) {
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    }
    @media (min-width: 481px) and (max-width: 767px) {
        width: 50%;
        height: 40px;
        margin: 5px;
        border: 0;
        padding: 5px;
        border-radius: 4px;
        border: 0.3px solid #cccc;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        width: 90%;
        height: 50px;
        margin: 10px;
        border: 0;
        padding: 5px;
        border-radius: 4px;
        border: 0.3px solid #cccc;
    }
 
`
export const Button = styled.button`
    width: 30%;
    height: 50px;
    margin: 10px;
    border: 0;
    padding: 5px;
    border-radius: 4px;
    cursor: pointer;
    @media (min-width: 768px) and (max-width: 1024px) {}
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {}
    @media (min-width: 481px) and (max-width: 767px) {
        width: 30%;
        height: 40px;
        margin: 5px;
        border: 0;
        padding: 5px;
        border-radius: 4px;
        cursor: pointer;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        width: 80%;
        height: 50px;
        margin: 10px;
        border: 0;
        padding: 5px;
        border-radius: 4px;
        border: 0.3px solid #cccc;
    }
 
`
export const NextSignup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 30%;
    @media (min-width: 320px) and (max-width: 480px) {
        width: 80%;
        padding: 5px;
    }
    @media (min-width: 481px) and (max-width: 767px) {
        width: 50%;
    }
    
`