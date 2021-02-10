import React from 'react'
import './style.css'

const JumbotronWrapper = (props) => {
    return (
        <>
            <div className="jumbotron d-flex" style={{ backgroundImage: `url(${props.image})` }} >
                {props.children}
            </div>
        </>
    )
}

export default JumbotronWrapper
