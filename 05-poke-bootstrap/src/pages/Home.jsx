import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [pokemons, setPokemons] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon')
      const data = await response.json()
      setPokemons(data.results)
    }
    fetchPokemons()
  }, [])

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const filteredPokemons = pokemons.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className='container'>
      <h1>Home</h1>

      <form className='form-inline my-2 w-100'>
        <input
          type='text'
          className='form-control'
          placeholder='Search Pokemon'
          value={search}
          onChange={handleSearch}
        />
      </form>

      <div className='row'>
        {
        filteredPokemons.map(pokemon => (
          <div className='col-4' key={pokemon.name}>
            <div className='card'>
              <div className='card-body'>
                <img
                  className='card-img-top'
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}
                  alt={pokemon.name}
                />
                <Link
                  className='card-title'
                  to={`/pokemon/${pokemon.url.split('/')[6]}`}
                >
                  <h5>{pokemon.name}</h5>
                </Link>
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
