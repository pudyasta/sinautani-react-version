import React from 'react'
import { HeadingOne as Heading, JumboSmall as Small, JumbotronWrapper, Button } from '../../atoms'
import './style.css'

import { Container } from 'react-bootstrap'

const CatJumbotron = (props) => {
    return (
        <>
            <JumbotronWrapper image={props.image}>
                <Container className="jumbo-u">
                    <h3 className="kategori-head ">KATEGORI KELAS</h3>
                    <Heading contain={props.heading} className='m-1' />
                    <Small contain={props.paragraph} />
                    <Button kind='btn-light jumbo-button-1 js-scroll-triger' contain='lihat daftar kelas' />
                </Container>
            </JumbotronWrapper>
        </>
    )
}

export default CatJumbotron
