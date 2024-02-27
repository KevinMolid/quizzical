import React from 'react'
import {decode} from 'html-entities'

export default function Question(props) {
    const [selected, setSelected] = React.useState(null)

    const answers = props.answers.map((answer, index) => {
        function handleClick() {
            setSelected(index)
        }

        const style = index === selected ? 'selected' : ''

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