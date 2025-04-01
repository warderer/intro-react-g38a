import { useState, useEffect } from 'react'
import ImageCard from '../components/ImageCard'
import SearchBar from '../components/SearchBar'
import './App.css'

function App () {
  const [gifs, setGifs] = useState([])
  const apiKey = import.meta.env.VITE_GIPHY_API_KEY

  const sendSearch = (search) => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=15&offset=0&rating=g&lang=es&bundle=messaging_non_clips`)
      .then(response => response.json())
      .then(results => {
        setGifs(results.data)
      }).catch(error => {
        console.error('Error fetching data:', error)
      })
  }

  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=15&offset=0&rating=g&bundle=messaging_non_clips`)
      .then(response => response.json())
      .then(results => {
        console.log(results.data)
        setGifs(results.data)
      }).catch(error => {
        console.error('Error fetching data:', error)
      })
  }, [])

  return (
    <>
      <div className='App'>
        <SearchBar handleSearch={sendSearch} />
        <div className='grid-cards'>
          {
            gifs.map(gif => (
              <ImageCard
                key={gif.id}
                url={gif.images.fixed_height.url}
                title={gif.title}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
