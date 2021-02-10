import React from 'react'
import { Nav } from 'react-bootstrap'
import { Collapse } from '../../molecules'
import { Logo } from '../../../assets'
import './style.css'

const Navbar = () => {
    return (
        <>
            <Nav className="navbar navbar-expand-lg navbar-dark  navbar-font bg-basic fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={Logo} alt="a" />
                    </a>
                    <Collapse />
                </div>
            </Nav>
        </>
    )
}

export default Navbar
