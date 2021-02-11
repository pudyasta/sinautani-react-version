import React from 'react'
import './style.css'
import { KelasSmall } from '../../atoms'

const Kelas = (props) => {
    return (
        <>
            <div className="category" id="kelas">
                <div className="container">
                    <div className="title-category">
                        <h3 className="category-title">Pilih Kelas </h3>
                        <KelasSmall text={'Yuk, pilih kelas yang ingin kamu ikuti, jangan lupa siapkan buku untuk mencatat ya. Klik pada kelas yang ingin kamu ikuti untuk bergabung ke kelas!'} />
                    </div>
                    <div className="row mt-4 ">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Kelas
