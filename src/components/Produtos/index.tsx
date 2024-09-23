import Tag from '../Tag'
import { Card, Descricao, Titulo, Infos } from './styles'

type Props = {
  titulo: string
  categoria: string
  sistema: string
  descricao: string
  infos: string[]
  imagem: string
}

const Produtos = ({
  titulo,
  categoria,
  sistema,
  descricao,
  infos,
  imagem
}: Props) => (
  <Card>
    <img src={imagem} alt={titulo} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Titulo>{titulo}</Titulo>
    <Tag>{categoria}</Tag>
    <Tag>{sistema}</Tag>
    <Descricao>{descricao}</Descricao>
  </Card>
)

export default Produtos
