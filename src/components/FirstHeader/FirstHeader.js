import React, { useState } from "react";
import './FirstHeader.css';
import logo from './images/logo.svg';

export function FirstHeader() {
    const [sticky, setSticky] = useState(false);

    window.addEventListener('scroll', handleScroll);

    function handleScroll(){
        let headerHeight = getComputedStyle(document.getElementById('first_header')).height;
        if(window.visualViewport.pageTop - 100 > headerHeight.substring(0, headerHeight.length - 2)){
            setSticky(true);
        } else if(window.visualViewport.pageTop < 15) setSticky(false);
    }

    return (
        <header className={sticky ? "FirstHeader__header FirstHeader__header_fixed" : "FirstHeader__header"} id='first_header'>
            <div className='container'>
                <div className={"FirstHeader__display"}>
                    <img src={logo} alt="Логотип"/>
                    <a href="#prices">Стоимость</a>
                    <a href="#product_info">Комплектация</a>
                    <a href="#manual">Инструкция по сборке</a>
                    <a href="#questions">Вопросы</a>
                    <a href="#footer">Контакты</a>
                </div>
            </div>
        </header>
    );
}