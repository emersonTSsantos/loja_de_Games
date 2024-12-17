import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { ContainerDaTag } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Card = styled(Link)`
  background-color: ${cores.cinza};
  border-radius: 8px;
  padding: 8px;
  position: relative;
  text-decoration: none;
  color: ${cores.branca};
  display: block;
  cursor: pointer;
  height: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

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

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
