import { useState } from 'react'

const SearchBar = ({ handleSearch }) => {
  const [search, setSearch] = useState('')

  return (
    <div className='search-bar'>
      <input
        className='search-input'
        type='text'
        placeholder='Search Gif...'
        name='search'
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <button
        className='search-button'
        type='button'
        onClick={() => { handleSearch(search) }}
      >
        Buscar
      </button>
    </div>
  )
}
export default SearchBar
