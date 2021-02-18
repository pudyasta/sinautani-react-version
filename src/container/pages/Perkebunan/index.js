import React, { Component } from 'react'
import { CatJumbotron, About, Kelas, Footer } from '../../ecosystems'
import { JumbotronKebun, PerkebunanAbout } from '../../../assets'
import { Element, animateScroll } from 'react-scroll'
import { FeedbackButton } from '../../components'


export default class Perkebunan extends Component {
    componentDidMount() {
        animateScroll.scrollToTop({
            duration: 0.1
        })

    }
    render() {

        return (
            <>
                <CatJumbotron heading='Perkebunan' paragraph='Pada kelas online ini kamu akan belajar cara bertani secara konvensional. Kelas ini cocok untuk kamu yang baru mulai terjun di dunia perkebunan pada umumnya. ' image={JumbotronKebun} to='kelas' />
                <About image={PerkebunanAbout} heading='Mengapa harus belajar Perkebunan?' paragraph=' Perkebunan adalah usaha-usaha di bidang pertanian dengan mengelola dan memasarkan hasil produksi yang biasanya tidak disertai dengan produksi. Keadaan seperti ini sangat mudah ditemukan dalam kehidupan. Perkebunan dapat memberikan lapangan pekerjaan masyarakat, khususnya petani-petani di Indonesia. Hal ini sangatlah wajar mengingat untuk Indonesia sendiri adalah negara agraris (pertanian) yang didukung dengan tingkat kesuburan tanah yang tinggi. Yuk ikut serta menjadi #pahlawanpangan, Berkebun itu asyik loh! ' />
                <Element name='kelas'>
                    <Kelas />
                </Element>
                <FeedbackButton />
                <Footer />
            </>
        )
    }
}
