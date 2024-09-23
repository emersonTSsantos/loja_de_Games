import { ContainerDoBotao, LinkBotao } from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Botao = ({ type, title, to, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <ContainerDoBotao type="button" title={title} onClick={onClick}>
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
