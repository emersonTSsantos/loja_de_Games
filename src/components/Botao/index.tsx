import { ContainerDoBotao, LinkBotao } from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
  variacao?: 'primario' | 'secundario'
}

const Botao = ({
  type,
  title,
  to,
  onClick,
  children,
  variacao = 'primario'
}: Props) => {
  if (type === 'button') {
    return (
      <ContainerDoBotao
        variacao={variacao}
        type="button"
        title={title}
        onClick={onClick}
      >
        {children}
      </ContainerDoBotao>
    )
  }

  return (
    <LinkBotao to={to as string} title={title}>
      {children}
    </LinkBotao>
  )
}

export default Botao
