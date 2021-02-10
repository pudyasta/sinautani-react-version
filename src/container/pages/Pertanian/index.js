import React from 'react'
import { CatJumbotron, About, Kelas } from '../../ecosystems'
import { JumbotronTani, MainAbout } from '../../../assets'
import { CatKelas } from '../../components'


const Pertanian = () => {
    return (
        <>
            <CatJumbotron image={JumbotronTani} heading='Pertanian' paragraph='Pada kelas online ini kamu akan belajar cara bertani secara konvensional. Kelas ini cocok untuk kamu yang baru mulai terjun di dunia Pertanian pada umumnya.' />
            <About heading='Mengapa harus belajar pertanian?' paragraph=' Pertanian merupakan salah satu sektor penopang kehidupan suatu negara. Pertanian sebagai sektor penghasil bahan pangan yang dibutuhkan oleh semua masyarakat, baik di pedesaan maupun perkotaan.Semakin berkembangnya populasi manusia kebutuhan pangan tentu semakin banyak dibutuhkan.Karena indonesia mempunyai lahan luas dan potensi pertanian tradisional yang tidak dimiliki oleh negara lain Yuk ikut serta menjadi #pahlawanpangan, jadi petani itu keren! ' image={MainAbout} />
            <Kelas >
                <CatKelas
                    to='/pertanian'
                    image={MainAbout}
                    title="Kategori Pertanian"
                    text='Tersedia 4 kelas'
                />
            </Kelas>
        </>
    )
}

export default Pertanian
