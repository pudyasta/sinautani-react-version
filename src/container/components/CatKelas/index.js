import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import './style.css'

const CatKelas = (props) => {
    return (
        <>
            <div className="col-md-4">
                <Link to={props.to}>
                    <Card className=" card-category">
                        <img className="card-img category-img" src={props.image} alt="Kategori " />
                        <div className="category-content">
                            <h3 className="card-title text-wrap">{props.title}</h3>
                            <p className="card-text">{props.text}</p>
                        </div>
                    </Card>
                </Link>
            </div>
        </>
    )
}

export default CatKelas
