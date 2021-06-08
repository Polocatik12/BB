import React from "react";
import bmw5 from "../images/car/bmw5.jpg";
import bmwf13 from "../images/car/bmwf13.jpg";
import cls from "../images/car/cls.jpg";
import hur from "../images/car/hur.jpg";
import porsh from "../images/car/porsh.jpg";
import roll from "../images/car/roll.jpg";
//FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus} from '@fortawesome/free-solid-svg-icons'; 
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer} from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";


const Portfolio = () => {

//M5
const openPopupboxBmw5 =() =>{
    const content = (
   <>
   <img className="portfolio-image-popupbox" src={bmw5} alt="Сommercial M5 F10 & CLS63 AMG"/>
   <p>LIMMA - Сommercial M5 F10 & CLS63 AMG Part 2 "Sultan tires"</p>
    <b>Youtube:</b> <a className="hyper-link" onClick={()=>window.open("https://www.youtube.com/watch?v=ao-eFyuoH4I")}>https://www.youtube.com/watch?v=ao-eFyuoH4I</a>
    </>
    )
    PopupboxManager.open({content})
    }

const PopupboxManagerBmw5={
      titleBar: {
        enable: true,
        text: 'Сommercial M5'
      },
      fadeIn: true,
      fadeInSpeed: 500
    }


//F13
const openPopupboxBmwf13 =() =>{
    const content = (
   <>
   <img className="portfolio-image-popupbox" src={bmwf13} alt="BMW M6 F13 MANHART 900..."/>
   <p>BMW M6 F13 MANHART 900л.с. Stage 3 - LIMMA & FELIX FERRO</p>
    <b>Youtube:</b> <a className="hyper-link" onClick={()=>window.open("https://www.youtube.com/watch?v=MYsjvB_jcpA")}>https://www.youtube.com/watch?v=MYsjvB_jcpA</a>
    </>
    )
    PopupboxManager.open({content})
}

const popupboxConfigBmwf13 ={
        titleBar:{
            enable: true,
            text: "BMW M6 F13 MANHART 900."
        },
        fadeIn: true,
        fadeInSpeed:500
}

//Cls
const openPopupboxCls =() =>{
    const content = (
   <>
   <img className="portfolio-image-popupbox" src={cls} alt="Demon CLS63 AMG - LIMMA..."/>
   <p>Demon CLS63 AMG - LIMMA</p>
    <b>Youtube:</b> <a className="hyper-link" onClick={()=>window.open("https://www.youtube.com/watch?v=fGlTwlryXSM")}>https://www.youtube.com/watch?v=fGlTwlryXSM</a>
    </>
    )
    PopupboxManager.open({content})
}

const popupboxConfigCls ={
        titleBar:{
            enable: true,
            text: "Demon CLS63 AMG."
        },
        fadeIn: true,
        fadeInSpeed:500
}

//Hur
const openPopupboxHur =() =>{
    const content = (
   <>
   <img className="portfolio-image-popupbox" src={hur} alt="Lamborghini Huracán..."/>
   <p>LIMMA - Lamborghini Huracán & McLaren 650S Spider "Dubai"</p>
    <b>Youtube:</b> <a className="hyper-link" onClick={()=>window.open("https://www.youtube.com/watch?v=52LUnBKz0u0")}>https://www.youtube.com/watch?v=52LUnBKz0u0</a>
    </>
    )
    PopupboxManager.open({content})
}

const popupboxConfigHur ={
        titleBar:{
            enable: true,
            text: "Lamborghini Huracán"
        },
        fadeIn: true,
        fadeInSpeed:500
}

//Porsh
const openPopupboxPorsh =() =>{
    const content = (
   <>
   <img className="portfolio-image-popupbox" src={porsh} alt="Porsche 911 Turbo S..."/>
   <p>Porsche 911 Turbo S Sleep Felix Ferro & LIMMA Girl Cars</p>
    <b>GitHub:</b> <a className="hyper-link" onClick={()=>window.open("https://www.youtube.com/watch?v=ZugNU31znlA")}>https://www.youtube.com/watch?v=ZugNU31znlA</a>
    </>
    )
    PopupboxManager.open({content})
}

const popupboxConfigPorsh ={
        titleBar:{
            enable: true,
            text: "Porsche 911 Turbo S"
        },
        fadeIn: true,
        fadeInSpeed:500
}

//Roll
const openPopupboxRoll =() =>{
    const content = (
   <>
   <img className="portfolio-image-popupbox" src={roll} alt="Rolls Royce..."/>
   <p>Rolls Royce Wraith & Iqauto</p>
    <b>Youtube:</b> <a className="hyper-link" onClick={()=>window.open("https://www.youtube.com/watch?v=8Fw65dBPUNE")}>https://www.youtube.com/watch?v=8Fw65dBPUNE</a>
    </>
    )
    PopupboxManager.open({content})
}

const popupboxConfigRoll ={
        titleBar:{
            enable: true,
            text: "Rolls Royce"
        },
        fadeIn: true,
        fadeInSpeed:500
}


    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row row-cols-auto justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxBmw5}>
                      <img className="portfolio-image" src={bmw5} alt="Сommercial M5 F10 & CLS63 AMG"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/> 
                     </div>
                {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxBmwf13}>
                     <img className="portfolio-image" src={bmwf13} alt="BMW M6 F13 MANHART 900"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                     </div>
                {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxCls}>
                         <img className="portfolio-image" src={cls} alt="Demon CLS63 AMG - LIMMA..."/>
                         <div className="overflow"></div>
                         <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                     </div>
                {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxHur}>
                        <img className="portfolio-image" src={hur} alt="Lamborghini Huracán..."/>
                         <div className="overflow"></div>
                         <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                {/* - */}
                         <div className="portfolio-image-box" onClick={openPopupboxPorsh}>
                         <img className="portfolio-image" src={porsh} alt="Porsche 911 Turbo..."/>
                            <div className="overflow"></div>
                         <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                          </div>
                        {/* - */}
                        <div className="portfolio-image-box" onClick={openPopupboxRoll}>
                        <img className="portfolio-image" src={roll} alt="Rolls Royce..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                        </div>
                </div>
            </div>
            <PopupboxContainer {...PopupboxManagerBmw5}/>
            <PopupboxContainer {...popupboxConfigBmwf13}/>
            <PopupboxContainer {...popupboxConfigCls}/>
            <PopupboxContainer {...popupboxConfigHur}/>
            <PopupboxContainer {...popupboxConfigPorsh}/>
            <PopupboxContainer {...popupboxConfigRoll}/>
        </div>
           
    )
}

export default Portfolio
