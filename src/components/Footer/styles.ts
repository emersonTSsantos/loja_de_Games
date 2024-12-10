import styled from 'styled-components'
import { cores } from '../../styles'
import { HashLink } from 'react-router-hash-link'

export const Container = styled.footer`
  background-color: ${cores.preta};
  padding: 32px 0;
  font-size: 14px;
  margin-top: 40px;
`

export const TituloDaSessao = styled.h4`
  color: ${cores.branca};
  font-size: 16px;
  font-weight: bold;
`

export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
`

export const Link = styled(HashLink)`
  color: ${cores.cinzaClaro};
  margin-right: 8px;
`

export const SessaoRodape = styled.div`
  margin-bottom: 64px;
`
