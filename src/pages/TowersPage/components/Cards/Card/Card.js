import React, {useEffect, useState} from "react";
import './Card.css';

export function Card(props) {
    const [infoToShow, setInfoToShow] = useState(0);
    const [trackerPosition, setTrackerPosition] = useState(0);

    const handleClick = (id) => {
        setTrackerPosition(id);
        setInfoToShow(id);
    }

    return (
        <div className={"Card"}>
            <div className={"info"}>
                <div className={"img"}>
                    <img src={props.cardsParams.img} alt="Фото вышки"/>
                </div>
                <div className={"size_buttons"}>
                    <div className={'tracker'} style={{transform: `translateX(${trackerPosition * 100}%)`}}></div>
                    {props.cardsParams.sizes.map((item, id) => <button
                        className={infoToShow === id ? 'active size_button' : 'size_button'}
                        onClick={() => handleClick(id)}>{item}</button>)}
                </div>
                <h3>{props.cardsParams.name}</h3>
                <p className={"comments"}>{props.cardsParams.comments}</p>
                <div className={'prices'}>
                    <div className={'prices_wrapper'} style={{transform: `translateX(-${trackerPosition * 100}%)`}}>
                        {props.cardsParams.variations.map(el => <ul className={'item'} >
                            {el.map(price => <li>{price.price} рублей / {price.days} {price.days === 1 ? 'сутки' : 'дней'}</li>)}
                        </ul>)}
                        {/*{props.cardsParams.variations[infoToShow].map(el => <li>{el.price} рублей / {el.days} {el.days === 1 ? 'сутки' : 'дней'}</li>)}*/}
                    </div>
                </div>
                <p className={"ps"}>{props.cardsParams.ps1}</p>
                <p className={"ps"}>{props.cardsParams.ps2}</p>
            </div>
            <button className={"button"} onClick={() => {
                props.modal(true)
            }}>Заказать аренду
            </button>
        </div>
    );
}