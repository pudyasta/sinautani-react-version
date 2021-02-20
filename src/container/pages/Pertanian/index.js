import React, { useEffect } from 'react'
import { CatJumbotron, About, Kelas, Footer } from '../../ecosystems'
import { JumbotronTani, PertanianAbout } from '../../../assets'
import { FeedbackButton } from '../../components'
import { Element, animateScroll } from 'react-scroll'


export default function Pertanian() {
    useEffect(() => {
        animateScroll.scrollToTop({
            duration: 0.1
        })
    })
    return (
        <>
            <CatJumbotron image={JumbotronTani} heading='Pertanian' paragraph='Pada kelas online ini kamu akan belajar cara bertani secara konvensional. Kelas ini cocok untuk kamu yang baru mulai terjun di dunia Pertanian pada umumnya.' to='kelas' />
            <About heading='Mengapa harus belajar pertanian?' paragraph=' Pertanian merupakan salah satu sektor penopang kehidupan suatu negara. Pertanian sebagai sektor penghasil bahan pangan yang dibutuhkan oleh semua masyarakat, baik di pedesaan maupun perkotaan.Semakin berkembangnya populasi manusia kebutuhan pangan tentu semakin banyak dibutuhkan.Karena indonesia mempunyai lahan luas dan potensi pertanian tradisional yang tidak dimiliki oleh negara lain Yuk ikut serta menjadi #pahlawanpangan, jadi petani itu keren! ' image={PertanianAbout} />
            <Element name='kelas'>
                <Kelas >

                </Kelas>
            </Element>
            <FeedbackButton />
            <Footer />
        </>
    )
}

