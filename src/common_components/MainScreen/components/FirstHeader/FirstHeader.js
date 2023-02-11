import React, { useState } from "react";
import {NavLink} from "react-router-dom";

import './FirstHeader.css';

import logo from './images/logo.svg';

export function FirstHeader() {
    const [sticky, setSticky] = useState(false);

    window.addEventListener('scroll', ()=>{
        let headerHeight = getComputedStyle(document.getElementById('first_header')).height;
        if(window.visualViewport.pageTop - 100 > headerHeight.substring(0, headerHeight.length - 2)){
            setSticky(true);
        } else if(window.visualViewport.pageTop === 0) setSticky(false);
    });

    return (
        <header className={sticky ? "First_header fixed" : "First_header"} id='first_header'>
            <div className='container'>
                <div className={"display"}>
                    <NavLink to={'/'}><img src={logo} alt="Логотип"/></NavLink>
                    <a href="src/components/FirstScreen/components/FirstHeader/FirstHeader#prices" className={'links'}>Стоимость</a>
                    <a href="src/components/FirstScreen/components/FirstHeader/FirstHeader#product_info">Комплектация</a>
                    <a href="src/components/FirstScreen/components/FirstHeader/FirstHeader#manual">Инструкция по сборке</a>
                    <a href="src/components/FirstScreen/components/FirstHeader/FirstHeader#questions">Вопросы</a>
                    <a href="src/components/FirstScreen/components/FirstHeader/FirstHeader#footer">Контакты</a>
                </div>
            </div>
        </header>
    );
}