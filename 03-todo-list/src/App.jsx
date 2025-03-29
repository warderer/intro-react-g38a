import { useState } from 'react'
import './App.css'

function App () {
  /* 1. Los estados en React sirven para guardar información que va a utilizar el componente. Esta información tiene la particularidad de que se actualiza la vista cada vez que cambia (se ejecuta nuevamente el return) */
  const [inputValue, setInputValue] = useState('')

  // 3b. Función que se ejecuta cuando se hace clic en el botón agregar
  const handleAdd = () => {
    console.log('Agregue:', inputValue)
  }

  return (
    <>
      <h1>Lista de Tareas</h1>
      {/* 2. Una forma común de trabajar los inputs en React, es usar un evento onChange para guardar la información en el estado apenas esta sea tecleada. La información del input la obtenemos de event.target.value */}
      <input
        type='text'
        placeholder='Escribe una tarea'
        value={inputValue}
        onChange={(event) => { setInputValue(event.target.value) }}
      />

      {/* 3a. Otra forma de trabajar los eventos, es que podemos declarar la función más arriba y solo mandar a llamar el evento */}
      <button onClick={handleAdd}>Agregar</button>

      {/* ul>li{Item $}*3>button{Eliminar} */}
      <ul>
        <li>Item 1<button>Eliminar</button></li>
        <li>Item 2<button>Eliminar</button></li>
        <li>Item 3<button>Eliminar</button></li>
      </ul>
    </>
  )
}

export default App
