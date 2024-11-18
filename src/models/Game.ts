class Game {
  categoria: string
  descricao: string
  imagem: string
  infos: string[]
  sistema: string
  titulo: string
  id: number

  constructor(
    id: number,
    categoria: string,
    descricao: string,
    imagem: string,
    infos: string[],
    sistema: string,
    titulo: string
  ) {
    this.id = id
    this.categoria = categoria
    this.descricao = descricao
    this.imagem = imagem
    this.infos = infos
    this.sistema = sistema
    this.titulo = titulo
  }
}

export default Game
