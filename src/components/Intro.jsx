import React from 'react'

export default function Intro() {
    return (
        <>
            <img className="intro--logo-img" src="src\assets\logo.png"/>
            <h1 className="intro--logo-txt">Quizzly Bear</h1>
            <p className="intro--txt">Dive into the den of knowledge</p>
            <button className="intro--btn">Play now!</button>
        </>
    )
}