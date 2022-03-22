import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from "./components/CardPequeno/CardPequeno"
import Style from "styled-components"



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://avatars.githubusercontent.com/u/98753304?v=4" 
          nome="Willhan marques de carvalho" 
          descricao="Oi, eu sou o willhan. Sou alunos da Labenu. Estudo full stack de segunda a sexta."
        />
        
        <ImagemButton 
          imagem="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8AAADCwsJ0dHSWlpalpaX19fXn5+f39/fi4uJNTU0uLi58fHzNzc2bm5v8/PxgYGDu7u6wsLDc3NxtbW1VVVXW1tYqKioQEBBKSkq1tbXAwMBFRUWIiIghISGhoaGAgIA+Pj5kZGQdHR1ZWVk3NzcXFxeQkJAzMzMdBx+HAAAE0klEQVR4nO2d2VLjMBBFWwSSsIQt7MOSsP//Fw7UFDNjxddaYlu+7T7vSelgYl+3pJaIYRiGYRiGYRiGYRiGYRiGYRjGqFiu1ofrh/3Sw+iOifvD0bz0SDri1f1wvSg9lk7Ydf/xUXo0HTB3Fd70/RrvnMdx6RG1za5v6A6UXcZNQ+f2Sg+qVeoM3cFZ6WG1SK2hc3elx9UewNBdTEuPrC2QobvZKT20loCGzk10pLgGQ/eoIsU1GepIcc2G7nNZeoBbEzBUkOKChvQpLmzInuJiDN0lc4qrGt4jR+IUVzU8Xx4CRd4UVzXck5MVUHxnTXG+ocjiEThOTkoPNotNQ5lOgOIhZYqrMRT5BRTdQ9nBZlFrKNNTdBn5Uly9ocg5uox0KQ4ZyuwSKN7Oyo02B2go8oQuI1eKazCU2RtQpKrFNRk2pFaiFNdsKFfXQJEnxQUMRY7QZWR5/AcNcYojmVENG8ocpTiOGdUIQ/IUF2VIneLiDBtS3FOPg80i1hCnuKHX4qINaVPcccJYZ2uguGUt7upj0h1H1epa6Gp0keLOXtGXdkHw/w2nuNzH/+y9T8GIXxSsxeXOqKL3l46IuWcs0B89qxa3sZ6nY6Luiq3W4lCU6IrI+36LKe6mTz0X/2Sbovvfderjv1c9l/LsbqsW16fdN+fxQ5vdgu9Iq8X1qvdF0uBgikv4O/Vt+JoiKLK/Bt+TkOL61Psi+S3hA31TdIrrUy+rtnS17Yxqn36neS8IW9biqp/Z6ZLsF6AFCuNRtbjqR3LH0DFbpTgKw61SHImhTJ+B4nWoFsdimJ/ieAxza3FEhiJ76DI25XkqQ9lHi8YaUhyXYU4tjs1QrtBU3DN4/NMZiqBanKuvxREaJs6oMhqmzahSGialOFJDmcNanJ/iWA3jUxyvocwOgGI1xREbRtbiqA2jUhy3YUyKYzcMz6jSGwZTnAJDnOJW3zOqGgxxLe5+qsQQp7hTNYawFrdQY4hS3IUiw/oU96LJUKSu3KjJUP011P47VH8v3an3U/M8VJ9p8Byxklyq/d0Cvh8+K3k/hO/4f0s13Ibq6zRRuxeIDfE+YiX1Uu017zlavv2oZN5C+9wTnD+s647GaKh+Dlj7PH4wpfmwGWpfT6N+TZT2dW2RKc2HxxCmtN3mz7EYql8jrH2d9xxtuYjpm1H9hP79Ft3S9p6ZuJ3PfRrq3/fkRrB37XseIYWclFbYsKU9pCmdQPq0+yZlHzBaezjsfcD97+Ue6n58XEtLvVnp76mgvy/GIHubvIAP5/UZPlPfnwZ3Sitj2H6PIdHfJ6prknp9oZQ26I6tCf3asmpp5bGeez/wdr+O7H2Jamlael9q71+qvgftdrW08gQNE2c8h0eonzf/qSzj7skOO7IOOqX5NBiSpjSf9PMt7gee0nySzygJzHgOj5GeM0Od0nxqDMlTms/4zuxqv5ZWGv/svE8gyJPSfMZ2/iGAKqX52DmkoXVpw2f05wETpjSfZkPGlOYz6rPVJxy1tBDQkDal+SBD3pTmAwyJU5pPrSF1SvOpM+ROaT6bhkOf8UxlY00SXS0txLzq98af0jao/JtqSGmb/Gs1yllLi+CneEgy45nDcrU+XD8ou4UahmEYhmEYhmEYhmEYhmEYhmGk8Rtwtki8ZEwFSgAAAABJRU5ErkJggg==" 
          texto="Ver mais"
        />
      </div>

    <CardPequeno
     imagem="https://s.manualdousuario.net/wp-content/uploads/2018/02/Logo-do-Gmail-960x540.png" 
     nome="E-mail:" 
     descricao="Willhanmarques09@gmail.com"
    
    
    />

<CardPequeno
     imagem="https://i1.wp.com/workspacecuritiba.com.br/wp-content/uploads/2018/07/localizacao.png?fit=400%2C237&ssl=1" 
     nome="Endereço:" 
     descricao="Rua Jaira 569  Colider-MT"
    
    
    />
    


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbToOW-GqBQ7BtGFvqOV_V_kjskzbRgv9edQ&usqp=CAU" 
          nome="Escavadeira hidráulica" 
          descricao="Operador de Escavadeira" 
        />
        
        <CardGrande 
          imagem="https://media.istockphoto.com/vectors/stop-do-not-enter-stop-red-sign-with-hand-vector-id807954132"
          nome="Não saber dizer Não" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
