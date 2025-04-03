import { useState, useEffect } from 'react'

const Home = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon')
      const data = await response.json()
      setPokemons(data.results)
    }
    fetchPokemons()
  }, [])

  return (
    <div className='container'>
      <h1>Home</h1>
      <div className='row'>
        {
        pokemons.map(pokemon => (
          <div className='col-4' key={pokemon.name}>
            <div className='card'>
              <div className='card-body'>
                <img
                  className='card-img-top'
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}
                  alt={pokemon.name}
                />
                <h5 className='card-title'>{pokemon.name}</h5>
              </div>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  )
}
export default Home
