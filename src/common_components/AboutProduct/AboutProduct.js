import React from "react";

import scaffoldingsImage from './images/scaffoldings.png';
import scaffoldsImage from './images/scaffolds.png';

import './AboutProduct.scss';

export const AboutProduct = (props) => {
    const images = {
        scaffoldingsImage,
        scaffoldsImage
    }

    return (
        <div className={'about_product container'}>
            <div className={'content'}>
                <div className={"part title_mobile"}>
                    <h2 className={'title'}>{props.content.title}</h2>
                </div>
                <div className={"part"}>
                    <img src={images[props.content.img]} alt="Изображение"/>
                </div>
                <div className={'part'}>
                    <h2 className={'title title_desktop'}>{props.content.title}</h2>
                    <ul className={'list'}>{props.content.list.map(el => <li className={'list_item'}>{el}</li>)}</ul>
                </div>
            </div>
        </div>
    )
}