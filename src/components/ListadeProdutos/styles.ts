import styled from 'styled-components'

import { Props } from '.'
import { breakpoints, cores } from '../../styles'
import { Card } from '../Produtos/styles'

export const Container = styled.section<Omit<Props, 'titulo' | 'games'>>`
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
  gap: 24px;
  margin-top: 40px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
export const Titulo = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
