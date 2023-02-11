import React, {useState} from "react";
import './Card.css';

export function Card(props) {
    const [infoToShow, setInfoToShow] = useState(0);

    return (
        <div className={"Card"}>
            <div className={"info"}>
                <div className={"img"}>
                    <img src={props.cardsParams.img} alt="Фото вышки"/>
                </div>
                <div className={"size_buttons"}>
                    {props.cardsParams.sizes.map((item, id) => <button
                        className={infoToShow !== id ? 'size_button' : "size_button active"}
                        onClick={() => setInfoToShow(id)}>{item}</button>)}
                </div>
                <h3>{props.cardsParams.name}</h3>
                <p className={"comments"}>{props.cardsParams.comments}</p>
                <ul>
                    {props.cardsParams.variations[infoToShow].map(el => <li>{el}</li>)}
                </ul>
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