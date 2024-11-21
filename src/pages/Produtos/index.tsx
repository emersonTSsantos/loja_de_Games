import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Secao from '../../components/Secao'
import Galeria from '../../components/Galeria'

import TambHogwarsLegacyDois from '../../assets/images/tamb_hogwarts2.avif'

const Produtos = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
      <Secao titulo="Sobre o Jogo" fundo="black">
        <p>
          Hogwarts Legacy é um RPG de ação imersivo e de mundo aberto ambientado
          no mundo introduzido pela primeira vez nos livros do Harry Potter.
          Embarque em uma jornada por locais novos e familiares enquanto explora
          e descubra animais fantásticos, personalize seu personagem e crie
          poções, domine o lançamento de feitiços, aprimore talentos e torne-se
          o bruxo que deseja ser.Experimente Hogwarts da década de 1800. Seu
          personagem é um estudante com chave de um antigo segredo que ameaça
          destruir o mundo bruxo. Faça aliados, lute contra os bruxos das trevas
          e decida o destino do mundo bruxo. Seu legado é o que você faz dele.
          Viva o Inesperado.
        </p>
      </Secao>
      <Secao titulo="Mais Detalhes" fundo="gray">
        <p>
          <b>Plataforma:</b> PlayStation 5<br />
          <b>Desenvolvedor:</b> Avalanche Software <br />
          <b>Editora:</b> Portkey Games, subsidiáriada Warner Bros. Interactive
          Entertainment
          <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo
          inglês, espanhol, francês, alemão, italiano, português, entre outros.
          As opções de áudio e legendas podem ser ajustadas nas configurações do
          jogo.
        </p>
      </Secao>
      <Galeria nome="jogo teste" defaultCover={TambHogwarsLegacyDois} />
    </>
  )
}

export default Produtos
