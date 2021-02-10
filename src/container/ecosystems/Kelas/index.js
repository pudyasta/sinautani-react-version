import React from 'react'
import './style.css'
import { KelasSmall } from '../../atoms'

const Kelas = (props) => {
    return (
        <>
            <div class="category" id="kelas">
                <div class="container">
                    <div class="title-category">
                        <h3 class="category-title">Pilih Kelas </h3>
                        <KelasSmall text={'Yuk, pilih kelas yang ingin kamu ikuti, jangan lupa siapkan buku untuk mencatat ya. Klik pada kelas yang ingin kamu ikuti untuk bergabung ke kelas!'} />
                    </div>
                    <div class="row mt-4 pb-5">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Kelas
