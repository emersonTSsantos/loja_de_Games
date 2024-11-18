import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

import { Props } from '.'

export const ContainerDoBotao = styled.button<Props>`
  background-color: ${(props) =>
    props.variacao === 'primario' ? cores.verde : 'transparent'};
  border: 2px solid
    ${(props) => (props.variacao === 'primario' ? cores.verde : cores.branca)};
  color: ${cores.branca};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
`
export const LinkBotao = styled(Link)`
  background-color: transparent;
  border: 2px solid ${cores.branca};
  color: ${cores.branca};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
`
