import { useState, useEffect } from 'react'
import './App.css'
import Intro from './components/Intro'
import Quiz from './components/Quiz'

function App() {
  const [playing, setPlaying] = useState(false)

  const [questions, setQuestions] = useState(null)

  function startGame() {
    setPlaying(prevState => !prevState)
  }

  useEffect(() => {
    const controller = new AbortController()

    fetch("https://opentdb.com/api.php?amount=10&type=multiple")
      .then(res => res.json())
      .then(data => {
        setQuestions(data.results)
      })

    return () => {
      // This is the cleanup function/callback which will be called when the component unmounts
      controller.abort()
    }
  }, [])

  return (
    <>
      {!playing && <Intro startGame={startGame}/>}
      {playing && <Quiz questions={questions}/>}
    </>
  )
}

export default App
