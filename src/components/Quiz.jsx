import React from 'react'
import Question from './Question.jsx'

export default function Quiz(props) {
    if (!props.questions) return <div>Loading...</div>

    const questionElements = props.questions.map((question, index) => {
        const answers = [...question.incorrect_answers]
        const correctAnswerIndex = Math.floor(Math.random() * (answers.length + 1))
        answers.splice(correctAnswerIndex, 0, question.correct_answer);

        return (
            <Question
              key={index}
              question={question.question}
              answer1={answers[0]}
              answer2={answers[1]}
              answer3={answers[2]}
              answer4={answers[3]}
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