import React, {useState} from "react";
import './Card.css';

export function Card(props) {
    const [infoToShow, setInfoToShow] = useState(0);

    return (
        <div className={"Card__card"}>
            <div className={"Card__info"}>
                <div className={"Card__info_img"}>
                    <img src={props.cardsParams.img} alt="Фото вышки"/>
                </div>
                <div className={"Card__size_buttons"}>
                    {props.cardsParams.sizes.map((item, id) => <button className={infoToShow !== id ? 'Card__size_button' : "Card__size_button Card__active"} onClick={()=>setInfoToShow(id)}>{item}</button>)}
                </div>
                <h3>{props.cardsParams.name}</h3>
                <p className={"Card__comments"}>{props.cardsParams.comments}</p>
                <ul>
                    {props.cardsParams.variations[infoToShow].map(el => <li>{el}</li>)}
                </ul>
                <p className={"Card__ps"}>{props.cardsParams.ps1}</p>
                <p className={"Card__ps"}>{props.cardsParams.ps2}</p>
            </div>
            <button className={"Card__button"} onClick={()=>{props.modal(true)}}>Заказать аренду</button>
        </div>
    );
}