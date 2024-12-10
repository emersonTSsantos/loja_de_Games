import { useState } from 'react'

import Botao from '../../components/Botao'
import Card from '../../components/Card'

import { GrupoDeInput, Linha, TabBotao } from './styles'

import boleto from '../../assets/icons/boleto.png'
import cartao from '../../assets/icons/cartao.png'

const Checkout = () => {
  const [pagarComCartao, setpagarComCartao] = useState(false)

  return (
    <div className="container">
      <Card titulo="Dados de Cobrança">
        <>
          <Linha>
            <GrupoDeInput>
              <label htmlFor="nomeCompleto">Nome Completo</label>
              <input id="nomeCompleto" type="text" />
            </GrupoDeInput>
            <GrupoDeInput>
              <label htmlFor="email">E-mail</label>
              <input id="email" type="email" />
            </GrupoDeInput>
            <GrupoDeInput>
              <label htmlFor="cpf">CPF</label>
              <input id="cpf" type="text" />
            </GrupoDeInput>
          </Linha>
          <h3 className="margimTop">Dados de entrega - conteúdo digital</h3>
          <Linha>
            <GrupoDeInput>
              <label htmlFor="emailDeEntrega">E-mail</label>
              <input id="emailDeEntrega" type="email" />
            </GrupoDeInput>
            <GrupoDeInput>
              <label htmlFor="ConfirmacaoEmailDeEntrega">
                Confirme o e-mail
              </label>
              <input id="ConfirmacaoEmailDeEntrega" type="email" />
            </GrupoDeInput>
          </Linha>
        </>
      </Card>
      <Card titulo="Pagamento">
        <>
          <TabBotao
            isActive={!pagarComCartao}
            onClick={() => setpagarComCartao(false)}
          >
            <img src={boleto} alt="Boleto bancário" />
            Boleto Bancário
          </TabBotao>
          <TabBotao
            isActive={pagarComCartao}
            onClick={() => setpagarComCartao(true)}
          >
            <img src={cartao} alt="Cartão" />
            Cartão de Crédito
          </TabBotao>
          <div>
            {pagarComCartao ? (
              <>
                <Linha>
                  <GrupoDeInput>
                    <label htmlFor="donoDoCartao">
                      Nome do Titular do cartão
                    </label>
                    <input type="text" id="donoDoCartao" />
                  </GrupoDeInput>
                  <GrupoDeInput>
                    <label htmlFor="cpfDonoDoCartao">
                      Cpf do Titular do cartão
                    </label>
                    <input type="text" id="cpfDonoDoCartao" />
                  </GrupoDeInput>
                </Linha>
                <Linha marginTop="24px">
                  <GrupoDeInput>
                    <label htmlFor="nomeNoCartao">Nome no cartão</label>
                    <input type="text" id="nomeNoCartao" />
                  </GrupoDeInput>
                  <GrupoDeInput>
                    <label htmlFor="numeroDoCartao">Número do cartão</label>
                    <input type="text" id="numeroDoCartao" />
                  </GrupoDeInput>
                  <GrupoDeInput maxWidth="123px">
                    <label htmlFor="mesDeExpiracao">Mês de Vencimento</label>
                    <input type="text" id="mesDeExpiracao" />
                  </GrupoDeInput>
                  <GrupoDeInput maxWidth="123px">
                    <label htmlFor="anoDeExpiracao">Ano de Vencimento</label>
                    <input type="text" id="anoDeExpiracao" />
                  </GrupoDeInput>
                  <GrupoDeInput maxWidth="48px">
                    <label htmlFor="CVV">CVV</label>
                    <input type="text" id="CVV" />
                  </GrupoDeInput>
                </Linha>
                <Linha marginTop="24px">
                  <GrupoDeInput maxWidth="150px">
                    <label htmlFor="parcelas">Parcelamento</label>
                    <select>
                      <option>1x de R$ 200,00</option>
                      <option>2x de R$ 200,00</option>
                      <option>3x de R$ 200,00</option>
                    </select>
                  </GrupoDeInput>
                </Linha>
              </>
            ) : (
              <p>
                Ao optar por essa forma de pagamento, é importante lembrar que a
                confirmação pode levar até 3 dias úteis, devido aos prazos
                estabelecidos pelas instituições financeiras. Portanto, a
                liberação do código de ativação do jogo adquirido ocorrerá
                somente após a aprovação do pagamento do boleto.
              </p>
            )}
          </div>
        </>
      </Card>
      <Botao type="button" title="Clique aqui para finalzar a Compra">
        Finalizar Compra
      </Botao>
    </div>
  )
}

export default Checkout
