import styled from 'styled-components'

import { cores } from '../../styles'

type PropsGrupoDeInput = {
  maxWidth?: string
}

type PropsLinha = {
  marginTop?: string
}

type PropsTabBptao = {
  isActive: boolean
}

export const Linha = styled.div<PropsLinha>`
  display: flex;
  column-gap: 24px;
  margin-top: ${(props) => props.marginTop || '0'};
  align-items: flex-end;
`

export const GrupoDeInput = styled.div<PropsGrupoDeInput>`
  flex: auto;

  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input,
  select {
    background-color: ${cores.branca};
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${cores.branca};
    width: 100%;
  }
`

export const TabBotao = styled.button<PropsTabBptao>`
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${cores.branca};
  background-color: ${(props) => (props.isActive ? cores.verde : cores.preta)};
  height: 32px;
  border: none;
  margin-right: 16px;
  padding: 0 8px;
  margin-bottom: 24px;
  cursor: pointer;

  img {
    margin-right: 8px;
  }
`
