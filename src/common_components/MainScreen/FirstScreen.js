import React from "react";
import {Links} from "./components/Links/Links";
import {NavLink} from "react-router-dom";

import {FirstHeader} from "./components/FirstHeader/FirstHeader";
import {FirstHeaderMobil} from "./components/FirstHeaderMobil/FirstHeaderMobil";
import {SecondHeader} from "./components/SecondHeader/SecondHeader";

import './FirstScreen.scss';

export const FirstScreen = (props) => (
    <div className={`first_screen ${props.content.className}`}>
        <div className="layout">
            <div className={'header'}>
                <FirstHeader content={props.content.header} page={props.content.className}/>
                <FirstHeaderMobil content={props.content.header} page={props.content.className}/>
                <SecondHeader page={props.content.className}/>
            </div>
            <div className={'content container'}>
                <h1 className={'title'}>{props.content.title}</h1>
                <p className={'text'}>Качественное оборудование и приятные цены!</p>
                <button className={'button modal_button'} onClick={() => {
                    props.modal(true)
                }}>Заказать звонок
                </button>
                <NavLink className={'button nomatch_button'} to={'/'}>На главную</NavLink>
            </div>
            <Links content={props.content}/>
        </div>
    </div>
)