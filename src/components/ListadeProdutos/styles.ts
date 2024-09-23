import styled from 'styled-components'

import { Props } from '.'
import { cores } from '../../styles'
import { Card } from '../Produtos/styles'

export const Container = styled.section<Omit<Props, 'titulo'>>`
  padding: 32px 0px;
  background-color: ${(props) =>
    props.fundo === 'black' ? cores.preta : cores.cinza};

  ${Card} {
    background-color: ${(props) =>
      props.fundo === 'black' ? cores.cinza : cores.preta};
  }
`

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 24px;
  margin-top: 40px;
`

export const Titulo = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
