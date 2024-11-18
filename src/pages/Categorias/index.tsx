import ListadeProdutos from '../../components/ListadeProdutos'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import star from '../../assets/images/star_wars.png'
import street from '../../assets/images/street.png'
import fifa from '../../assets/images/fifa.png'

const acao: Game[] = [
  {
    id: 1,
    categoria: 'Ação',
    descricao:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    titulo: 'Resident Evil 4',
    sistema: 'Windows',
    infos: ['R$ 199,90', '-10%'],
    imagem: resident
  },
  {
    id: 2,
    categoria: 'Ação',
    descricao:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    titulo: 'Resident Evil 4',
    sistema: 'Windows',
    infos: ['R$ 199,90', '-10%'],
    imagem: resident
  },
  {
    id: 3,
    categoria: 'Esporte',
    descricao:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    titulo: 'FIFA 23',
    sistema: 'PS5',
    infos: ['R$ 99,90', '-50%'],
    imagem: fifa
  },
  {
    id: 4,
    categoria: 'Esporte',
    descricao:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    titulo: 'FIFA 23',
    sistema: 'PS5',
    infos: ['R$ 99,90', '-50%'],
    imagem: fifa
  }
]

const embreve: Game[] = [
  {
    id: 5,
    categoria: 'RPG',
    descricao:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    titulo: 'Diablo 4',
    sistema: 'Windows',
    infos: ['05/04'],
    imagem: diablo
  },
  {
    id: 6,
    categoria: 'Aventura',
    descricao:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    titulo: 'Star Wars Jedi Survivo',
    sistema: 'Windows',
    infos: ['05/04'],
    imagem: star
  },
  {
    id: 7,
    categoria: 'Luta',
    descricao:
      'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.',
    titulo: 'Street Fighter',
    sistema: 'Windows',
    infos: ['05/04'],
    imagem: street
  },
  {
    id: 8,
    categoria: 'RPG',
    descricao:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    titulo: 'The Legend of Zelda - TOK',
    sistema: 'Switch',
    infos: ['05/04'],
    imagem: zelda
  }
]

const Categorias = () => (
  <>
    <ListadeProdutos games={acao} titulo="RPG" fundo="gray" />
    <ListadeProdutos games={embreve} titulo="Ação" fundo="black" />
    <ListadeProdutos games={embreve} titulo="Aventura" fundo="gray" />
    <ListadeProdutos games={embreve} titulo="Esportes" fundo="black" />
  </>
)

export default Categorias
