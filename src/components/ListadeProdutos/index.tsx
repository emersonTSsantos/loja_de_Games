import Produtos from '../Produtos'
import { Container, Lista } from './styles'

type Props = {
  titulo: string
  fundo: 'gray' | 'black'
}

const ListadeProdutos = ({ titulo, fundo }: Props) => (
  <Container>
    <div className="container">
      <h2>{titulo}</h2>
      <Lista>
        <Produtos />
        <Produtos />
        <Produtos />
        <Produtos />
      </Lista>
    </div>
  </Container>
)

export default ListadeProdutos
