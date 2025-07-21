import { useState } from 'react'
import './App.css'

function App() {
  const [contador, setContador] = useState(0)

  return (
    <>
      <div>
        <h1 className="text-2xl">Pintos recheados</h1>
        <p>Contador: {contador}</p>
        <button onClick={() => setContador(contador + 1)}>
          Incrementar
        </button>
      </div>
    </>
  )
}

export default App
