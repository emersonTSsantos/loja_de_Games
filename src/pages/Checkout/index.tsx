import Botao from '../../components/Botao'
import Card from '../../components/Card'

import { GrupoDeInput, Linha } from './styles'

const Checkout = () => (
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
            <label htmlFor="ConfirmacaoEmailDeEntrega">Confirme o e-mail</label>
            <input id="ConfirmacaoEmailDeEntrega" type="email" />
          </GrupoDeInput>
        </Linha>
      </>
    </Card>
    <Card titulo="Pagamento">
      <div>
        <p>
          Ao optar por essa forma de pagamento, é importante lembrar que a
          confirmação pode levar até 3 dias úteis, devido aos prazos
          estabelecidos pelas instituições financeiras. Portanto, a liberação do
          código de ativação do jogo adquirido ocorrerá somente após a aprovação
          do pagamento do boleto.
        </p>
      </div>
    </Card>
    <Botao type="button" title="Clique aqui para finalzar a Compra">
      Finalizar Compra
    </Botao>
  </div>
)

export default Checkout
