import React from "react";
import './AboutProduct.css';
import scaffoldingsImage from './images/scaffoldings.png';
import scaffoldsImage from './images/scaffolds.png';

export const AboutProduct = (props) => {
    const images = {
        'scaffoldingsImage' : scaffoldingsImage,
        'scaffoldsImage' : scaffoldsImage
    }

    return (
        <div className={'About_product container'}>
            <div className={'content'}>
                <div className="part mobil_title">
                    <h2>{props.content.title}</h2>
                </div>
                <div className="part">
                    <img src={images[props.content.img]} alt="Изображение"/>
                </div>
                <div className={'part'}>
                    <h2 className={'desktop_title'}>{props.content.title}</h2>
                    <ul>{props.content.list.map(el => <li>{el}</li>)}</ul>
                </div>
            </div>
        </div>
    )
}