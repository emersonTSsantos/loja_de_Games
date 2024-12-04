import Botao from '../Botao'
import Tag from '../Tag'

import { Game } from '../../pages/Home'
import { formataPreco } from '../ListadeProdutos'

import { Banner, Infos } from './styles'
import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/carrinho'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>

        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {formataPreco(game.prices.old)}</span>
            )}
            {game.prices.current && (
              <>Por {formataPreco(game.prices.current)}</>
            )}
          </p>
          {game.prices.current && (
            <Botao
              type="button"
              title="Clique aqui para adicionar este jogo ao carrinho"
              variacao="primario"
              onClick={addToCart}
            >
              Adicionar ao carrinho
            </Botao>
          )}
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
