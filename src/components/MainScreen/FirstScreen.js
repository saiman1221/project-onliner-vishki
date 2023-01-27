import React from "react";
import {NavLink} from "react-router-dom";
import './FirstScreen.css';

import {FirstHeader} from "./components/FirstHeader/FirstHeader";
import {SecondHeader} from "./components/SecondHeader/SecondHeader";
import {FirstHeaderMobil} from "./components/FirstHeaderMobil/FirstHeaderMobil";

export function FirstScreen(props) {
    return (
        <div className={'First_screen'}>
            <div className="layout">
                <div className={'header'}>
                    <FirstHeader/>
                    <FirstHeaderMobil/>
                    <SecondHeader/>
                </div>
                <div className={'content container'}>
                    <h1>{props.content.title}</h1>
                    <p>Качественное оборудование и приятные цены!</p>
                    <button className={'button'} id={'prices'} onClick={()=>{props.modal(true)}}>Заказать звонок</button>
                </div>
                <div className={'links'}>
                    <div className={'display container'}>
                        {props.content.links.map(el => (
                            <div className={'item'}>
                                <p>{el.linkText}</p>
                                <div><NavLink to={el.link} className={'link'}>Подробнее</NavLink></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}