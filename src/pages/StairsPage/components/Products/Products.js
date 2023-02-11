import React from "react";

import './Products.css';

import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';

export const Products = () => {
    return(
        <div className="Products container">
            <a href='#' className="item">
                <h2>Стремянка алюминиевая</h2>
                <img src={img1} alt=""/>
                <div className={'button'}><div/><div/></div>
            </a>
            <a href='#' className="item">
                <h2>Лестница алюминиевая <br/>3-х секционная</h2>
                <img src={img2} alt=""/>
                <div className={'button'}><div/><div/></div>
            </a>
            <a href='#' className="item">
                <h2>лестница шарнирная <br/>4-х секционная</h2>
                <img src={img3} alt=""/>
                <div className={'button'}><div/><div/></div>
            </a>
        </div>
    )
}