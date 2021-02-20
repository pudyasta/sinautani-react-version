import React, { useEffect } from 'react'
import { CatJumbotron, About, Kelas, Footer } from '../../ecosystems'
import { JumbotronHidro, HidropponikAbout } from '../../../assets'
import { Element, animateScroll } from 'react-scroll'
import { FeedbackButton } from '../../components'



export default function Hidroponik() {
    useEffect(() => {
        animateScroll.scrollToTop({
            duration: 0.1
        })
    })
    return (
        <>
            <CatJumbotron image={JumbotronHidro} heading='Hidroponik' paragraph="Pada kelas online ini kamu akan belajar cara bertani secara konvensional. Kelas ini cocok untuk kamu yang baru mulai terjun di dunia hidroponik pada umumnya. " to='kelas' />

            <About image={HidropponikAbout} heading='Mengapa harus belajar Hidroponik?' paragraph=' Hidroponik adalah sistem pertanian modern atau suatu teknik budidaya tanaman dengan menggunakan media (media air dan bahan yang bersifat porus, misalnya arang sekam, pasir, batu apung, dan batu kali). Oleh karena media tanamnya bukan tanah. Tumbuhan hidroponik memperoleh makanan dari zat-zat anorganik yang diberikan pada saat penyiraman. Hidroponik tidak tergantung pada tempat dan musim (luas tanah dan ketinggian tempat) karena dapat dikelola oleh manusia secara khusus dan kondisi lingkungan terkontrol.Teknik budidaya atau bertanam secara hidroponik dapat dilakukan oleh orang yang tidak memiliki lahan. Bahkan tanaman hidroponik dapat diterapkan oleh penghuni apartemen sempit yang dapat menghasilkan mutu yang lebih baik. Bebas dari serangan hama dan penyakit yang berasal dari dalam tanah.Biaya yang relatif tidak diperlukan, tetapi hanya memerlukan tenaga dan waktu. ' />

            <Element name='kelas'>
                <Kelas />
            </Element>

            <FeedbackButton />

            <Footer />
        </>
    )
}
