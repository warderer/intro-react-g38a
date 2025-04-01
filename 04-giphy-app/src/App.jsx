import { useState, useEffect } from 'react'
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
      <h1>Giphy App</h1>
    </>
  )
}

export default App
