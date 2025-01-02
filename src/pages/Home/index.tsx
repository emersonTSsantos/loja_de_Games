import Banner from '../../components/Banner'
import { Carregando } from '../../components/Banner/styles'
import ProductsList from '../../components/ListadeProdutos'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

export interface ItemGaleria {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: ItemGaleria[]
  }
}

const Home = () => {
  const { data: onSaleGames } = useGetOnSaleQuery()
  const { data: soonGames } = useGetSoonQuery()

  if (onSaleGames && soonGames) {
    return (
      <>
        <Banner />
        <ProductsList
          games={onSaleGames}
          titulo="Promoções"
          fundo="gray"
          id="on-sale"
        />
        <ProductsList
          games={soonGames}
          titulo="Em breve"
          fundo="black"
          id="coming-soon"
        />
      </>
    )
  }

  return (
    <Carregando>
      <div className="c-loader"></div>
    </Carregando>
  )
}

export default Home
