import { message } from 'antd';
import React from 'react';
import { AiFillRedditCircle } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "../../hooks/useForms";
import api from '../../services/api';
import { Button, Container, Form, Input, Logo, NextSignup, Text } from './styled';





const Signup = () => {
    const { form, setForm, onChange } = useForm({name: '', email: '', password: '' })

    const history = useNavigate();
    const key = 'updatable';

    const handleInputChange = (event) => {
        const { value, name } = event.target;
        onChange(value, name);
    };

    const handleSignup = async (e) => {
        e.preventDefault()
        const data = {
            'email': form.email,
            'password': form.password,
            'username': form.name
        }

        try {
            message.loading({ content: 'Processando...', key });
            const response = await api.post('users/signup', data);
            const { token } = response.data;
            localStorage.setItem('token', token);
            setTimeout(() => {
                message.success({ content: 'Acesso Liberado', key, duration: 2 });

                history('/feeds');
            }, 1000);

        } catch (error) {

            message.loading({ content: 'processando...', key });
            setTimeout(() => {
                message.error({ content: 'Email ou Senha Inválido', key, duration: 2 });
            }, 1000);
        };
    }
    return (
        <Container>
            <Form onSubmit={handleSignup}>
                <Logo>
                    <AiFillRedditCircle style={{fontSize: 70}}/>
                    <Text>LabEddit</Text>
                </Logo>
                <Input 
                type={'text'}
                name={'name'}
                value={form.name}
                onChange={handleInputChange}
                placeholder={"Nome do usuário"}
                pattern={"^([a-zA-Z]|[à-ú]|[À-Ú]|[ ])+$"}
                title={"Nome inválido"}
                required
                />
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
                pattern={"\\w{8,}"}
                title={"A senha deve conter no mínimo 6 caracteres"}
                required
                />
                <Button>Cadastre-se</Button>
                <NextSignup>
                    <p style={{color:"#FFFFFF"}}>Ainda não tem uma conta?</p>
                    <Link to="/">
                        <span>Login</span>
                    </Link>
                    
                </NextSignup>
            </Form>
        </Container>
    );
}

export default Signup;