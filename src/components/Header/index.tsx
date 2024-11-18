import { Link } from 'react-router-dom'

import { BarraDoCabecalho, Links, LinkItem, LinkDoCarrinho } from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => (
  <BarraDoCabecalho>
    <div>
      <Link to="/">
        <img src={logo} alt="EPLAY" />
      </Link>
      <nav>
        <Links>
          <LinkItem>
            <Link to="/categorias">Categorias</Link>
          </LinkItem>

          <LinkItem>
            <a href="#">Novidades</a>
          </LinkItem>

          <LinkItem>
            <a href="#">Promoções</a>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <LinkDoCarrinho href="#">
      0 - produto(s)
      <img src={carrinho} alt="carrinho" />
    </LinkDoCarrinho>
  </BarraDoCabecalho>
)

export default Header
