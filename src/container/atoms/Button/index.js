import React from 'react'
import './style.css'

const Button = (props) => {
    return (
        <>
            <a className={props.kind + " btn mx-1"} href={props.to} role="button">{props.contain}</a>
        </>
    )
}

export default Button
