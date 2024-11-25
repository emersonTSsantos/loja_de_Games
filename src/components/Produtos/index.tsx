import Tag from '../Tag'
import { Card, Descricao, Titulo, Infos } from './styles'

type Props = {
  titulo: string
  categoria: string
  sistema: string
  descricao: string
  infos: string[]
  imagem: string
  id: number
}

const Produtos = ({
  titulo,
  categoria,
  sistema,
  descricao,
  infos,
  imagem,
  id
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 92) + '...'
    }
    return descricao
  }

  return (
    <Card to={`/produtos/${id}`}>
      <img src={imagem} alt={titulo} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Titulo>{titulo}</Titulo>
      <Tag>{categoria}</Tag>
      <Tag>{sistema}</Tag>
      <Descricao>{getDescricao(descricao)}</Descricao>
    </Card>
  )
}

export default Produtos
