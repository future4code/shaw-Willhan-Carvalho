import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {
  const [curtido, setCurtido] = useState(false);
  const [comentado, setComentado] = useState(false);
  const [comentarios, setComentarios] = useState(0);
  const [curtida, setCurtida] = useState(0);
  const [arrayComentarios, setArrayComentarios] = useState([]);

  const onClickCurtida = () => {
    if (curtido) {
      setCurtido(!curtido);
      setCurtida(curtida - 1)
    }
    else {
      setCurtido(!curtido)
      setCurtida(curtida + 1)
    }
  };

  const onClickComentario = () => {
    setComentado(!comentado)
  }

  const enviarComentario = (comentario) => {
    const listaDeComentarios = [...arrayComentarios, comentario]

    setArrayComentarios(listaDeComentarios)
    setComentado(false)
    setComentarios(comentarios + 1)
  }

  const iconeCurtida = curtido ? (iconeCoracaoPreto) : (iconeCoracaoBranco)

  const caixaDeComentario = comentado ? (
    <SecaoComentario enviarComentario={enviarComentario} />
  ) : (
    arrayComentarios.map(comentario => {
      return (
        <CommentContainer>
          <p>{comentario}</p>
        </CommentContainer>
      )
    })
  )

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'} />

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={curtida}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={comentarios}
        />
      </PostFooter>
      {caixaDeComentario}
    </PostContainer>
  )
}

export default Post