import React from 'react'
import './style.css'

const AboutSmall = (props) => {
    return (
        <>
            <p className={props.className + "about-small"}>{props.paragraph}</p>
        </>
    )
}

export default AboutSmall
