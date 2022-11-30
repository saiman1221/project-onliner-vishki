import React from "react";
import s from './Card.module.css';

export function Card(props) {
    return (
        <div className={s.card}>
            <div className={s.info}>
                <div className={s.info_img}>
                    <img src={props.cardsParams.img} alt="Фото вышки"/>
                </div>
                <div className={s.size_buttons}>
                    {props.cardsParams.sizes.map(item => <button className={s.size_button}>{item}</button>)}
                </div>
                <h3>{props.cardsParams.name}</h3>
                <p className={s.comments}>{props.cardsParams.comments}</p>
                <ul>
                    {props.cardsParams.price.map(item => <li>{item}</li>)}
                </ul>
                <br/>
                <p className={s.ps}>{props.cardsParams.ps1}</p>
                <p className={s.ps}>{props.cardsParams.ps2}</p>
            </div>
            <button className={s.button}>Заказать аренду</button>
        </div>
    );
}