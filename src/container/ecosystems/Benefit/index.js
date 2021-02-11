import React from 'react'
import { AboutHeading, KelasSmall } from '../../atoms'
import { Container } from 'react-bootstrap'
import { BenefitBaloon } from '../../components'
import { Keuntungan1, Keuntungan2, Keuntungan3, Keuntungan4 } from '../../../assets'

const CONTAINER = {
    padding: '70px 0'
}

const Benefit = () => {
    return (
        <>
            <Container className='text-center' style={CONTAINER}>
                <AboutHeading heading='Apa keuntungan belajar bareng si tani?' />
                <div className='row'>

                    <KelasSmall text='Dengan gabung ke kelas gratis di si tani tentu aja ada banyak keuntunganya loh, kira-kira apa saja keuntungnya yuk simak!' />
                    <BenefitBaloon title="Tanpa dipungut biaya apapun" paragraph="Kamu nggak perlu mengeluarkan uang satu rupiah pun untuk mengukuti semua kelas yang ada." image={Keuntungan1} />
                    <BenefitBaloon title="Dibimbing mentor berpengalaman" paragraph="Semua mentor si tani berpengalaman pada bidangnya dan memiliki cara mengajar yang menyenangkan." image={Keuntungan2} />
                    <BenefitBaloon title="Video dan materi yang berkualitas" paragraph="Video pembelajaran yang ada di si tani, semua memiliki resolusi maksimal hingga 1080p! dan materi yang dibuat mudah dipahami." image={Keuntungan3} />
                    <BenefitBaloon title="Gratis ringkasan materi yang bisa kamu unduh" paragraph="Setelah menyimak pembelajaran, kamu juga bisa mendapatkan ringkasan materi yang disampaikan untuk kamu pelajari lagi loh.." image={Keuntungan4} />
                </div>
            </Container>
        </>
    )
}

export default Benefit
