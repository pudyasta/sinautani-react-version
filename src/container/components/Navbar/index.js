import React from 'react'
import { Nav } from 'react-bootstrap'
import { Navlink, Navdrop } from '../../atoms'
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
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <Navlink nav='beranda' to="/" />
                            <Navdrop />
                            <Navlink nav='kenapa harus si tani' to="/pertanian" />
                            <Navlink nav='Saran' to='/' />
                            <Navlink nav='Tentang' to='/' />
                        </ul>
                    </div>
                </div>
            </Nav>
        </>
    )
}

export default Navbar
