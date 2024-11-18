import { Container, Titulo } from './styles'

export type Props = {
  titulo: string
  fundo: 'black' | 'gray'
  children: JSX.Element
}

const Secao = ({ titulo, fundo, children }: Props) => (
  <Container fundo={fundo}>
    <div className="container">
      <Titulo>{titulo}</Titulo>
      {children}
    </div>
  </Container>
)

export default Secao
