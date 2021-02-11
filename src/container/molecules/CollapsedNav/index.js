import React from 'react'
import { Navlink, Navdrop } from '../../atoms'
import './style.css'


const Collapse = () => {
    return (
        <>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ms-auto">
                    <Navlink nav='beranda' to="/" />
                    <Navdrop />
                    <Navlink nav='kenapa harus si tani' to="/pertanian" />
                    <Navlink nav='Saran' />
                    <Navlink nav='Tentang' />
                </ul>
            </div>
        </>
    )
}

export default Collapse
