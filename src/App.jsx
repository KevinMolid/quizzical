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
    console.log('getting questions')

    fetch("https://opentdb.com/api.php?amount=10&type=multiple")
      .then(res => res.json())
      .then(data => {
        console.log(data.results)
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
