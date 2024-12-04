import { Container, Link, Links, SessaoRodape, TituloDaSessao } from './styles'

const anoAtual = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <SessaoRodape>
        <TituloDaSessao>Categorias</TituloDaSessao>
        <Links>
          <li>
            <Link to="/categorias#rpg">RPG</Link>
          </li>
          <li>
            <Link to="/categorias#action">Ação</Link>
          </li>
          <li>
            <Link to="/categorias#sports">Esportes</Link>
          </li>
          <li>
            <Link to="/categorias#simulation">Simulação</Link>
          </li>
          <li>
            <Link to="/categorias#fight">Luta</Link>
          </li>
        </Links>
      </SessaoRodape>
      <SessaoRodape>
        <TituloDaSessao>Acesso rápido</TituloDaSessao>
        <Links>
          <li>
            <Link to="/#on-sale">Promoções</Link>
          </li>
          <li>
            <Link to="/#coming-soon">Em breve</Link>
          </li>
        </Links>
      </SessaoRodape>
      <p>{anoAtual} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
