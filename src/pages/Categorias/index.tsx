import ListaDeProdutos from '../../components/ListadeProdutos'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categorias = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()

  if (actionGames && fightGames && rpgGames && simulationGames && sportGames) {
    return (
      <>
        <ListaDeProdutos
          games={actionGames}
          titulo="Ação"
          fundo="gray"
          id="action"
        />
        <ListaDeProdutos
          games={sportGames}
          titulo="Esportes"
          fundo="black"
          id="sports"
        />
        <ListaDeProdutos
          games={fightGames}
          titulo="Luta"
          fundo="gray"
          id="fight"
        />
        <ListaDeProdutos games={rpgGames} titulo="RPG" fundo="black" id="rpg" />
        <ListaDeProdutos
          games={simulationGames}
          titulo="Simulação"
          fundo="gray"
          id="simulation"
        />
      </>
    )
  }

  return <h4>Carregando</h4>
}

export default Categorias
