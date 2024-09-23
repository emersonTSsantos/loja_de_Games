import { ContainerDaTag } from './styles'

export type Props = {
  tamanho?: 'pequeno' | 'grande'
  children: string
}

const Tag = ({ children, tamanho = 'pequeno' }: Props) => (
  <ContainerDaTag tamanho={tamanho}>{children}</ContainerDaTag>
)

export default Tag
