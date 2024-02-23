import { useState } from 'react'
import './App.css'
import Intro from './components/Intro'
import Quiz from './components/Quiz'

function App() {
  const [playing, setPlaying] = useState(true)

  return (
    <>
      {!playing && <Intro />}
      <Quiz />
    </>
  )
}

export default App
