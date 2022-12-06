import React from "react";
import './MainScreen.css';

import {FirstHeader} from "../FirstHeader/FirstHeader";
import {SecondHeader} from "../SecondHeader/SecondHeader";
import {FirstHeaderMobil} from "../FirstHeaderMobil/FirstHeaderMobil";

export function MainScreen(props) {


    return (
        <div className={'MainScreen__main_screen'}>
            <div className={'MainScreen__header'}>
                <FirstHeader/>
                <FirstHeaderMobil/>
                <SecondHeader/>
            </div>
            <div className={'MainScreen__main_screen__content container'}>
                <h1>Аренда вышки туры в Минске</h1>
                <button className={'MainScreen__button'} id={'prices'} onClick={()=>{props.modal(true)}}>Заказать звонок</button>
            </div>
        </div>
    );
}