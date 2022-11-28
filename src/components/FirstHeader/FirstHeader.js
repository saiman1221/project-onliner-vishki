import React from "react";
import s from './FirstHeader.module.css';

import logo from './images/logo.svg';

export function FirstHeader() {
    return (
        <header className={s.header}>
            <div className='container'>
                <div className={s.display}>
                    <img src={logo} alt="Логотип"/>
                    <a href="#">Стоимость</a>
                    <a href="#">Комплектация</a>
                    <a href="#">Инструкция по сборке</a>
                    <a href="#">Вопросы</a>
                    <a href="#">Контакты</a>
                </div>
            </div>
        </header>
    );
}