import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import './style.css'

const CatKelas = (props) => {
    return (
        <>
            <div className="col-md-4">
                <Link to={props.to}>
                    <div className="card card-category">
                        <img className="card-img category-img" src={props.image} alt="Kategori " />
                        <div className="card-img-overlay">
                            <div className="category-content">
                                <h3 className="card-title">{props.title}</h3>
                                <p className="card-text">{props.text}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default CatKelas
