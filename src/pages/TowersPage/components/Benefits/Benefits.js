import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Benefits.css';
import img1 from './images/img1.svg';
import img2 from './images/img2.svg';
import img3 from './images/img3.svg';

export function Benefits() {
    let cardsInfo = [
        {
            'imgLink': img1,
            'text': 'Наличный и безналичный расчет'
        },
        {
            'imgLink': img3,
            'text': 'Можем помочь с доставкой'
        },
        {
            'imgLink': img2,
            'text': `Аренда без залога.Нужен только паспорт`
        },
    ]

    return (
        <div className={"Benefits"}>
            <h2  id={'manual'}>Наши преимущества:</h2>
            <div className={"cards container"}>
                {cardsInfo.map(el => {
                    return(
                        <div className={"card"}>
                            <img src={el.imgLink} alt="Иконка"/>
                            <p>{el.text}</p>
                        </div>
                    )
                })}
            </div>
            <div className={"cards mobil"}>
               <Carousel showThumbs={false} showStatus={false} showArrows={false} autoPlay={true} infiniteLoop={true} interval={3000}>
                   {cardsInfo.map(el => {
                       return(
                           <div className={"card"}>
                               <img src={el.imgLink} alt="Иконка"/>
                               <p>{el.text}</p>
                           </div>
                       )
                   })}
               </Carousel>
            </div>
        </div>
    );
}