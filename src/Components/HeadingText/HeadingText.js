import React from 'react'
import './HeadingText.css'

function HeadingText(props) {
    return (
        <div>
            <h1 className="title"> {props.title} </h1>
        </div>
    )
}

export default HeadingText
