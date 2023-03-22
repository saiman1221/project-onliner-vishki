import React from "react";
import './FirstScreen.css';

import {FirstHeader} from "./components/FirstHeader/FirstHeader";
import {FirstHeaderMobil} from "./components/FirstHeaderMobil/FirstHeaderMobil";
import {SecondHeader} from "./components/SecondHeader/SecondHeader";
import {Links} from "./components/Links/Links";
import {NavLink} from "react-router-dom";

export function FirstScreen(props) {
    return (
        <div className={`First_screen ${props.content.className}`}>
            <div className="layout">
                <div className={'header'}>
                    <FirstHeader content={props.content.header}/>
                    <FirstHeaderMobil content={props.content.header}/>
                    <SecondHeader/>
                </div>
                <div className={'content container'}>
                    <h1>{props.content.title}</h1>
                    <p>Качественное оборудование и приятные цены!</p>
                    <button className={'button modal_button'} onClick={() => {props.modal(true)}}>Заказать звонок</button>
                    <NavLink className={'button nomatch_button'} to={'/'}>На главную</NavLink>
                </div>
                <Links content={props.content}/>
            </div>
        </div>
    );
}