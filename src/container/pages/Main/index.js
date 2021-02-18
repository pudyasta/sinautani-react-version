import React, { Component } from 'react'
import { MainJumbotron as Jumbotron, About, Kelas, Benefit, Footer } from '../../ecosystems'
import { MainAbout, PertanianCat, PerkebunanCat, HidroponikCat } from '../../../assets'
import { CatKelas, FeedbackButton } from '../../components'
import { Element, animateScroll } from 'react-scroll'

export default class Main extends Component {
    componentDidMount() {
        animateScroll.scrollToTop({
            duration: 0.1
        })
    }
    render() {
        return (
            <>
                <Jumbotron />
                <About
                    image={MainAbout}
                    heading="Selamat Datang di Sinau Tani Indonesia!"
                    paragraph="Sinau Tani Indonesia atau biasa di singkat sitani, adalah sebuah platform website yang menyediakan kelas online gratis, yang membahas berbagai hal mengenai pertanian dan perkebunan dari tradisional maupun pertanian modern.
                    Sitani, dirancang untuk mudah dipahami dan digunakan di semua elemen masyarakat. Materi yang disampaikan pun dibuat mudah dipahami dan dipandu mentor yang berpengalaman loh! "
                />
                <Element name='kelas'>
                    <Kelas >
                        <CatKelas
                            to='/pertanian'
                            image={PertanianCat}
                            title="Kategori Pertanian"
                            text='Tersedia 4 kelas'
                        />
                        <CatKelas
                            to='/pertanian'
                            image={PerkebunanCat}
                            title="Kategori Perkebunan"
                            text='Tersedia 4 kelas'
                        />
                        <CatKelas
                            to='/pertanian'
                            image={HidroponikCat}
                            title="Kategori Hidroponik"
                            text='Tersedia 4 kelas'
                        />
                    </Kelas>
                </Element>
                <Element name='benefit'>
                    <Benefit />
                </Element>
                <FeedbackButton />
                <Footer />
            </>
        )
    }
}
