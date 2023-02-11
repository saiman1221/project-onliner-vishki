import React from "react";
import './LinksBar.css';

import towerImg from './images/tower_image.png';
import stairsImg from './images/stairs_image.png';
import scaffoldImg from './images/scaffold_image.png';
import {NavLink} from "react-router-dom";

export const LinksBar = () => (
    <div className={'Links_bar'}>
        <div className={'content container'}>
            <div className={'item'}>
                <h3>Аренда вышки туры</h3>
                <img src={towerImg} alt=""/>
                <div className={'link'}>
                    <NavLink to="/towers" onClick={()=>{window.scrollTo(0,0)}}>Подробнее</NavLink>
                </div>
            </div>
            <div className={'item'}>
                <h3>Аренда лестниц</h3>
                <img src={stairsImg} alt=""/>
                <div className={'link'}>
                    <NavLink to="/stairs" onClick={()=>{window.scrollTo(0,0)}}>Подробнее</NavLink>
                </div>
            </div>
            <div className={'item'}>
                <h3>Аренда помостов</h3>
                <img src={scaffoldImg} alt=""/>
                <div className={'link'}>
                    <NavLink to="/scaffolds" onClick={()=>{window.scrollTo(0,0)}}>Подробнее</NavLink>
                </div>
            </div>
        </div>
    </div>
)