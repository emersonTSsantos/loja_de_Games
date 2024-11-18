import styled from 'styled-components'

import { Props } from '.'
import { cores } from '../../styles'
import { Card } from '../Produtos/styles'

export const Container = styled.section<Omit<Props, 'titulo' | 'games'>>`
  padding: 32px 0px;
  background-color: ${(props) =>
    props.fundo === 'black' ? cores.preta : cores.cinza};

  ${Card} {
    background-color: ${(props) =>
      props.fundo === 'black' ? cores.cinza : cores.preta};
  }

  p {
    font-size: 14px;
    line-height: 22px;
    max-width: 640px;
  }
`

export const Titulo = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
`
