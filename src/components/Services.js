import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faCaravan, faTractor, faTruck} from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <div id="services" className="services">
            <h1 className="py-5">Myjnia dostosowane do potrzeb klienta</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faCar}size="2x"/>
                            </div>
                                <h3>Samochód osobowy</h3>
                                <p>50 ZLT</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faCaravan}size="2x"/>
                            </div>
                                <h3>Przyczepa </h3>
                                <p>60 ZLT</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faTruck}size="2x"/>
                            </div>
                                <h3>Ciężarówka</h3>
                                <p>100 ZLT</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faTractor}size="2x"/>
                            </div>
                                <h3>Ciągnik</h3>
                                <p>150 ZLT</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Services
