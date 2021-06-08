import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon, 
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TelegramShareButton,
    TelegramIcon,
    
} from "react-share";
const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-mb-6 col-sm-6">
                        <div className="d-flex">
                            <p>city Lublin Main st 2020 office #223</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:555989898">+48555989989</a>
                        </div>
                        <div className="d-flex">
                            <p>bwas.bwash@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a>
                                <br/>
                                <a className="footer-nav">About me</a>
                                <br/>
                                <a className="footer-nav">Services</a>
                                <br/>                                
                            </div>
                            <div className="col">
                                <a className="footer-nav">Experience</a>
                                <br/>
                                <a className="footer-nav">Portfolio</a>
                                <br/>
                                <a className="footer-nav">Contacts</a> 
                                <br/>                               
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                                url={"https://www.facebook.com/alex.sidorenko.507"}
                                quote={"My Fb"}
                                hashtag="#javascript"
                            >
                                <FacebookIcon className="mx-3" size={36}/>
                            </FacebookShareButton>

                            <TwitterShareButton
                                url={"https://www.facebook.com/alex.sidorenko.507"}
                                quote={"My Fb"}
                                hashtag="#javascript"
                            >
                                <TwitterIcon className="mx-3" size={36}/>
                            </TwitterShareButton>

                            <LinkedinShareButton
                                url={"https://www.facebook.com/alex.sidorenko.507"}
                                quote={"My Fb"}
                                hashtag="#javascript"
                            >
                                <LinkedinIcon className="mx-3" size={36}/>
                            </LinkedinShareButton>

                            <TelegramShareButton
                                url={"https://www.facebook.com/alex.sidorenko.507"}
                                quote={"My Fb"}
                                hashtag="#javascript"
                            >
                                <TelegramIcon className="mx-3" size={36}/>
                            </TelegramShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;B-B | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Footer
