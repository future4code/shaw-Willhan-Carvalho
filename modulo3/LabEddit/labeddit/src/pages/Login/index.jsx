import React,{useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom'

import api from '../../services/api'

import { Container, Form, Logo, Input, Button,Text,NextSignup } from './styled'
import { message } from 'antd';

import { AiFillRedditCircle } from 'react-icons/ai'

import {useForm} from '../../hooks/useForms'


const Login = () => {
    
    useEffect(() => {

    },[])
    const history = useNavigate()
    const key = 'updatable';

    const {form, onChange, setForm} = useForm({email: '', password: ''})

    const handleInputChange = (event) => {
        const { value, name } = event.target;
        onChange(value, name);
    };

    const handleLogin = async (e) => {
        e.preventDefault()

        const data = {
            'email': form.email,
            'password': form.password
        }

        try {

            message.loading({ content: 'Processando...', key });
            const response = await api.post('users/login', data)
            const { token} = response.data
            localStorage.setItem('token',token)

            setTimeout(() => {
                message.success({ content: 'Acesso Liberado', key, duration: 2 });

                history('/feeds');
            }, 1000);
            
        } catch (error) {
            message.loading({ content: 'processando...', key });
            setTimeout(() => {
                message.error({ content: 'Email ou Senha Inválido', key, duration: 2 });
            }, 1000);
            
        }
    }

    return (
        <Container>
            <Form onSubmit={handleLogin}>
                <Logo>
                    <AiFillRedditCircle style={{fontSize: 70, }}/>
                    <Text>LabEddit</Text>
                </Logo>
                <Input
                type={'email'}
                name={'email'}
                value={form.email}
                onChange={handleInputChange}
                placeholder={"E-mail"}
                pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"}
                title={"E-mail inválido"}
                required
                />
                <Input
                type={'password'}
                name={'password'}
                value={form.password}
                onChange={handleInputChange}
                placeholder={"Senha"}
                title={"A senha deve conter no mínimo 8 caracteres"}
            
                />
                <Button>Entrar</Button>
                <NextSignup>
                    <p style={{color:"#FFFFFF"}}>Ainda não tem uma conta?</p>
                    <Link to="/signup">
                        <button>Cadastre-se</button>
                    </Link>
                    
                </NextSignup>
            </Form>
        </Container>
    );
}

export default Login;