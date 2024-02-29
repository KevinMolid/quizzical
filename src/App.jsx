import { useState, useEffect } from 'react'
import './App.css'
import Intro from './components/Intro'
import Quiz from './components/Quiz'

function App() {
  const [playing, setPlaying] = useState(false)
  const [questions, setQuestions] = useState(null)
  const [round, setRound] = useState(0)

  function startGame() {
    setPlaying(prevState => !prevState)
  }

  function restartGame() {
    setQuestions(null)
    setRound(prevRound => prevRound + 1)
  }

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal;

    setTimeout(function() {
      fetch("https://opentdb.com/api.php?amount=10&type=multiple", { signal })
      .then(res => res.json())
      .then(data => {
        setQuestions(data.results)
      }).catch(error => {
        if (error.name !== 'AbortError') {
          console.error("Fetch error:", error);
        }
      })
    }, 4000);

    return () => {
      controller.abort()
    }

  }, [round])

  return (
    <>
      {!playing && <Intro startGame={startGame}/>}
      {playing && <Quiz questions={questions} restartGame={restartGame}/>}
    </>
  )
}

export default App
