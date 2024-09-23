import Produtos from '../Produtos'
import { Container, Lista } from './styles'

export type Props = {
  titulo: string
  fundo: 'gray' | 'black'
}

const ListadeProdutos = ({ titulo, fundo }: Props) => (
  <Container fundo={fundo}>
    <div className="container">
      <h2>{titulo}</h2>
      <Lista>
        <Produtos
          categoria="Ação"
          descricao="teste"
          imagem="//placehold.it/222x250"
          infos={['R$ 199,90', '-10']}
          sistema="Windows"
          titulo="Nome do jogo"
        />
        <Produtos
          categoria="Ação"
          descricao="teste"
          imagem="//placehold.it/222x250"
          infos={['R$ 199,90', '-10']}
          sistema="Windows"
          titulo="Nome do jogo"
        />
        <Produtos
          categoria="Ação"
          descricao="teste"
          imagem="//placehold.it/222x250"
          infos={['R$ 199,90', '-10']}
          sistema="Windows"
          titulo="Nome do jogo"
        />
        <Produtos
          categoria="Ação"
          descricao="teste"
          imagem="//placehold.it/222x250"
          infos={['R$ 199,90', '-10']}
          sistema="Windows"
          titulo="Nome do jogo"
        />
      </Lista>
    </div>
  </Container>
)

export default ListadeProdutos
