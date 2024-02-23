import React from 'react'
import Question from './Question.jsx'

export default function Quiz() {
    return (
        <>
            <Question 
                question="Q1"
                answer1="A1"
                answer2="A2"
                answer3="A3"
                answer4="A4"
            />
            <Question 
                question="Q2"
                answer1="A1"
                answer2="A2"
                answer3="A3"
                answer4="A4"
            />
            <Question 
                question="Q3"
                answer1="A1"
                answer2="A2"
                answer3="A3"
                answer4="A4"
            />
        </>
    )
}