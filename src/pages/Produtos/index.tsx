import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Secao'

import Gallery from '../../components/Galeria'

import { useGetGameQuery } from '../../services/api'
import { Carregando } from '../../components/Banner/styles'

const Product = () => {
  const { id } = useParams()
  const { data: game } = useGetGameQuery(id!)

  if (!game) {
    return (
      <Carregando>
        <p>Carregando ...</p>
        <div className="c-loader"></div>
      </Carregando>
    )
  }

  return (
    <>
      <Hero game={game} />
      <Section titulo="Sobre o jogo" fundo="black">
        <p>{game.description}</p>
      </Section>
      <Section titulo="Mais detalhes" fundo="gray">
        <p>
          <b>Plataforma:</b> {game.details.system}
          <br />
          <b>Desenvolvedor:</b> {game.details.developer}
          <br />
          <b>Editora:</b> {game.details.publisher}
          <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo{' '}
          {game.details.languages.join(', ')}
        </p>
      </Section>
      <Gallery
        name={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
    </>
  )
}

export default Product
