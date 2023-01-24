import React from "react";
import './AdoutProduct.css';

import productImage from './images/product_image.png';
import docsIco from './images/docs_ico.svg';

export const AboutProduct = () => (
    <div className={'About_product container'}>
        <h2>Леса строительные ЛРСП-40</h2>
        <div className={'content'}>
            <img src={productImage} alt="Изображение"/>
            <ul>
                <li>работа на небольшой высоте</li>
                <li>оперативная сборка </li>
                <li>малые габариты</li>
                <li>для любых видов строительных работ</li>
                <li>соответствие ГОСТу</li>
            </ul>
        </div>
        <div className={'docs'}>
            <p>Здесь вы можете ознакомиться с  инструкцией по эксплуатацией и  сертификатом соответствия:</p>
            <div className={'content'}>
                <div className={'item'}>
                    <img src={docsIco} alt="Иконка"/>
                    <a href="#">Инструкция по эксплуатации (PDF)</a>
                </div>
                <div className={'item'}>
                    <img src={docsIco} alt="Иконка"/>
                    <a href="#">Сертификат (PDF)</a>
                </div>
            </div>
        </div>
    </div>
)