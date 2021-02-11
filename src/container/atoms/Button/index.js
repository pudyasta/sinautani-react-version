import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Button = (props) => {
    return (
        <>
            <Link className={props.kind + " btn mx-1  js-scroll-trigger"} to={props.to} >{props.contain}</Link>
        </>
    )
}

export default Button
