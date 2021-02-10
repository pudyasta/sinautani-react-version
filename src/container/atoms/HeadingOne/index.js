import React from 'react'
import './style.css'

const HeadingOne = (props) => {
    return (
        <>
            <h1 className={"jumbo-big " + props.className}>{props.contain}{props.image ? <img className='jumbo-big-image' src={props.image} alt='logo-sitani'></img> : null}</h1>
        </>
    )
}

export default HeadingOne
