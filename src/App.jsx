import { useState } from 'react'
import './App.css'
import Intro from './components/Intro'
import Quiz from './components/Quiz'

function App() {
  const [playing, setPlaying] = useState(false)

  const [questions, setQuestions] = useState([])

  function startGame() {
    setPlaying(prevState => !prevState)
  }

  return (
    <>
      {!playing && <Intro startGame={startGame}/>}
      {playing && <Quiz />}
    </>
  )
}

export default App
