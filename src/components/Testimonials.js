import React from 'react'
import TestimonialsCourousel from "./TestimonialsCourousel";

const Testimonials = () => {
    return (
        <div id="testimonials" className="testimonials">
            <h1>zadowoleni klienci</h1>
            <div className="container">
                <div className="testimonials-content">
                    <TestimonialsCourousel/>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
