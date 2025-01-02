import { Imagem, Titulo, Precos, Carregando } from './styles'

import Tag from '../Tag'
import Botao from '../Botao'

import { formataPreco } from '../ListadeProdutos'

import { useGetFeaturedGameQuery } from '../../services/api'

const Banner = () => {
  const { data: game, isLoading } = useGetFeaturedGameQuery()

  if (!game) {
    return (
      <Carregando>
        <div className="c-loader"></div>
      </Carregando>
    )
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag tamanho="grande">Destaque do dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Precos>
            De <span>{formataPreco(game.prices.old)}</span> <br />
            por apenas {formataPreco(game.prices.current)}
          </Precos>
        </div>
        <Botao
          type="link"
          to={`/produtos/${game.id}`}
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Botao>
      </div>
    </Imagem>
  )
}

export default Banner
