import React from 'react'
import Question from './Question.jsx'

export default function Quiz(props) {
    if (!props.questions) return <div>Loading...</div>
    const [gameRunning, setGameRunning] = React.useState(true)
    const [questions, setQuestions] = React.useState([]) // Set array of questions (object) with answers

    function gameOver() {
        setGameRunning(false)
    }

    React.useEffect(() => {
        console.log(props.questions)
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
            />
        )
    })

    return (
        <>
            {questionElements}
            <button className='btn' onClick={gameOver}>Check answers</button>
        </>
    )
}