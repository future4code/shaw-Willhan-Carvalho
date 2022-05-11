import React, {useState, useEffect} from 'react';
import { Container, Content, CommentTextArea, CommentsPost, Rules, H2,Ul, Ol, Li, Title, P, Button, CardComment,ContainerVotes } from './styled'
import Header from '../../components/Header'

import { useNavigate, useParams } from 'react-router-dom'

import api from '../../services/api'

import { IoReturnUpBackOutline } from 'react-icons/io5'

import { message, Input, Popover, Avatar, Comment, Space } from 'antd';
import { MessageOutlined} from '@ant-design/icons';
import { CgArrowUpR, CgArrowDownR } from 'react-icons/cg'

import {useForm} from '../../hooks/useForms'
import { usePrivateRoute } from "../../hooks/usePrivateRoutes"

import moment from 'moment'
import 'moment/locale/pt-br'

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
)
const CommentPost = () => {
    const [comments, setComments] = useState([])
    const { TextArea } = Input

    usePrivateRoute()
    const history = useNavigate()
    const key = 'updatable'
    const { id } = useParams()

    const {form, onChange, setForm} = useForm({body: ''})
    const token = localStorage.getItem('token')
    
    useEffect(() => {
        api.get(`posts/${id}/comments`,{headers: { Authorization: token }})
        .then(response => (
            setComments(response.data),
            console.log(response.data)
        ))
        .catch(error => {
            console.log(error.data)
        })
    },[])
    const handleCreateComment = async (e) => {
        e.preventDefault()
        
        try {

            message.loading({ content: 'Processando...', key });
                await api.post(`posts/${id}/comments`, form, { headers: { Authorization: token } })

            setTimeout(() => {
                message.success({ content: 'Comentário criado com sucesso!', key, duration: 2 });
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
        const { value, name } = event.target
        onChange(value, name)
    };
    const voteComment = async (vote, id) => {
        const body = {
            "direction": vote
        }

        api.put(`comments/${id}/votes`, body, {
            headers: {
                Authorization: token
            }
        }).then((res) => {
            message.loading({ content: 'Processando...', key });
            setTimeout(() => {
                message.success({ content: 'Seu voto foi enviada com sucesso!', key, duration: 2 });
                
            }, 1000);
        }).catch((error) => {
            setTimeout(() => {
                message.success({ content: `${error.response.data}`, key, duration: 2 });
                
            }, 1000);
        })

    }

    const DeleteCommentVote = (id) => {
        api.delete(`comments/${id}/votes`, { headers: { Authorization: token } })
            .then((response) => {
                message.loading({ content: 'Processando...', key });
                setTimeout(() => {
                    message.success({ content: 'Voto foi deletado com sucesso!', key, duration: 2 });

                }, 1000);
            }).catch((error) => {
                console.log(error.response.data)
            })
    }

    let content = (
        <>
            <TextArea
                style={{ height: '70%' }}
                placeholder={'Digite aqui seu comentario!'}
                required
                type={'text'}
                name={'body'}
                value={form.body}
                onChange={handleInputChange}
            />
            <Button type="submit">Criar Comentário</Button>
        </>
    );
    return (
        <Container>
            <Header />
            <Button style={{width: 100, height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={() => history('/feeds')}><IoReturnUpBackOutline style={{fontSize: 20, weight: 800}}/>Voltar</Button>
            <Content>
                <H2 style={{position:'absolute',top: 0, left: 50}}>Comentário</H2>
                <CommentTextArea onSubmit={handleCreateComment}>
                    <TextArea
                        style={{ height: '70%' }}
                        placeholder={'Digite aqui seu comentario!'}
                        required
                        type={'text'}
                        name={'body'}
                        value={form.body}
                        onChange={handleInputChange}
                    />
                    <Button type="submit">Criar Comentário</Button>
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
            <CommentsPost>
                 
                {comments.length === 0 ? ( <h4 style={{textAlign: 'center'}}>Esse post ainda não foi comentado</h4> ) : comments.map((res) => (
                    <>
                    <CardComment>
                    
                        <Ul key={res.id}>
                            <Li>
                                <ContainerVotes>
                                    <CgArrowUpR style={{cursor: 'pointer'}} onClick={res.userVote === null ? () => {voteComment(1, res.id)} : () => {DeleteCommentVote(res.id)}}/> 
                                    {res.voteSum}
                                    <CgArrowDownR style={{cursor: 'pointer'}} onClick={res.userVote === null ? () => {voteComment(-1, res.id)} : () => {DeleteCommentVote(res.id)}}/>
                                </ContainerVotes> 
                                <Comment
                                    author={
                                        <span>
                                            <p>{res.username}</p>
                                            <p>postado {moment(`${res.createdAt}`).fromNow()}</p>
                                        </span>

                                    }
                                    avatar={
                                        <Avatar src="data:image/jpeg;base64,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" alt="Han Solo" />}
                                    content={[
                                        <p style={{ fontWeight: 'bold', width: '70vw' }}>{res.title}</p>,
                                        <p style={{ color: '#84868a', width: '70vw' }}>{res.body}</p>
                                    ]}
                                    actions={[
                                        <Popover placement="bottom" title={'Comentário'} content={content} trigger="click">
                                            <IconText icon={MessageOutlined} text={res.commentCount}/>
                                        </Popover>,
                                    ]}

                                />
                            </Li>
                        </Ul>
                        
                    </CardComment>
                  </>
                    
                ))}
            </CommentsPost>
        </Container>
    );
}

export default CommentPost;