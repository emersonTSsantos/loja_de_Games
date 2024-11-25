import { useState } from 'react'

import Secao from '../Secao'
import { ItemGaleria } from '../../pages/Home'

import { Item, Itens, Acao, Modal, ConteudoDaModal } from './styles'

import play from '../../assets/icons/play.png'
import zoom from '../../assets/icons/zoom.png'
import fechar from '../../assets/icons/BotaoFechar.png'

type Props = {
  defaultCover: string
  name: string
  items: ItemGaleria[]
}

interface ModalState extends ItemGaleria {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: ItemGaleria) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: ItemGaleria) => {
    if (item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Secao titulo="Galeria" fundo="black">
        <Itens>
          {items.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <Acao>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximar a mídia"
                />
              </Acao>
            </Item>
          ))}
        </Itens>
      </Secao>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ConteudoDaModal className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={fechar}
              alt="Ícone de fechar"
              onClick={() => {
                closeModal()
              }}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </ConteudoDaModal>
        <div
          onClick={() => {
            closeModal()
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default Gallery
