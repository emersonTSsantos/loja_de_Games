import { Container, Link, Links, SessaoRodape, TituloDaSessao } from './styles'

const anoAtual = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <SessaoRodape>
        <TituloDaSessao>Categorias</TituloDaSessao>
        <Links>
          <li>
            <Link>RPG</Link>
          </li>
          <li>
            <Link>Ação</Link>
          </li>
          <li>
            <Link>Aventura</Link>
          </li>
          <li>
            <Link>Esportes</Link>
          </li>
          <li>
            <Link>Simulação</Link>
          </li>
          <li>
            <Link>Estratégia</Link>
          </li>
          <li>
            <Link>FPS</Link>
          </li>
        </Links>
      </SessaoRodape>
      <SessaoRodape>
        <TituloDaSessao>Acesso rápido</TituloDaSessao>
        <Links>
          <li>
            <Link>Novidades</Link>
          </li>
          <li>
            <Link>Promoções</Link>
          </li>
          <li>
            <Link>Em breve</Link>
          </li>
        </Links>
      </SessaoRodape>
      <p>{anoAtual} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
