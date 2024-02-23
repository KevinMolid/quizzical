import React from 'react'
import {decode} from 'html-entities'

export default function Question(props) {

    return (
        <div className="question">
            <h2 className="question--question">{decode(props.question)}</h2>
            <ul className="question--answers">
                <li className="answer">{decode(props.answer1)}</li>
                <li className="answer">{decode(props.answer2)}</li>
                <li className="answer">{decode(props.answer3)}</li>
                <li className="answer">{decode(props.answer4)}</li>
            </ul>
            <hr className='question--hr'/>
        </div>
    )
}