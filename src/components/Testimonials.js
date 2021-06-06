import React from 'react'
import TestimonialsCourousel from "./TestimonialsCourousel";

const Testimonials = () => {
    return (
        <div className="testimonials">
            <h1>my happy clients</h1>
            <div className="container">
                <div className="testimonials-content">
                    <TestimonialsCourousel/>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
