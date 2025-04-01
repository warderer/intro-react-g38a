import { useState, useEffect } from 'react'
import ImageCard from '../components/ImageCard'
import './App.css'

function App () {
  const [gifs, setGifs] = useState([])
  const apiKey = import.meta.env.VITE_GIPHY_API_KEY

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
