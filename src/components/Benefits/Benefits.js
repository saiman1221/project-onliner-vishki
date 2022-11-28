import React from "react";
import s from './Benefits.module.css';

import img1 from './images/img1.svg';
import img2 from './images/img2.svg';
import img3 from './images/img3.svg';

export function Benefits() {
    return (
        <div className={s.benefits}>
            <h2>Наши преимущества:</h2>
            <div className={s.cards}>
                <div className={s.card}>
                    <img src={img1} alt=""/>
                    <p>Наличный и безналичный расчет</p>
                </div>
                <div className={s.card}>
                    <img src={img3} alt=""/>
                    <p>Можем помощь с доставкой</p>
                </div>
                <div className={s.card}>
                    <img src={img2} alt=""/>
                    <p>Аренда без залога.<br/>Нужен только паспорт</p>
                </div>

            </div>
        </div>
    );
}