import React from "react";

import './FirstScreen.css';

import {FirstHeader} from "./components/FirstHeader/FirstHeader";
import {SecondHeader} from "./components/SecondHeader/SecondHeader";
import {FirstHeaderMobil} from "./components/FirstHeaderMobil/FirstHeaderMobil";
import {Links} from "./components/Links/Links";

export function FirstScreen(props) {
    return (
        <div className={`First_screen ${props.content.className}`}>
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
                <Links content={props.content}/>
            </div>
        </div>
    );
}