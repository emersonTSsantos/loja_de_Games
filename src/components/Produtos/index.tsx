import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Produtos = () => (
  <Card>
    <img src="//placehold.it/222x250" alt="" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ex, rem
      asperiores magnam perspiciatis veritatis aperiam itaque quae et soluta
      rerum recusandae quisquam architecto quam tempora tenetur nobis
      accusantium commodi!
    </Descricao>
  </Card>
)

export default Produtos
