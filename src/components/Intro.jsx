import React from 'react'

export default function Intro(props) {
    return (
        <>
            <img className="intro--logo-img" src="src\assets\logo.png"/>
            <h1 className="intro--logo-txt">Quizzly Bear</h1>
            <p className="intro--txt">Dive into the den of knowledge</p>
            <button onClick={props.startGame} className="intro--btn">Play now!</button>
        </>
    )
}