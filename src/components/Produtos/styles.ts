import styled from 'styled-components'
import { cores } from '../../styles'
import { ContainerDaTag } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.cinza};
  border-radius: 8px;
  padding: 8px;

  ${ContainerDaTag} {
    margin-right: 8px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const Descricao = styled.p`
  line-height: 22px;
  font-size: 14px;
  display: block;
  margin-top: 16px;
`