import React from 'react'
import {decode} from 'html-entities'

export default function Question(props) {
    const [selected, setSelected] = React.useState(null)

    const answers = props.answers.map((answer, index) => {
        function handleClick() {
            props.gameRunning && setSelected(index)
        }

        let style = ''

        if (props.gameRunning) { // Game running
            style = index === selected ? 'selected' : ''
        } else { // Game over
            if (answer.correct && index === selected) {
                style = 'score'
            } else if (answer.correct) {
                style = 'correct'
            } else if (index === selected) {
                style = 'wrong'
            } 
        }

        return (
            <li onClick={handleClick} className={`answer ${style}`} key={index}>{decode(answer.answer)}</li>
        )
    })

    return (
        <div className="question">
            <h2 className="question--question">{`${props.index}. ${decode(props.question)}`}</h2>
            <ul className="question--answers">
                {answers}
            </ul>
            <hr className='question--hr'/>
        </div>
    )
}