import React from 'react'

export default function Question(props) {
    return (
        <div className="question">
            <h2 className="question--question">{props.question}</h2>
            <ul className="question--answers">
                <li className="answer">{props.answer1}</li>
                <li className="answer">{props.answer2}</li>
                <li className="answer">{props.answer3}</li>
                <li className="answer">{props.answer4}</li>
            </ul>
        </div>
    )
}