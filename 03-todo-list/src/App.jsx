import './App.css'

function App () {
  return (
    <>
      <h1>Lista de Tareas</h1>
      <input type='text' placeholder='Escribe una tarea' />
      <button>Agregar</button>
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
