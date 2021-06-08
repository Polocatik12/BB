import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                    <img className="profile-jpg" src={author} alt="author..." />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About me</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                         Aperiam facere laudantium eius voluptatem, quam deserunt quaerat temporibus, ad iure obcaecati fuga harum hic porro vero, reiciendis excepturi eveniet dicta a?
                          Amet eveniet distinctio expedita ex cumque error veritatis, dolorem ea suscipit, ratione, aspernatur ullam veniam natus excepturi obcaecati! Unde in voluptatem quis pariatur porro neque modi quas. 
                          Aut ipsum est, quos, similique commodi odit fugit delectus dolorem tempore praesentium corrupti perspiciatis voluptas iusto!
                           Nostrum distinctio rem impedit a, quos quaerat totam quidem laboriosam.
                            Ullam fugiat ea labore eveniet velit dolor reiciendis nam debitis iure placeat, accusantium corporis molestiae laudantium totam non blanditiis ratione autem necessitatibus animi aut error adipisci nulla! 
                            Necessitatibus ducimus blanditiis, voluptas maxime, provident, quasi illo deserunt voluptate at cupiditate sequi.
                        Iste, similique ipsum fugit recusandae dolores vero cupiditate architecto officiis itaque, dolor molestiae consequatur optio autem! 
                        Asperiores, neque saepe voluptas voluptatum fugiat corporis eum voluptatibus similique id ut accusantium numquam, repellendus blanditiis placeat animi minus iure!
                         
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
