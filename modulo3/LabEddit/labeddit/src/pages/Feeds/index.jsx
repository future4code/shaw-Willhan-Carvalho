import React, { useState, useEffect } from 'react'
import { usePrivateRoute } from '../../hooks/usePrivateRoutes'
import Header from '../../components/Header'

import { useNavigate, Link} from 'react-router-dom'

import { Container, ContainerPost, Icon, Input, ContainerGrid, SectionFedds, ContainerVotes, ButtonStyle } from './styled'

import api from '../../services/api'

import { List, Avatar, message, Comment, Space, Spin} from 'antd';
import { MessageOutlined, LoadingOutlined } from '@ant-design/icons';

import { AiOutlineReddit, AiOutlineApi, AiOutlineSearch } from 'react-icons/ai'
import { MdOutlineInsertPhoto } from 'react-icons/md'
import { CgArrowUpR, CgArrowDownR } from 'react-icons/cg'

import moment from 'moment'
import 'moment/locale/pt-br'

const Feeds = () => {
    const [posts, setPosts] = useState([])
    const [visible, setVisible] = useState(false);
    const [ search, setSearch ] = useState('')

    usePrivateRoute()
    const token = localStorage.getItem('token')
    const history = useNavigate()

    useEffect(() => {
        api.get(`posts/?page=1&size=150`, { headers: { Authorization: token } })
            .then((res) => {
                setPosts(res.data)
            }).catch((error) => {
                console.log(error.response.data)
            })
            
    }, [token, posts]);

    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
    const key = 'updatable';
    const IconText = ({ icon, text }) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    )

    const votePost = async (vote, id) => {
        const body = {
            "direction": vote
        }

        api.put(`posts/${id}/votes`, body, {
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

    const DeletePostVote = (id) => {
        api.delete(`posts/${id}/votes`, { headers: { Authorization: token } })
            .then((response) => {
                message.loading({ content: 'Processando...', key });
                setTimeout(() => {
                    message.success({ content: 'Voto foi deletado com sucesso!', key, duration: 2 });

                }, 1000);
                setVisible(false)
            }).catch((error) => {
                console.log(error.response.data)
            })
    }

    moment.locale('pt-br')

    const filteredPost = posts.filter(result => {
		return result.username.toLowerCase().includes(search.toLowerCase())
	
	})
    return (

        <>
            <Container>
                <Header 
                posts={posts}
                />
                <ContainerPost>
                    
                   
                        <Input onClick={() =>{history('/post')}}placeholder="Postar" />
                    
                    
                </ContainerPost>
                <ContainerPost>
                    <Input 
                    type="text" 
                    placeholder="Buscar no LabEddit" 
                    onChange={e => setSearch(e.target.value)}
                    
                    />
                    <AiOutlineSearch style={{ position: 'absolute', right: 80, fontSize: '1.4rem' }} />
                </ContainerPost>
                <ContainerGrid>
                    <SectionFedds>
                        <>
                            {posts.length === 0 ? (
                        
                            <Spin indicator={antIcon} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 50}} />
                            )
                            : 
                            (
                            <List
                                size="large"
                                pagination={{
                                    
                                    pageSize:5,
                                }}
                                dataSource={filteredPost}
                                bordered
                                renderItem={item => (
                                    <>                                    
                                        <List.Item
                                            key={item.id}
                                            actions={[
                                                <Link to={`comments/${item.id}`}>
                                                <ButtonStyle>Comentar</ButtonStyle>
                                                </Link>
                                                
                                                
                                            ]}
                                            
                                        >
                                            <ContainerVotes>
                                                <CgArrowUpR style={{cursor: 'pointer'}} onClick={item.userVote === null ? () => {votePost(1, item.id)} : () => {DeletePostVote(item.id)}}/> 
                                                {item.voteSum}
                                                <CgArrowDownR style={{cursor: 'pointer'}} onClick={item.userVote === null ? () => {votePost(-1, item.id)} : () => {DeletePostVote(item.id)}}/>
                                            </ContainerVotes> 
                                            <Comment
                                                author={
                                                    <span>
                                                        <p>{item.username}</p>
                                                        <p>postado {moment(`${item.createdAt}`).fromNow()}</p>
                                                    </span>

                                                }
                                                avatar={
                                                    <Avatar src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYZGRgaHRwcHRwcHBgcHBoaGhwcGhwhHx4hIS4lHCErIRoaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQrJSs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAgMEBQYBBwj/xAA/EAACAQIDBQUECAUEAgMAAAABAgADEQQhMQUSQVFhBiJxgZETMqGxB0JSYnLB0fAUgqLh8RUjksJTsjND0v/EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAIREBAQEBAAIDAQADAQAAAAAAAAERAiExAxJBUSJhcRP/2gAMAwEAAhEDEQA/APZoQhACEIQAhCEAJyBMxu3u3tCjdaP+8/MGyKerfW/lv4iOS30GylDtPtbhKFw1UMw+qnfa/I2yB8SJ5RtntPicRcVKhCH6id1fMDNv5iZSF5pPi/pa9Jx30lnSjQtyNRvmq/8A6lDiu3OMfSqEHJVUfEgn4zJM8SHmk45n4NXdbb+Jf3sRVP8AO4HoDabDsPSdkas7sxJ3V3mY2A1Of7ymW2R2TrVgGbuKeLA7x8v1m62Js18Mm4G9ot76bpF9bcD8JHfUzIGZ7cYt0xC7rsvcGjEcW5SJh8RiKVMVqmJrIp9xA77z+RNgOpmy2rsZK703ce4b25jWx8/zjGP2PSeoHqAuQLInADw8eJykzqZhysnhu22OU92qWH2WRW+Nt74y8wX0lVVsK+HDDiyEqf8Ai1wfUS/pYNEUBEVOlhl6RL4W+rf0r+cVvP8AAlbK7cYOvYe09mx+rUG7/VcqfWaVWBFwbg8RPOdrbCd0K03CX1si59CRmJk6b4/Z5ujMtMHh36Z8VOS+OR6xfWX0Huk7PPez30l0qlkxK+yb7YuaZ8eKedx1m9pVVYBlYMpFwQQQRzBGoiss9g7CEIgIQhACEIQAhCEAIQhACEIQDkq9tbao4VN+q1r+6ozZjyUfnoI7tTHezQkWLWyB08+k8n29SqVKm8xZ3OpOgHAAaKOgl88b5PLmudou1dfFErf2dLginUffb63hp04zPqLZ2uJJxOFZDZhYyJUNspvJJ4ifRlzGS0WzWN7X6GXOwqdCtUVP4dmY6987gHE6X8rw66wp5Vez9nVa77tNSeZ4DxPCei9nuy1OgA72d+ZGS/hH5y2wVOmilUUKq5ZAAdZ1sQSO6M292/LmeQ/tMOu7VYdr4sL3Rm3L/HyEepMbZnPwtaRcPQCDW7HVjqT++EiYvEszqiXChhvkf8rDyBkn9dWVWra3Im3wNvjb1icOwI3vrHXxGVo1jG7jX5ef74yEztZkBs47w/EMz5H/ALHlApFnUqEcLjjbUeXGCuCLjMSPg8UHQMPAjiDxE5UBQ7yjL6w/MdfnEMSd+N1UDAggEHUGRqwJsy20ytr+jDoZyliwQd7IjXX15wPGd2x2ORzv0juHiv1T4cpZdmdm4nC//FUumrU2zQ87fYPUed5cBryZTYAS5bmUXxFlsza6ViV9yovvU294dR9peo87aSzmRxNFN9agA310biPAy3wW2kZlpuwWo190HLftrbr0/Ymzz4JcQhCICEIQAhCEAIQhAOSi7RdoKeFUBiC7e6vG2lz0+frLTHYkU0LHO2g5ngJjMbs5MQxqMLuTqeFtB4CXxzvm+lc875Qae22rbzMLHrxMhY/HOgugBPHpLJKG69mQbo4iU+29oqm8EXXXpOj/AI1tyYz+JxRdizmV9Qx2vUHn8JEd75ROe03Uab/shs7cpBrWeoASfspw8z+9Jhtn4J61QIgub58gOJJ4T1vCUQigevpaZfJ1+HyTinChUGh4DiBw8zYeceprugsdTr0tw8BI2RcOfwr48T8PQHnJLqCLGZKNhi3eN7DNV59T+ki0XUPucVBdz95v23wjmJxoRHc6DIdTp88vIyk2SWIqu311GfO5YExnJ4abe3l8R85X16d1U3s6nd3uvXocv+UkYWvvqeYJU+KkiN4pTnb62XgwzU/C3pEUQPasj74WwNvaJxU/aHMdf72uKdUMAQbg8ZHcqwUnInQ8r52/t0kRKZom4HcOu6LgeXD9+EY9p5O433WPox/I/PxjdamHG8psw0PhwI9YpqqshPvLbhnlxkehU3WsTe9s+d/dbztY9QOcDKwtYqd1hbPTken3Tw8x0k4ueEjYijvC41/eR6TmEr7wIPvLkf3+9DCXC/2Z2ltMUELPcjgQL58unjPPdo7UetU9pcqQRu2JutjcWPA8bzf7VVXvScd2oDY8mH7E8wxNFqbsjaqSJpxmp617F2H7V/xK+xqkCuoyOntFHEfeHEeY422U+cMPiWRlZWKupDKw1BGhE9u7IdolxlHeyFRLLUUcDwYfdbUeY4Se+c8wpWihCEgxCEIATk7IO0qtl3Rq3y4wgZ/bO0d5jb3RkP185XYOuAbm9zJ7UftCQK1MC86uczI6ePrZhvFVBv8AEjkJXdoWREG4neI04xNWsb2Bj6UmrAneG8BYAyj658PPMSGuTu6cuE5hKSt3nYqo5KST4cB6zVYPYrpWPtCGDarJe2sEoTdRN2/STZrCfH+k9k8ZTLtSpUioVd5na28xvYXt5zTYh9FGrfAcT++JEo+y+BFNGdvec3v90afmfOSK1YurvmFOQOh3b8PK5J8BwnP1mliyogE3GijdHLhf8h5GOYmpZSRrw8dB8ZHoncpi+uWXNmOnqZzFOTa3uhhvHwG8APS/+ZJq/FUjVqph1PdUXc8ufnb4tLTatJaaqFFlCEW/CQR8LxHZajdXrN71RiR0UHIfvkJY7Xw+/TOVyM/EWIPwJjTevOIi0dxUbgwAb8RGR89PSLqIGBB0Ml4YLUpLxDKPlK923CVc6Z35jn+sKJUR6dgVY3swYHoxtfyJJ9JORuB14yNjkuu8OAN/wkZ/r5CIp1t9Q6ZkZEc+Y/Q/rEfuHzhVuSo3SdSuV/EaHzlbiaLr3bgjPd1BscyuV8xa4y4dJbU3BFxxia1MMLH14g8CICVzCVSyAnXQ20v06cfOM4qyN7Xhaz+HPy+XhIuEqlGZGGguLcQOI8iBb7smYzEoiXfNTkeOR/KAzyg9oH7iOOeR8Rf8piO0qbzCsPrAB+jDIHzA+Blzi8bZGpe8Ea6G/wBSxt8CPjKyrUBU390jO+lpfPjyqzZjPirLbs12gbCYhKq3K6Oo+uh1HjxHUDrKfFhFyRifkPORi812WMcx9R4XEpURaiMGR1DKRoVIuD6R+eWfQ72h3lfBOc0u9K/2Se+vkxDD8Z5T1Sc9mVQhCEA5KOvU3nZr5aDwH7v5yw2nW3aZN7E5DxP9rygSrlrL458af1tng7XNpX4nvBhle0nMwYCQ62CLvvA2HHrNOfHtfFk9s1/BOzgWIvxMtqWz3Qd036y5fCqwAvO0rAWGgjvf8O/N/FdTokkMw70Z2qVyU6n1A4+fAdZYYisgzvaNJSS+9a5P1jmfU8OkVtpW2+UKmocWKkBTbdOhFha4HyiNopdQBzF/Brr+ccWqN1n57zDwzI+FoxRxIO8xzARGPxaYUj2JYl0QakkjyFs/C9/5Y9t2luUN1eG94klG18zObMp71V34oAi34bwVm/6xW20c0nG8l7XFwRmuYF7nlGm3yssBRCIiDRVA9BaPmUuG2/TuEc7jHS5BVvBhl62MuFcGNFlR8HRKFlA7hJZel82HrmPHpHMThlcWPiDxB5iO70LwGs6Uek264un1XGduhHAfvwMHhQCVVgL3KcQQcyp8Dcg8LnkZoSAZAxezg2aHcN75aX525+HneLFTrVa7FGORF82X/svPrb55GQ/fUFT1B1zlglPfQCoq36aX5jiJX4jBeyDOjEgC5Q56ZndOoPje/wAYYcppkDi5ydfVT+Y+YlLtaoVo7j5NvZW0K5kW8MhLcuGO8mTgZqcrjkf1Eosftkb5pVqV1OhXI9MjoRzB+cU9rjPVWswPPL8x+frK/HYkIhVhcXtbpqJO2gyj3GLDhdSGBGYvw8xK3alHfW41+c0HSlZs8tJzeiIXlMk/Y21Gw2IpYhb71Nw1h9ZdGX+ZSy+c+n8JiVqIlRDdHUMpGhVgCD6GfKM93+h7avtcD7JjdsOxTruN308hdlH4JHUNv4QhICi7RYkKFXxP5D85mqGJYkDQSy29VDVWDHIWA9M/iTKrEUQAGQ3E6OJnLr+PmTnL+rZdMo0MVYdYnZrFtf7ztXDC56Q8blZ2SdWUmnim3wLXB5SXiXsp3RnKsE02XdUsG48pdmndQDrFc1l3ZsrLFrtZwd4H4SwxlbdTdGRbujnnrbra/wAJL/0273OkdfBLvbxzPC/AcbcrwtlX13zcjJbZxTIu5kDY5DgpW1uvGRqONUOynSyofJbSw7Q7PBcPe1go6HvG9/X+lpTVcOqYhbNvIzIb8ff7wI1GvoZlZNGtNg9oNToO5pu7rbeRAC9wqg5Xz0mY2rW2hVpNiWdaFNVLBQLtbgG3hqdLCb9cMoLML3a1/Lj6fKQsbg2fusbp9k3+YOcJjL3fDzavtzE06aM74fEI4HdsN9cr2IAUjxzk7s9tutUyo79PkGO/SJ5BiO6emZmyPZvDMCAltefHXKO4HYopZI3dvfdKgi51tncDpeKb+qtkMCniSheo4uBvBVW1iuef2v7S5qpvqCGsRmDrnYjz1jhW4tOUk3QF5AD0jRapNp7TxNHP2IdToVLXueBFr+fylDiu2zhijNTosNQ61GYXz0AsJsMehdGQbwuLXB3cjrZhofSYzE9lnSqWoKguAGDqHDZkk3Zfe87mK+lTEzZ+2aNUjfxLOfsq6oP+Pdb5zT0aCFRuMw8WY+oa955bjexGILliFuxJyCqgz0sDl4C81GC2FiMNVQ4ZyaR99HY7g/DqVN/KObRVqlAqzU3zC2KHTunIW5EEGZrtQ5VwpUMAAVJ95b5GzcuhBmk7SYz2TUXtkSyt+EgH52PkZmu01Vaiow+srZHUWJXPzDDyizyrnzFCahHvDzByiXMC28ufEZyqxGNdSVsMuPOWduHMXTTNmEqTHK1YsczGo5MZ26J6D9DG0dzGvSJyrUz5vTO8v9JqTz6XPY/G+yx+FfS1VFJ+653G/pcwvon09CEJkbzLa+NZalQul03mIP8AMbSoTbrOCAtlXOXuJG+7KfducvOdTZdJLtbLjOyZI7czCNnMxKuG11Eu3PeGfCZ92AN0yAkjA4wO1ibnlJ6ml3xvldsM7j0jxJUXMZfu2Ikle8MxrMq4unUa4vOVnAGeQnRlkBlImJxC33WHhyik8lJtQDhFqb3eNg3DXJcvixMze0cIX7qAFgx3dN42yzblYX5ZCasJmWQ97ivBh+vIyhxAdXLgH3iwYKSNePLkQesXU8tZ7aTCVd5Fa1rgZcjxHrFvGcHiA6Bl0PLnxj94mf6QicYuchAW6TWqhAWbQRnCYxaguv8AidxKK43GOo88rf2nMHhVprugk3N4H4xJvOPCcgSKyK91OfT/ADF06AyyIt1yjgTpb0jghLirdZXt6D7OmR9u3kVb9JkaGAdtyzr3ywAPAroCeG9Y2/vNR2uV6joijuJmzcAzXsOpt6b05hsIrIz91PZ7pIUWUhLMDa/dNhbjoIarn08/euV3stM7HI5nn43lfiMXv/VEfqYvfLq3G9vGQQsrmanqkATtoq07uy8Rpu06rlCHGqkMPFTcfKKIiKgyPgYYb6k/1VOYhPM/9ZhM8NoK9Dvcb3Nz5xqnTbebkcrTtXFEV3Rgfea3hvG0tKa8TN9yOy95EA4AnIZSl2ZgGTEMzTWq3ESNiaYYXtY/OTOv6z5+S9XKmYZww8JIJlRgKTW1sJbb/CR1MrD5OZOslKkPFhTrpF4wMV7msz+PLrYOb34CPmafx8751bNXQDf46SG+JCuXF91ve6Hn+v8AaRf4sKASLDrGMdtRF0+Er6xr/wCcntZbOqpvuqFSDZxukEd/I6dVJ85YXnmvZ7aC0sSDorXVugY90+RA9TPSQZkx6mV28BOXiHqgakDxMSTdbChnR9GS9jzBFiD0NgfECOquZOefXL04TiuDoRFb0YKheJvOgxB2JqVAoJOgF52U+1Nq0UdaVR1W/eIOlhoDyuc8+RgciqrVXrPcAsL3AA7o6k6XtxMpu1/aCmlJsNQILt3XYaAcRfiTp0nO2najeX2WGfu6Oy8QR7q9OswAErnlV6/BFKsFEdVZciCQs7uR5Ui9yXhailI3UFgZMNOM1KRYFRqch4nISbBrff6U3KE9R/0FOsJkau2nQK12O6LGxvxzH+YE2Wy5yX2mIUoT9a636jMfM+kqcK2q8OBmk88yujN5lS0c2zykbEYsIQWIkGrWKPa+8JF2vikdVDCxvl4x4ufH5Wb7WUrdRlxMkYTGb1r+UzdDEEgIBJ1GqV8Y/rMVfhmZGlp1gTbQxiph7tmL9Zn6+INIM5Y7x+ERiNvO1Kysq905n3muOAvlJs+vpzdcXm+C8fuv3UW4B1vYHwyMhVqTbtkRS3Alj6nLSS0GVowuEIuQ758yDbwuI9o+1ZnGlUpexan/ALine3w3vk5G4I0I4cLCaTsr2iWoBSc2cZAn64A/9hxHnzlXtPY7sS4ffPIgA26EZfKZ/DI9OuodCoLjW4N2Frg8r8pPXMzYnzbleuGV+G2YEdnLu5Yk98g26DLIdJC2bta1kqHoH/Jv1/ZvA0zFlngujgqfvFbnzPwkWrhqZbIDwsB8CLyRvRLNDUyKqvSrIwNIKwLC4J3QFvn6D1luJDq7QQZA7x5Ln8dB5mRXxznQBR6n9B8Y8tUkbW2klBC7Hoo4seAE82xYrVqhfcZmbiFO6L/DIACbd6ILbzDeYaFsyPC+nlF2lTk54eb4nYTJm6Pnne4+JBjQwKW934majbu0t66IcvrHn0lEZtzzGdUuJw+42Wh0ggkjaRzUdDE4anvG0n9IpFjgWOVQu8d0ZQtKBh1kzs7hPa4vDprvVUv+EMGb+kGR3XL9/vhNZ9Fez9/HByMqKO1+TP3F+DP6SerkOPboQnZzKUfazD72HZrXNPvj+W+9/SWnn2A2uozuQbz1plBBBzvlPHNsdn2pVXUMe6x3fwHNfgR5gzX47+N/hu/4rTEV1cGzd7W8SuBTEBd823OXOVmysMxN2BBGXiJOw+Fc1E3AQoPemrfr0vKWERCBacxSAmwFjJOIQ6qMxzlDXrPUJBPd4kZb3QHl1k6znWTbWf2niTXrfwyOSL99xpYagfLx85avs+miBVRbkqL2BbUXNzmTa8dw2HRXO6oUKABYAa5n4BYxtpGdLIe+pDgA55ZfnFfLDrq27VosGawmawfaOw3aqG4yJUfNdRLbDbYov7ri/I5H4w1OpYrodGHqImsqMLPukdbRVgeAMBTUcB6QNV4pAoJRt631Ddr+BFz63kzZG0aq91qb7nDeKgr4Z3I8spJhF9YNSHxrnSyj/kfjl8DGHu3vEt4nL00nLwvCcwOidBiYXjCfhsAz5iwlP2kdqK7nFuI4D9YvF7cagvdbvHQfnMvj9qPVzdr3jkuotxAaIdwouTaRMZj1TIZty/WV9NHqtmcvh5Sr1niJxdbKrj2oqHvIO7b5n4zmNxiqzpTQKGN97jY52H2ROYekEFhG2wu+9tCRzA+ZA5RXx5EqMjxwOLReK2ZUpjeZbr9oEEedtJF3o5dFhxmnr/0SbM3MM9cjvVny/BTuq/1Fz5ieRYHDNWqJRQXd2VV6Fja56AZnoDPpHZ2DWjSSkgsiKqjwUAZ9Zn8l8YcS4QhMVOTO9qsCCBWAzTI9UJ/In4maKIqIGBBzBBBHMHIx83Lqub9brA0d0i4ykujiVGtgOci47CnDOVzZSbqT9knLzGkpdsY1VOfujRRqza+gyvN7ZY6e+pedWmPx5qXVck58X/Rfn4awKrEbqrlc2vyABJ+VvOZbEbSqsSd8qOS5W/Mx7YVRmr3ZiTuNqSeKw+uRy/ba1FOmF045njcyFtDAlyHRt1x6GTrwvEasfCJVFqybr/aGV/Bh8jKTauwnTvJ31/qHprNdeMvSBN7kHofy0hSxi8FtWrTyVrj7LZ+n9pe4TtMjZOCh9R+sVtHYy1M8g3O1ifG2R9JQ4jYtVOTDrl8f7xaXmNjRxqP7rqfAiP7084rUGT3kZT8PL/Mco4+ovu1GHiT+eUNH2eh3heYP/WcR/wCQf0/pFU9o4lzuq5J+6L+thlDR9o3JaVe1dtU6IzYFjoL/ADmefZOMqe8+6PvOSfQZR7CdjEBvUct0UbvxzMNpqjE7Z32Jzdj4/CPYbZuKraJ7NTxa4Ppr8BNjgtmUqXuIqnnbP1Ocgba2ru3RDnxPLp4yttL6yeay9bZCI9t4uRqTkN7jYR9RbITl4XlySekW6UTGqr2F+U6z2kOvRZzmbLy4mO0LOhjGX3TkdRqCDzHGV+OpKO+gsOK/ZPTmvyikp7oABOUmbF2a+Jrph0959TqFQe8x6AfEgcZN/o1svoe2EWZ8Y47q3Sl1Y++3kO6D1blPXJD2Xs9KFJKNMWSmoVRxy4k8STck8STJk5urt1YhCEQdhCEAqdvbLGIp7ujrmjcm5HodD/aeNbSLB2VlYMhKkNlYg5+pz8571Mn2z7MDEL7WmB7ZRppvqOB+8OB8uVr46y5Rbcx4/Uuenh+s5hqxpuHXUc+IOoMk10IJBFiMiDkQRkQRwM42GQgd8DK/nll8beRnT4Z1pcBtdKlhfdb7J/LnJ15hXoJvBd+4N7kCxGWXHmbW6GS8Pth6R3S2+otrkw6X6dZF5/i51/WvheVuD2vTqWAazfZbI+XPyk28lcw5eJJiS8QtYHQ3+XrpFpuPhkOqjyy+UiNg6V8kuehOXib2liaZ3b8I2MtMosLER9nI3vIngAB8dT8JKo0lQWRQo5AWnbwvAYVeF4i8o9t7bWmNxGG9xPL+8Ytw9tja25dEPe4n7P8AeZp6nEmVtfaN/dz6mR1DueJ+QlfaTxGd2+1g+0EGmfhFUcQz6LYcz+kTh8CotcXP74R+rWVdTHN/SKC89YitiFXUyFWxrH3cvnI/smOdj4mH2/h5/TlTFOxAQHMgAAEsScgABqTpYT3f6OeyZwVDfq54iqAX47g1CA9NSeJ6ASj+jLsKaW7i8Sv+5rSQ/wD1gj32H2yNB9UdTl6fMeutpx2EISDEIQgBCEIAQhCAY7th2RGJBq0bLWAzGi1LcDybk3keY8rqN7Msj07MpIbeHeU8ip9Z9CTPdpuytHGLdu5UA7tQDMdCPrL09CJrx8meKVmvD8TVViCqBSL6Z3vpfLh+cib9z1lx2g2BXwjbtZO6fddblX8DwP3TY/OUjzfZ7iCnMk0ds1UFgzW8m+eYkFc9YsPYgjUEEeIzi6mw5cSG2gznNy3Qn/rp8Jc4Xb7CwcAjmMj+kjbS2IKi+0QDMX3R1F7g8+kpsRs2oih0JZbXt9Yc8uMw57lnppZ1K3WH2wjiwe3Q5SVvTyz+MccvSLp7Uqr7rsvhC2CdX9enM4GZNvGV2L25ST628eS5/HSefVMc7e+5bxJMSN5v3lFovS/2l2qdrrTAQaX1PlwEzubHiT1llhNju+fDrkP1MmVtmFNxQd5mJsAOX+RDP2ltqso4K+bGwk6k6jJR6frLF9j7iM7m5tYLyJyGfnpIG7y4TT47L6T1LPZdyenhEfwy8vW8dQyy2RsatiH3KSlzxOioObHQfPlNPCfKsw9LVVUHeItZQWJ4Bcr6nhrlPVOxfYZafs8RiFPtBmtM2Ko18mOXvWtkdD10uOy3Y6lhbO1qlb7ZGS8wg4fi1PTSaqY9d/kVI7CEJkoQhCAEIQgBCEIAQhCAEIQgDGJwyVEKOodWFirAEEdQZ5v2j+i9WJfCNu8fZOSVP4XzI8Gv4ienQjnVnorNfNW1NmVsO+5XpujcN4ZN+Fh3WHgTId59NYnDJUUo6q6nVWUMp8QcjMbtf6M8JVuaReg33DvJf8LaDopE15+WfpfVgOz+J3qQUnNTby1Hwy8pPp4dX31GTA3HgdQfP/2Em0/o7xdBzuVKdRCM7XR8tO611HH6xnK2ya9EhjRcbutlLAg+9mLg8/ETC3O9npvzftzlZLtBs5VRmZLMBe/P9ZlVZeK/Geh9rWvRCWzdgBz+0flMd/odU5ot/nLt8p+vjVdvjgo885Y7C71XvZ2BIHC+UUOzuJ/8T28JK2Ps56ddC6N71rWPEW+Zj3L5L6tNhsKz9BzjwRA5AtcZX4m2vxy8pdfwFdl7lJ2Og7ptn1OVo9huxVdgN/dQDiWuw6jdvn5yfk6t8RfOTzWK7Q4j3E/mPgMh+fpIGz8DUqtuU0Z25ICSOp5DqZ6xhvo6w+/v13es1gLX3Ey6L3tfvTW4LA06ShKSKijgoCj4SuOvrzjLv/LrXnXZ76N2vv4l90a+zQ3b+Z9B4LfxnomBwNOioSkioo4AfE8z1MlQk3q32WOwhCIxCEIAQhCAEIQgBCEIAQhCAEIQgBCEIAQhCIOQhCMK7bPuzKvrCEqLnpZ4XTylzs+EIdCp8J2ElAhCEAIQhACEIQAhCEAIQhACEIQD/9k=" alt="Han Solo" />}
                                                content={[
                                                    <p style={{ fontWeight: 'bold', width: '70vw' }}>{item.title}</p>,
                                                    <p style={{ color: '#84868a',width: '70vw' }}>{item.body}</p>
                                                ]}
                                                actions={[

                                                    <IconText icon={MessageOutlined} text={item.commentCount} key="list-vertical-message" />,
                                                ]}

                                            />                                          
                                        </List.Item>
                                    </>
                                )}
                            />
                            
                            )}
                        </>
                    </SectionFedds>
                </ContainerGrid>
            </Container>
        </>
    );
}

export default Feeds;