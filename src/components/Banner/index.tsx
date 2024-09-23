import { Imagem, Titulo, Precos } from './styles'

import ImagemDoBanner from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'
import Botao from '../Botao'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${ImagemDoBanner})` }}>
    <div className="container">
      <Tag tamanho="grande">Destaque do dia</Tag>
      <div>
        <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
        <Precos>
          De <span>R$ 250,00</span> <br />
          por apenas R$ 99,90
        </Precos>
      </div>

      <Botao
        type="link"
        to="/produto"
        title="Cliqueaqui para aproveitar esta oferta"
      >
        Aproveitar
      </Botao>
    </div>
  </Imagem>
)

export default Banner
