import React from 'react'
import Question from './Question.jsx'

export default function Quiz(props) {
    if (!props.questions) return <div>Loading...</div>
    const [gameRunning, setGameRunning] = React.useState(true)
    const [questions, setQuestions] = React.useState([])
    const [answers, setAnswers] = React.useState({})
    const [correctAnswersCount, setCorrectAnswersCount] = React.useState(null)
    const [btnTxt, setBtnTxt] = React.useState('Check answers')

    function handleBtnClick() {
        if (gameRunning) {
            // Count correct answers
            const correctAnswersCount = Object.values(answers).filter(isCorrect => isCorrect).length
            setCorrectAnswersCount(correctAnswersCount)
            setGameRunning(false)
            setBtnTxt('Play again')
        }
        else {
            props.restartGame()
        }
    }

    function handleAnswerSelected(questionIndex, isCorrect) {
        setAnswers(prev => ({...prev, [questionIndex]: isCorrect}))
    }

    React.useEffect(() => {
        const newQuestions = props.questions.map((question) => {
            const answers = question.incorrect_answers.map(answer => {
                return ({
                    answer: answer,
                    correct: false
                })
            })
            const correctAnswerIndex = Math.floor(Math.random() * (answers.length + 1))
            answers.splice(correctAnswerIndex, 0, {
                answer: question.correct_answer,
                correct: true
            })
            return ({
                question: question.question,
                answers: answers
            }
            )
        })
        setQuestions(newQuestions)
    }, [props.questions])

    const questionElements = questions.map((question, index) => {
        return (
            <Question
              key={index}
              index={index+1}
              question={question.question}
              answers={question.answers}
              gameRunning={gameRunning}
              onAnswerSelected={handleAnswerSelected}
            />
        )
    })

    return (
        <>
            {questionElements}
            {!gameRunning && <span className="score-txt">You got {correctAnswersCount}/{props.questions.length} correct!</span>}
            <button className='btn' onClick={handleBtnClick}>{btnTxt}</button>
        </>
    )
}