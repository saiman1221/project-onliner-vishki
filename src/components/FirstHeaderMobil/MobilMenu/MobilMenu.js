import React from "react";
import './MobilMenu.css'

export function MobilMenu(props) {
    return (
        <div className={props.menuShow ? 'MobilMenu__content' : 'MobilMenu__content MobilMenu__content__close'}>
            <button className={'MobilMenu__close'} onClick={() => {
                props.setMenuShow(false)
            }}></button>
            <div className={'MobilMenu__links'}>
                <a href="#prices">Стоимость</a>
                <a href="#product_info">Комплектация</a>
                <a href="#manual">Инструкция по сборке</a>
                <a href="#questions">Вопросы</a>
                <a href="#footer">Контакты</a>
            </div>
            <div className={'MobilMenu__second_header'}>
                <div className={'MobilMenu____list_item'}>
                    <h4>Время работы:</h4><p className={'Footer__text'}>9:00 - 20:00</p>
                </div>
                <div className={'MobilMenu____list_item'}>
                    <h4>Телефон:</h4><a href={'tel: +375 33 916 16 19'} className={'Footer__text'}>+375 33 916 16 19</a>
                </div>
                <div className={'MobilMenu____list_item'}>
                    <h4>Адрес:</h4><p>д.Лесковка, улица Центральная, 6а</p>
                </div>
                <div className={'MobilMenu____list_item'}>
                    <h4>E-mail:</h4><a href='' className={'Footer__text'}>gradovichnicolay@gmail.com</a>
                </div>
            </div>
        </div>
    );
}