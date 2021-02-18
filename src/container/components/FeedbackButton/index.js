import React from 'react'
import './style.css'

const FeedbackButton = () => {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="feedback-box">
                    <div className="d-flex justify-content-between align-items-center feedback-content">
                        <h4 className="feed-big ">Lalu, bagaimana pendapatmu tentang si tani?</h4>
                        <button type="button" className="btn btn-success testi-button btn1" data-toggle="modal" data-target=".bd-example-modal-sm">KIRIM PENDAPATMU</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeedbackButton
