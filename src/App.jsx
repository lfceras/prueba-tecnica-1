import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

const App = () => {
  const { fact, refreshRamdonFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshRamdonFact()
  }

  return (
    <main>
      <h1>Prueba Tecnica 1</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={imageUrl} />}
    </main>
  )
}

export default App
