import React from "react";
import {Card} from "./Card/Card";
import './Cards.css';

import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";

export const Cards = (props) => {
    const cardsParams = [
        {
            name: 'Вышка тура ВСР-1',
            img: img1,
            comments: '(рабочая площадка 0,7 на 1,6 метра)',
            sizes: ['до 7,6 м'],
            variations: [
                [{price: 10, days: 1}, {price: 50, days: 7}, {price: 100, days: 30}]
            ],
            ps1: 'Комплект для установки на лестничный марш +20%',
            ps2: 'Дополнительный комплект настилов  +20%'
        },
        {
            name: 'Вышка тура ВСР-4',
            img: img2,
            comments: '(рабочая площадка 1.2 на 2 метра)',
            sizes: ['до 5 м', 'до 10 м', 'до 18,7 м'],
            variations: [
                [{price: 10, days: 1}, {price: 50, days: 7}, {price: 100, days: 30}],
                [{price: 12, days: 1}, {price: 60, days: 7}, {price: 120, days: 30}],
                [{price: 15, days: 1}, {price: 80, days: 7}, {price: 160, days: 30}]
            ],
            ps1: 'Комплект для установки на лестничный марш +20%',
            ps2: 'Дополнительный комплект настилов  +20%'
        },
        {
            name: 'Вышка тура ВСР-7',
            img: img3,
            comments: '(рабочая площадка 2 на 2 метра)',
            sizes: ['до 5 м', 'до 10 м', 'до 21 м'],
            variations: [
                [{price: 12, days: 1}, {price: 60, days: 7}, {price: 120, days: 30}],
                [{price: 15, days: 1}, {price: 80, days: 7}, {price: 160, days: 30}],
                [{price: 20, days: 1}, {price: 100, days: 7}, {price: 200, days: 30}]
            ],
            price: ['20 рублей / 1 сутки', '100 рублей / 7 дней', '200 рублей / 30 дней'],
            ps1: ' Дополнительный комплект настилов  +20%'
        }
    ]

    function updateModal(modalOpen){
        props.modal(modalOpen);
    }

    return(
        <div className={'Cards container'}>
            <div className={'content'}>
                {cardsParams.map(item => <Card cardsParams={item} modal={updateModal}/>)}
            </div>
            <div className={'content__mobil'}>
                {cardsParams.map(item => <Card cardsParams={item} modal={updateModal}/>)}
            </div>
            <p className={'text'}>* Минимальный срок аренды - 3 дня</p>
        </div>
    )
}