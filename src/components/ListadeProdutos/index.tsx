import { Game } from '../../pages/Home'
import Produtos from '../Produtos'
import { Container, Lista } from './styles'

export type Props = {
  id?: string
  titulo: string
  fundo: 'gray' | 'black'
  games: Game[]
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ListaDeProdutos = ({ games, fundo, titulo, id }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(formataPreco(game.prices.current))
    }

    return tags
  }

  return (
    <Container id={id} fundo={fundo}>
      <div className="container">
        <h2>{titulo}</h2>
        <Lista>
          {games.map((games) => (
            <li key={games.id}>
              <Produtos
                id={games.id}
                categoria={games.details.category}
                descricao={games.description}
                imagem={games.media.thumbnail}
                infos={getGameTags(games)}
                sistema={games.details.system}
                titulo={games.name}
              />
            </li>
          ))}
        </Lista>
      </div>
    </Container>
  )
}

export default ListaDeProdutos
