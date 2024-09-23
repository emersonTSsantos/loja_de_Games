import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const ContainerDaTag = styled.div<Props>`
  background-color: ${cores.verde};
  color: ${cores.branca};
  font-size: ${(props) => (props.tamanho === 'grande' ? '16px' : '10px')};
  font-weight: bold;
  padding: ${(props) => (props.tamanho === 'grande' ? '8px 16px' : '4px 6px')};
  border-radius: 8px;
  display: inline-block;
`
