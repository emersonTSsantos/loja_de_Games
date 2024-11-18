import Game from '../../models/Game'
import Produtos from '../Produtos'
import { Container, Lista } from './styles'

export type Props = {
  titulo: string
  fundo: 'gray' | 'black'
  games: Game[]
}

const ListadeProdutos = ({ titulo, fundo, games }: Props) => (
  <Container fundo={fundo}>
    <div className="container">
      <h2>{titulo}</h2>
      <Lista>
        {games.map((game) => (
          <Produtos
            key={game.id}
            categoria={game.categoria}
            descricao={game.descricao}
            imagem={game.imagem}
            infos={game.infos}
            sistema={game.sistema}
            titulo={game.titulo}
          />
        ))}
      </Lista>
    </div>
  </Container>
)

export default ListadeProdutos
