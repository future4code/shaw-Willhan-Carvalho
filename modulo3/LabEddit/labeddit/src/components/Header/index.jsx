import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Container, Ul, Li, } from './styled'


import {
    
    
    AiFillRedditCircle,
    
} from 'react-icons/ai'


const Header = () => {

    const history = useNavigate()

    const handleLogout = () => {
        localStorage.clear();

        history('/')
    }

    
    return (
        <Container>
            <Ul>
                <Li style={{ fontSize: '1.2rem', color: ' #0093E9' }}>
                    <AiFillRedditCircle style={{ fontSize: '1.8rem' }} />
                    <span>LabEddit</span>
                </Li>
                
                
            </Ul>
        </Container>
    );
}

export default Header;
