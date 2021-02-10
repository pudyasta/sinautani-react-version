import React, { Component } from 'react'
import { MainJumbotron as Jumbotron, About, Kelas } from '../../ecosystems'
import { MainAbout, Pertanian } from '../../../assets'
import { CatKelas } from '../../components'

export default class Main extends Component {
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
                <Kelas >
                    <CatKelas
                        to='/pertanian'
                        image={Pertanian}
                        title="Kategori Pertanian"
                        text='Tersedia 4 kelas'
                    />
                </Kelas>
            </>
        )
    }
}
