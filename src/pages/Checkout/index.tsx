import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Botao from '../../components/Botao'
import Card from '../../components/Card'

import { GrupoDeInput, Linha, TabBotao } from './styles'

import boleto from '../../assets/icons/boleto.png'
import cartao from '../../assets/icons/cartao.png'
import { usePurchaseMutation } from '../../services/api'

const Checkout = () => {
  const [pagarComCartao, setpagarComCartao] = useState(false)
  const [purchase, { isLoading, isError, data, isSuccess }] =
    usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      nomeCompleto: '',
      email: '',
      cpf: '',
      emailDeEntrega: '',
      ConfirmacaoEmailDeEntrega: '',
      donoDoCartao: '',
      cpfDonoDoCartao: '',
      nomeNoCartao: '',
      numeroDoCartao: '',
      mesDeExpiracao: '',
      anoDeExpiracao: '',
      codigoCartao: '',
      parcelas: ''
    },
    validationSchema: Yup.object({
      // Dados de Cobrança
      nomeCompleto: Yup.string()
        .min(5, 'O nome precisa ter pelo nenos 5 caracteres')
        .required('Campo obrigatório'),
      email: Yup.string()
        .email('E-mail inválido')
        .required('Campo obrigatório'),
      cpf: Yup.string()
        .min(14, 'O campo precisa ter 14 caracteres')
        .max(14, 'O campo precisa ter 14 caracteres')
        .required('Campo obrigatório'),
      emailDeEntrega: Yup.string()
        .email('E-mail inválido')
        .required('Campo obrigatório'),
      ConfirmacaoEmailDeEntrega: Yup.string()
        .oneOf([Yup.ref('emailDeEntrega')], 'Os e-mails estão diferentes')
        .required('Campo obrigatório'),

      //pagamento
      donoDoCartao: Yup.string().when((values, schema) =>
        pagarComCartao ? schema.required('Campo obrigatório') : schema
      ),
      cpfDonoDoCartao: Yup.string().when((values, schema) =>
        pagarComCartao ? schema.required('Campo obrigatório') : schema
      ),
      nomeNoCartao: Yup.string().when((values, schema) =>
        pagarComCartao ? schema.required('Campo obrigatório') : schema
      ),
      numeroDoCartao: Yup.string().when((values, schema) =>
        pagarComCartao ? schema.required('Campo obrigatório') : schema
      ),
      mesDeExpiracao: Yup.string().when((values, schema) =>
        pagarComCartao ? schema.required('Campo obrigatório') : schema
      ),
      anoDeExpiracao: Yup.string().when((values, schema) =>
        pagarComCartao ? schema.required('Campo obrigatório') : schema
      ),
      codigoCartao: Yup.string().when((values, schema) =>
        pagarComCartao ? schema.required('Campo obrigatório') : schema
      ),
      parcelas: Yup.string().when((values, schema) =>
        pagarComCartao ? schema.required('Campo obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        billing: {
          document: values.cpf,
          email: values.email,
          name: values.nomeCompleto
        },
        delivery: {
          email: values.emailDeEntrega
        },
        payment: {
          installments: 1,
          card: {
            active: pagarComCartao,
            code: Number(values.codigoCartao),
            name: values.nomeNoCartao,
            number: values.numeroDoCartao,
            owner: {
              document: values.cpfDonoDoCartao,
              name: values.donoDoCartao
            },
            expires: {
              month: 1,
              year: 2024
            }
          }
        },
        products: [
          {
            id: 1,
            price: 10
          }
        ]
      })
    }
  })

  const getMensagemDeErro = (fieldName: string, mensagem?: string) => {
    const estaAlterado = fieldName in form.touched
    const estaInvalido = fieldName in form.errors

    if (estaAlterado && estaInvalido) return mensagem
    return ''
  }

  return (
    <div className="container">
      {isSuccess ? (
        <Card titulo="Muito obrigado">
          <>
            <p>
              É com satisfação que informamos que recebemos seu pedido com
              sucesso! <br />
              Abaixo estão os detalhes da sua compra: <br />
              Número do pedido: {data.orderId} <br />
              Forma de pagamento:{' '}
              {pagarComCartao ? 'Cartão de crédito' : 'Boleto Bancário'}
            </p>
            <p className="margimTop">
              Caso tenha optado pelo pagamento via boleto bancário, lembre-se de
              que a confirmação pode levar até 3 dias úteis. Após a aprovação do
              pagamento, enviaremos um e-mail contendo o código de ativação do
              jogo.
            </p>
            <p>
              Se você optou pelo pagamento com cartão de crédito, a liberação do
              código de ativação ocorrerá após a aprovação da transação pela
              operadora do cartão. Você receberá o código no e-mail cadastrado
              em nossa loja.
            </p>
            <p className="margimTop">
              Pedimos que verifique sua caixa de entrada e a pasta de spam para
              garantir que receba nossa comunicação. Caso tenha alguma dúvida ou
              necessite de mais informações, por favor, entre em contato conosco
              através dos nossos canais de atendimento ao cliente
            </p>
            <p className="margimTop">
              Agradecemos por escolher a EPLAY e esperamos que desfrute do seu
              jogo!
            </p>
          </>
        </Card>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <Card titulo="Dados de Cobrança">
            <>
              <Linha>
                <GrupoDeInput>
                  <label htmlFor="nomeCompleto">Nome Completo</label>
                  <input
                    id="nomeCompleto"
                    type="text"
                    name="nomeCompleto"
                    value={form.values.nomeCompleto}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getMensagemDeErro(
                      'nomeCompleto',
                      form.errors.nomeCompleto
                    )}
                  </small>
                </GrupoDeInput>
                <GrupoDeInput>
                  <label htmlFor="email">E-mail</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.values.email}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getMensagemDeErro('email', form.errors.email)}</small>
                </GrupoDeInput>
                <GrupoDeInput>
                  <label htmlFor="cpf">CPF</label>
                  <input
                    id="cpf"
                    type="text"
                    name="cpf"
                    value={form.values.cpf}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getMensagemDeErro('cpf', form.errors.cpf)}</small>
                </GrupoDeInput>
              </Linha>
              <h3 className="margimTop">Dados de entrega - conteúdo digital</h3>
              <Linha>
                <GrupoDeInput>
                  <label htmlFor="emailDeEntrega">E-mail</label>
                  <input
                    id="emailDeEntrega"
                    type="email"
                    name="emailDeEntrega"
                    value={form.values.emailDeEntrega}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getMensagemDeErro(
                      'emailDeEntrega',
                      form.errors.emailDeEntrega
                    )}
                  </small>
                </GrupoDeInput>
                <GrupoDeInput>
                  <label htmlFor="ConfirmacaoEmailDeEntrega">
                    Confirme o e-mail
                  </label>
                  <input
                    id="ConfirmacaoEmailDeEntrega"
                    type="email"
                    name="ConfirmacaoEmailDeEntrega"
                    value={form.values.ConfirmacaoEmailDeEntrega}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getMensagemDeErro(
                      'ConfirmacaoEmailDeEntrega',
                      form.errors.ConfirmacaoEmailDeEntrega
                    )}
                  </small>
                </GrupoDeInput>
              </Linha>
            </>
          </Card>
          <Card titulo="Pagamento">
            <>
              <TabBotao
                type="button"
                isActive={!pagarComCartao}
                onClick={() => setpagarComCartao(false)}
              >
                <img src={boleto} alt="Boleto bancário" />
                Boleto Bancário
              </TabBotao>
              <TabBotao
                type="button"
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
                        <input
                          type="text"
                          id="donoDoCartao"
                          name="donoDoCartao"
                          value={form.values.donoDoCartao}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getMensagemDeErro(
                            'donoDoCartao',
                            form.errors.donoDoCartao
                          )}
                        </small>
                      </GrupoDeInput>
                      <GrupoDeInput>
                        <label htmlFor="cpfDonoDoCartao">
                          Cpf do Titular do cartão
                        </label>
                        <input
                          type="text"
                          id="cpfDonoDoCartao"
                          name="cpfDonoDoCartao"
                          value={form.values.cpfDonoDoCartao}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getMensagemDeErro(
                            'cpfDonoDoCartao',
                            form.errors.cpfDonoDoCartao
                          )}
                        </small>
                      </GrupoDeInput>
                    </Linha>
                    <Linha marginTop="24px">
                      <GrupoDeInput>
                        <label htmlFor="nomeNoCartao">Nome no cartão</label>
                        <input
                          type="text"
                          id="nomeNoCartao"
                          name="nomeNoCartao"
                          value={form.values.nomeNoCartao}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getMensagemDeErro(
                            'nomeNoCartao',
                            form.errors.nomeNoCartao
                          )}
                        </small>
                      </GrupoDeInput>
                      <GrupoDeInput>
                        <label htmlFor="numeroDoCartao">Número do cartão</label>
                        <input
                          type="text"
                          id="numeroDoCartao"
                          name="numeroDoCartao"
                          value={form.values.numeroDoCartao}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getMensagemDeErro(
                            'numeroDoCartao',
                            form.errors.numeroDoCartao
                          )}
                        </small>
                      </GrupoDeInput>
                      <GrupoDeInput maxWidth="123px">
                        <label htmlFor="mesDeExpiracao">
                          Mês de Vencimento
                        </label>
                        <input
                          type="text"
                          id="mesDeExpiracao"
                          name="mesDeExpiracao"
                          value={form.values.mesDeExpiracao}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getMensagemDeErro(
                            'mesDeExpiracao',
                            form.errors.mesDeExpiracao
                          )}
                        </small>
                      </GrupoDeInput>
                      <GrupoDeInput maxWidth="123px">
                        <label htmlFor="anoDeExpiracao">
                          Ano de Vencimento
                        </label>
                        <input
                          type="text"
                          id="anoDeExpiracao"
                          name="anoDeExpiracao"
                          value={form.values.anoDeExpiracao}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getMensagemDeErro(
                            'anoDeExpiracao',
                            form.errors.anoDeExpiracao
                          )}
                        </small>
                      </GrupoDeInput>
                      <GrupoDeInput maxWidth="48px">
                        <label htmlFor="codigoCartao">codigoCartao</label>
                        <input
                          type="text"
                          id="codigoCartao"
                          name="codigoCartao"
                          value={form.values.codigoCartao}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getMensagemDeErro(
                            'codigoCartao',
                            form.errors.codigoCartao
                          )}
                        </small>
                      </GrupoDeInput>
                    </Linha>
                    <Linha marginTop="24px">
                      <GrupoDeInput maxWidth="150px">
                        <label htmlFor="parcelas">Parcelamento</label>
                        <select
                          id="parcelas"
                          name="parcelas"
                          value={form.values.parcelas}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        >
                          <option>1x de R$ 200,00</option>
                          <option>2x de R$ 200,00</option>
                          <option>3x de R$ 200,00</option>
                        </select>
                        <small>
                          {getMensagemDeErro('parcelas', form.errors.parcelas)}
                        </small>
                      </GrupoDeInput>
                    </Linha>
                  </>
                ) : (
                  <p>
                    Ao optar por essa forma de pagamento, é importante lembrar
                    que a confirmação pode levar até 3 dias úteis, devido aos
                    prazos estabelecidos pelas instituições financeiras.
                    Portanto, a liberação do código de ativação do jogo
                    adquirido ocorrerá somente após a aprovação do pagamento do
                    boleto.
                  </p>
                )}
              </div>
            </>
          </Card>
          <Botao
            type="button"
            title="Clique aqui para finalzar a Compra"
            onClick={form.handleSubmit}
          >
            Finalizar Compra
          </Botao>
        </form>
      )}
    </div>
  )
}

export default Checkout
