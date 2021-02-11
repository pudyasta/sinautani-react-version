import React from 'react'
import { AboutSmall } from '../../atoms'
import './style.css'



const BenefitBaloon = (props) => {
    return (
        <>
            <div className="col-md-3">
                <img src={props.image} className="img-keuntungan" alt="s" />
                <h4 className="keuntungan-big">{props.title}</h4>
                <AboutSmall paragraph={props.paragraph} className='text-justify ' />
            </div>
        </>
    )
}

export default BenefitBaloon
