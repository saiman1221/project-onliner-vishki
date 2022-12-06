import React from "react";
import './Benefits.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from './images/img1.svg';
import img2 from './images/img2.svg';
import img3 from './images/img3.svg';

export function Benefits() {
    return (
        <div className={"Benefits__benefits"}>
            <h2  id={'manual'}>Наши преимущества:</h2>
            <div className={"Benefits__cards"}>
                <div className={"Benefits__card"}>
                    <img src={img1} alt=""/>
                    <p>Наличный и безналичный расчет</p>
                </div>
                <div className={"Benefits__card"}>
                    <img src={img3} alt=""/>
                    <p>Можем помочь с доставкой</p>
                </div>
                <div className={"Benefits__card"}>
                    <img src={img2} alt=""/>
                    <p>Аренда без залога.<br/>Нужен только паспорт</p>
                </div>
            </div>
            <div className={"Benefits__cards Benefits__cards__mobil"}>
               <Carousel showThumbs={false} showStatus={false} showArrows={false} autoPlay={true} infiniteLoop={true} interval={3000}>
                    <div className={"Benefits__card"}>
                        <img src={img1} alt=""/>
                        <p>Наличный и безналичный расчет</p>
                    </div>
                    <div className={"Benefits__card"}>
                        <img src={img3} alt=""/>
                        <p>Можем помочь с доставкой</p>
                    </div>
                    <div className={"Benefits__card"}>
                        <img src={img2} alt=""/>
                        <p>Аренда без залога.<br/>Нужен только паспорт</p>
                    </div>
               </Carousel>
            </div>
        </div>
    );
}