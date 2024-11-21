import Secao from '../Secao'

import { Itens, Item, Acao, Modal, ConteudoDaModal } from './styles'

import GaleriaHogwartsQuatro from '../../assets/images/GaleriaHogwarts4.webp'
import GaleriaHogwartsTres from '../../assets/images/GaleriaHogwarts3.jpg'
import GaleriaHogwartsDois from '../../assets/images/GaleriaHogwarts2.jpg'
import Zoom from '../../assets/icons/zoom.png'
import Play from '../../assets/icons/play.png'
import Close from '../../assets/icons/BotaoFechar.png'

import { useState } from 'react'

interface ItemGaleria {
  type: 'Imagem' | 'Video'
  url: string
}

const mock: ItemGaleria[] = [
  {
    type: 'Imagem',
    url: GaleriaHogwartsTres
  },
  {
    type: 'Imagem',
    url: GaleriaHogwartsDois
  },
  {
    type: 'Imagem',
    url: GaleriaHogwartsQuatro
  },
  {
    type: 'Video',
    url: 'https://www.youtube.com/embed/yF29baX-IsA?si=yjpU75LZSZXRX6Fy'
  }
]

type Props = {
  defaultCover: string
  nome: string
}

interface ModalState extends ItemGaleria {
  estaVisivel: boolean
}

const Galeria = ({ defaultCover, nome }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    estaVisivel: false,
    type: 'Imagem',
    url: ''
  })

  const getMediaCover = (Item: ItemGaleria) => {
    if (Item.type === 'Imagem') return Item.url
    return defaultCover
  }

  const getMediaIcon = (Item: ItemGaleria) => {
    if (Item.type === 'Imagem') return Zoom
    return Play
  }

  const FechamentoDoModal = () =>
    setModal({
      estaVisivel: false,
      type: 'Imagem',
      url: ''
    })

  return (
    <>
      <Secao titulo="Galeria" fundo="black">
        <Itens>
          {mock.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  estaVisivel: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Midia ${index + 1} de ${nome}`}
              />
              <Acao>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a mídia"
                />
              </Acao>
            </Item>
          ))}
        </Itens>
      </Secao>
      <Modal className={modal.estaVisivel ? 'visivel' : ''}>
        <ConteudoDaModal className="container">
          <header>
            <h4>{nome}</h4>
            <img
              src={Close}
              alt="Ícone de fechar"
              onClick={FechamentoDoModal}
            />
          </header>
          {modal.type === 'Imagem' ? (
            <img src={modal.url} />
          ) : (
            <iframe src={modal.url} frameBorder="0" />
          )}
        </ConteudoDaModal>
        <div className="overlay" onClick={FechamentoDoModal}></div>
      </Modal>
    </>
  )
}

export default Galeria
