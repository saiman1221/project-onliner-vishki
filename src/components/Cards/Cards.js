import React from "react";
import {Card} from "./Card/Card";
import './Cards.css'

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
                ['10 рублей / 1 сутки', '50 рублей / 7 дней', '100 рублей / 30 дней']
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
                ['10 рублей / 1 сутки', '50 рублей / 7 дней', '100 рублей / 30 дней'],
                ['12 рублей / 1 сутки', '60 рублей / 7 дней', '120 рублей / 30 дней'],
                ['15 рублей / 1 сутки', '80 рублей / 7 дней', '160 рублей / 30 дней']
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
                ['12 рублей / 1 сутки', '60 рублей / 7 дней', '120 рублей / 30 дней'],
                ['15 рублей / 1 сутки', '80 рублей / 7 дней', '160 рублей / 30 дней'],
                ['20 рублей / 1 сутки', '100 рублей / 7 дней', '200 рублей / 30 дней']
            ],
            price: ['20 рублей / 1 сутки', '100 рублей / 7 дней', '200 рублей / 30 дней'],
            ps1: ' Дополнительный комплект настилов  +20%'
        }
    ]

    function updateModal(modalOpen){
        props.modal(modalOpen)
        console.log(modalOpen);
    }

    return(
        <div className={'Cards__cards container'}>
            <div className={'Cards__content'}>
                {cardsParams.map(item => <Card cardsParams={item} modal={updateModal}/>)}
            </div>
            <div className={'Cards__content__mobil'}>
                {cardsParams.map(item => <Card cardsParams={item} modal={updateModal}/>)}
            </div>
            <p className={'Cards__text'} id={'product_info'}>* Минимальный срок аренды - 3 дня</p>
        </div>
    )
}