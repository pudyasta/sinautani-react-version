import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Navlink = (props) => {
    return (
        <>
            <li className="nav-item ms-3">
                <Link className="nav-link text-uppercase" to={props.to}>{props.nav}</Link>
            </li>
        </>
    )
}

export default Navlink
