import React, {useEffect} from "react";
import './MobilMenu.css'

export function MobilMenu(props) {
    const body = document.getElementById('body');

    useEffect(()=>{
        props.menuShow ? body.classList.add('no_scroll') : body.classList.remove('no_scroll');
    }, [props.menuShow])

    return (
        <div className={props.menuShow ? 'MobilMenu__content' : 'MobilMenu__content MobilMenu__content__close'}>
            <button className={'MobilMenu__close'} onClick={() => {
                props.setMenuShow(false)
            }}></button>
            <div className={'MobilMenu__links'}>
                <a href="#prices" onClick={()=>{props.setMenuShow(false)}}>Стоимость</a>
                <a href="#product_info" onClick={()=>{props.setMenuShow(false)}}>Комплектация</a>
                <a href="#manual" onClick={()=>{props.setMenuShow(false)}}>Инструкция по сборке</a>
                <a href="#questions" onClick={()=>{props.setMenuShow(false)}}>Вопросы</a>
                <a href="#footer" onClick={()=>{props.setMenuShow(false)}}>Контакты</a>
            </div>
            <div className={'MobilMenu__second_header'}>
                <div className={'MobilMenu____list_item'}>
                    <h4>Время работы:</h4><p className={'Footer__text'}>Пн - Пт: 8:00 - 17:00</p>
                </div>
                <div className={'MobilMenu____list_item'}>
                    <h4>Телефон:</h4><a href={'tel: +375 33 916 16 19'} className={'Footer__text'}>+375 33 916 16 19</a>
                </div>
                <div className={'MobilMenu____list_item'}>
                    <h4>Адрес:</h4><p>д.Лесковка, улица Центральная, 6а</p>
                </div>
                <div className={'MobilMenu____list_item'}>
                    <h4>E-mail:</h4><a href='mailto:gradovichnicolay@gmail.com' className={'Footer__text'}>gradovichnicolay@gmail.com</a>
                </div>
            </div>
        </div>
    );
}