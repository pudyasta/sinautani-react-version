import React, { Component } from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export default class Navdrop extends Component {

    toogleButton = () => {
        document.querySelector('.custom-select').classList.toggle('open')

    }
    render() {
        return (
            <>

                <div className="custom-select-wrapper ms-3" onClick={this.toogleButton}>
                    <div className="custom-select">
                        <div className="custom-select__trigger nav-link"><span>Kategori Kelas</span>
                            <div className="arrow"></div>
                        </div>
                        <div className="custom-options">
                            <Link className="custom-option nav-link" to='/pertanian'>pertanian</Link>
                            <Link className="custom-option nav-link" to='/perkebunan'>perkebunan</Link>
                            <Link className="custom-option nav-link" to='/hidroponik'>hidroponik</Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

