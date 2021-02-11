import React from 'react'
import { Container } from 'react-bootstrap'
import { AboutSmall, AboutHeading } from '../../atoms'


const ABOUT_WRAPPER = {
    padding: '20px 0'
}

const About = (props) => {
    return (
        <>
            <Container className="about-wrapper" id='about' style={ABOUT_WRAPPER}>
                <div className="row align-items-center" >
                    <div className="col-md-6">
                        <img src={props.image} className="about-img img-fluid" alt=""></img>
                    </div>
                    <div className="col-md">
                        <AboutHeading heading={props.heading} />
                        <AboutSmall paragraph={props.paragraph} />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default About
