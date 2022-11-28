import React from "react";
import s from './MainScreen.module.css';
import {FirstHeader} from "../FirstHeader/FirstHeader";
import {SecondHeader} from "../SecondHeader/SecondHeader";

import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import {Card} from "../Card/Card";

export function MainScreen() {
    const cardsParams = [
        {
            name: 'Вышка тура ВСР-1',
            img: img1,
            comments: '(рабочая площадка 0,7 на 1,6 метра)',
            sizes: ['до 7,6 м'],
            price: ['10 рублей / 1 сутки', '50 рублей / 7 дней', '100 рублей / 30 дней'],
            ps1: 'Комплект для установки на лестничный марш +20%',
            ps2: 'Дополнительный комплект настилов  +20%'
        },
        {
            name: 'Вышка тура ВСР-4',
            img: img2,
            comments: '(рабочая площадка 1.2 на 2 метра)',
            sizes: ['до 5 м', 'до 10 м', 'до 18,7 м'],
            price: ['12 рублей / 1 сутки', '60 рублей / 7 дней', '120 рублей / 30 дней'],
            ps1: 'Комплект для установки на лестничный марш +20%',
            ps2: 'Дополнительный комплект настилов  +20%'
        },
        {
            name: 'Вышка тура ВСР-7',
            img: img3,
            comments: '(рабочая площадка 1.2 на 2 метра)',
            sizes: ['до 5 м', 'до 10 м', 'до 21 м'],
            price: ['20 рублей / 1 сутки', '100 рублей / 7 дней', '200 рублей / 30 дней'],
            ps1: ' Дополнительный комплект настилов  +20%'
        }
    ]

    return (
        <div className={s.main_screen}>
            <FirstHeader/>
            <SecondHeader/>
            <div className={'container'}>
                <h1>Аренда вышки туры в Минске</h1>
                <button className={s.button}>Заказать звонок</button>
                <div className={s.cards}>
                    {cardsParams.map(item => <Card cardsParams={item}/>)}
                </div>
                <p className={s.text}>* Минимальный срок аренды - 3 дня</p>
            </div>
        </div>
    );
}