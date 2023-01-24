import React, {useEffect} from "react";
import './MobilMenu.css'

export function MobilMenu(props) {
    const body = document.getElementById('body');

    useEffect(()=>{
        props.menuShow ? body.classList.add('no_scroll') : body.classList.remove('no_scroll');
    },  [props.menuShow])

    return (
        <div className={props.menuShow ? 'Mobil_menu' : 'Mobil_menu close'}>
            <button className={'close_button'} onClick={() => {
                props.setMenuShow(false)
            }}></button>
            <div className={'links'}>
                <a href="src/components/FirstScreen/components/FirstHeaderMobil/MobilMenu/MobilMenu#prices" onClick={()=>{props.setMenuShow(false)}}>Стоимость</a>
                <a href="src/components/FirstScreen/components/FirstHeaderMobil/MobilMenu/MobilMenu#product_info" onClick={()=>{props.setMenuShow(false)}}>Комплектация</a>
                <a href="src/components/FirstScreen/components/FirstHeaderMobil/MobilMenu/MobilMenu#manual" onClick={()=>{props.setMenuShow(false)}}>Инструкция по сборке</a>
                <a href="src/components/FirstScreen/components/FirstHeaderMobil/MobilMenu/MobilMenu#questions" onClick={()=>{props.setMenuShow(false)}}>Вопросы</a>
                <a href="src/components/FirstScreen/components/FirstHeaderMobil/MobilMenu/MobilMenu#footer" onClick={()=>{props.setMenuShow(false)}}>Контакты</a>
            </div>
            <div className={'second_header'}>
                <div className={'list_item'}>
                    <h4>Время работы:</h4><p>Пн - Пт: 8:00 - 17:00</p>
                </div>
                <div className={'list_item'}>
                    <h4>Телефон:</h4><a href={'tel: +375 33 916 16 19'}>+375 33 916 16 19</a>
                </div>
                <div className={'list_item'}>
                    <h4>Адрес:</h4><p>д.Лесковка, улица Центральная, 6а</p>
                </div>
                <div className={'list_item'}>
                    <h4>E-mail:</h4><a href='mailto:gradovichnicolay@gmail.com'>gradovichnicolay@gmail.com</a>
                </div>
            </div>
        </div>
    );
}