import FundoHogwarts from '../../assets/images/fundoHogwarts.png'
import Botao from '../Botao'
import Tag from '../Tag'

import { Banner, Infos } from './styles'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${FundoHogwarts})` }}>
    <div className="container">
      <div>
        <Tag>RPG</Tag>
        <Tag>PS5</Tag>
      </div>
      <Infos>
        <h2>Hogwarts Legacy</h2>
        <p>
          <span>De R$ 250,00</span>
          Por R$ 190,00
        </p>
        <Botao
          variacao="primario"
          type={'button'}
          title={'Clique aqui para adcionar esse jogo ao carrinho '}
        >
          Adicionar ao carrinho
        </Botao>
      </Infos>
    </div>
  </Banner>
)

export default Hero
