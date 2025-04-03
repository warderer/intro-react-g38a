import { useParams } from 'react-router-dom'

const PokemonDetail = () => {
  const { id } = useParams()

  return (
    <h1>Pokemon Detail: {id}</h1>
  )
}
export default PokemonDetail
