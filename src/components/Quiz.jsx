import React from 'react'
import Question from './Question.jsx'

export default function Quiz(props) {
    if (!props.questions) return <div>Loading...</div>

    const questionElements = props.questions.map((question, index) => {
        const answers = question.incorrect_answers.map(answer => {
            return ({
                answer: answer,
                correct: false
            })
        })

        // Old code
        const correctAnswerIndex = Math.floor(Math.random() * (answers.length + 1))
        answers.splice(correctAnswerIndex, 0, {
            answer: question.correct_answer,
            correct: true
        });

        return (
            <Question
              key={index}
              index={index+1}
              question={question.question}
              answers={answers}
            />
        )
    })

    return (
        <>
            {questionElements}
            <button className='btn'>Check answers</button>
        </>
    )
}