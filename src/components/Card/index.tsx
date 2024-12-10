import { Container } from './styles'

type Props = {
  children: JSX.Element
  titulo: string
}

const Card = ({ children, titulo }: Props) => (
  <Container>
    <h2>{titulo}</h2>
    {children}
  </Container>
)

export default Card
