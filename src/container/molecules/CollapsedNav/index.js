import React from 'react'
import { Navlink, Navdrop } from '../../atoms'
import './style.css'


const Collapse = () => {
    return (
        <>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
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
