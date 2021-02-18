import React from 'react'
import { Link } from 'react-router-dom'
import { Logo2 } from '../../../assets'
import './style.css'

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="footer">
                    <div className="container">
                        <img className="image-footer pb-4" src={Logo2} alt="a" />
                        <div className="row footer-content">
                            <div className="col-md-6">
                                <div className="footer-contact">
                                    <li className="footer-text-thin">Sinau tani adalah sebuah website penyedia kursus online gratis, yang berbasis di Yogyakarta, Indonesia dan didirikan pada Oktober 2020</li>
                                    <li className="footer-text-thin">Jika anda memiliki ide, kritik atau saran,bisa menghubungi hotline kami di </li>
                                    <li className="footer-text-normal">(+62)81234567890</li>
                                    <li className="footer-text-normal">sales-sitani-idn@gmail.com</li>
                                    <li className="footer-text-normal">kerjasama-sitani-idn@gmail.com</li>
                                </div>
                            </div>
                            <div className="col-md-2 bantuan-link">
                                <div>
                                    <li>
                                        <strong>Menu</strong>
                                    </li>
                                    <li className="footer-text-thin">Kategori :</li>
                                    <li>
                                        <Link to="/pertanian" className="footer-text-normal link">Pertanian</Link>
                                    </li>
                                    <li>
                                        <Link to="/perkebunan" className="footer-text-normal link">Perkebunan</Link>
                                    </li>
                                    <li>
                                        <Link to="/hidroponik" className="footer-text-normal link">Hidroponik</Link>
                                    </li>
                                    <li>
                                        <a href="/#testimoni" className="footer-text-normal link">Testimoni</a>
                                    </li>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div>
                                    <li>
                                        <strong>Kantor</strong>
                                    </li>
                                    <li className="footer-text-thin">
                                        Yogyakarta, Indonesia
                                   </li>
                                    <li className="mt-3">
                                        <strong>Support dan Donasi</strong>
                                    </li>
                                    <li className="footer-text-thin">
                                        (+62)81234567890
                                  </li>
                                    <li className="footer-text-thin">
                                        donasi_sitani@gmail.com
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-end d-flex justify-content-center">
                    <h5 className="ending mt-2">© 2020, Sitani. All Rights Reserved.</h5>
                </div>
            </footer>
        </>
    )
}

export default Footer
