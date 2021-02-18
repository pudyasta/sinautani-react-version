import React from 'react'
import './style.css'
import { Link } from 'react-scroll'

const Button = (props) => {
    return (
        <>
            <Link className={props.kind + " btn mx-1  js-scroll-trigger"} to={props.to} spy={true} smooth={true} duration={500}>{props.contain}</Link>
        </>
    )
}

export default Button
