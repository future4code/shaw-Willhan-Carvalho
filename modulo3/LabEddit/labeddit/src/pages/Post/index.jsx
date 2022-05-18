import { Input, message } from 'antd';
import React from 'react';
import { IoReturnUpBackOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import { useForm } from '../../hooks/useForms';
import { usePrivateRoute } from "../../hooks/usePrivateRoutes";
import api from '../../services/api';
import { Button, CommentTextArea, Container, Content, H2, InputTitle, Li, Ol, P, Rules, Title } from './styled';





    
const Post = () => {

    const { TextArea } = Input;

    usePrivateRoute()
    const history = useNavigate()
    const key = 'updatable';

    const {form, onChange } = useForm({title: '', body: ''})
    const token = localStorage.getItem('token')

    const handleCreatePost = async (e) => {
        e.preventDefault()
        
        try {

            message.loading({ content: 'Processando...', key });
                await api.post('posts', form, { headers: { Authorization: token } })

            setTimeout(() => {
                message.success({ content: 'Post criado com sucesso!', key, duration: 2 });
                history('/feeds')
                
            }, 1000);
            
        } catch (error) {
            message.loading({ content: 'processando...', key });
            setTimeout(() => {
                message.error({ content: 'Algo deu errado!', key, duration: 2 });
            }, 1000);
            
        }

        
    }
    const handleInputChange = (event) => {
        const { value, name } = event.target;
        onChange(value, name);
    };
    return (
        <Container>
            <Header />
            <Button style={{width: 100, display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={() => history('/feeds')}><IoReturnUpBackOutline style={{fontSize: 20, weight: 800}}/>Voltar</Button>
            <Content>
                <H2 style={{position:'absolute',top: 0, left: 50}}>Postar</H2>
                <CommentTextArea onSubmit={handleCreatePost}>
                    <InputTitle 
                        type={'text'}
                        name={'title'}
                        value={form.title}
                        onChange={handleInputChange}
                        placeholder={"Título do post"}
                        required
                    />
                    <TextArea
                        style={{ height: '70%' }}
                        placeholder={'Digite aqui seu comentario!'}
                        required
                        type={'text'}
                        name={'body'}
                        value={form.body}
                        onChange={handleInputChange}
                    />
                    <Button type="submit">Criar Post</Button>
                </CommentTextArea>
                <Rules>
                    <Ol>
                        <Title>Postando no LabEddit</Title>
                        <Li>Ponha-se no lugar do próximo</Li>
                        <Li>Comporte-se da mesma forma que na vida real</Li>
                        <Li>Procure a fonte original do conteúdo</Li>
                        <Li>Pesquise se o conteúdo já foi postado antes</Li>
                        <Li>Leia as regras da comunidade</Li>
                    </Ol>
                    <P>Por favor, fique atento à política de conteúdo do LabEddit e pratique boa Labeddiqueta.</P>
                </Rules>
                
            </Content>
        </Container>
    );
}

export default Post;