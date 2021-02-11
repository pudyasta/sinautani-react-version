import React from 'react'
import { Logo, Jumbotron } from '../../../assets'
import { HeadingOne as Heading, JumboSmall as Small, JumbotronWrapper, Button } from '../../atoms'
import { Container } from 'react-bootstrap'


const MainJumbotron = () => {
    return (
        <>
            <JumbotronWrapper image={Jumbotron}>
                <Container className="jumbo-u">
                    <Heading contain='Kini, semua bisa menjadi #petanimillenial, bareng' image={Logo} />
                    <Small contain="Bareng si tani, kamu bisa mendapatkan kursus menjadi petani cerdas dibimbing
            mentor-mentor yang berkompeten dibidangnya loh! tunggu apalagi? yuk gabung sekarang!"/>
                    <Button kind='btn-light jumbo-button-1' contain='gabung kelas' to='#kelas' />
                    <Button kind='btn-outline-light jumbo-button-2' contain='apa keuntungannya?' />
                </Container>
            </JumbotronWrapper>
        </>
    )
}

export default MainJumbotron
