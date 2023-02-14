import React from "react";
import './LinksBar.css';

import towerImg from './images/tower_image.png';
import stairsImg from './images/stairs_image.png';
import scaffoldImg from './images/scaffold_image.png';

import {NavLink} from "react-router-dom";

export const LinksBar = (props) => {
    const imgObj = {
        'towers':towerImg,
        'scaffoldings':towerImg,
        'stairs':stairsImg,
        'scaffolds':scaffoldImg,
    }

    return(
    <div className={'Links_bar'}>
        <div className={'content container'}>
            {props.content.links.map(el => (
                <div className={'item'}>
                    <h3>{el.linkText}</h3>
                    <img src={imgObj[el.img]} alt="Фото"/>
                    <div className={'link'}>
                        <NavLink to={el.link} onClick={()=>{window.scrollTo(0,0)}}>Подробнее</NavLink>
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}