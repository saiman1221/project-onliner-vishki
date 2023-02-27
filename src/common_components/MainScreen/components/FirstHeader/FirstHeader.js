import React, {useState} from "react";
import './FirstHeader.css';
import logo from './images/logoMin.svg';

export const FirstHeader = () => {
    let header = React.createRef();
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop < 40) {
            if(document.documentElement.scrollTop > 5){
                header.current.classList.add('fixed');
            }
            else{
                header.current.classList.remove('fixed');
            }
            header.current.style.height = `${90 - document.documentElement.scrollTop}px`;
        }
        else{
            header.current.classList.add('fixed');
            header.current.style.height = '50px';
        }
    })

    return (
        <header className="First_header" ref={header}>
            <div className='display container'>
                <div className={'logo'} onClick={()=>{window.scrollTo(0,0)}}>
                    <img src={logo} alt="Логотип"/>
                    <p>ArendaTur</p>
                </div>
                <a href="#prices">Стоимость</a>
                <a href="#product_info">Комплектация</a>
                <a href="#manual">Инструкция по сборке</a>
                <a href="#questions">Вопросы</a>
                <a href="#footer">Контакты</a>
            </div>
        </header>
    )
}