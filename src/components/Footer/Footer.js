import React from "react";
import './Footer.css'

export const Footer = (props) => {
    return (
        <div className={'Footer'} id={'footer'}>
            <div className={'content container'}>
                <div className={'info'}>
                    <h2>Контакты</h2>
                    <span>Предварительно ОБЯЗАТЕЛЬНО звонить!</span>
                    <div className={'list'}>
                        <div className={'item'}>
                            <h4>Телефон:</h4><a href={'tel: +375 33 916 16 19'}>+375 33 916 16 19</a>
                        </div>
                        <div className={'item'}>
                            <h4>E-mail:</h4><a href='mailto:gradovichnicolay@gmail.com'>gradovichnicolay@gmail.com</a>
                        </div>
                        <div className={'item'}>
                            <h4>Адрес:</h4><p>д.Лесковка, улица Центральная, 6а (только яндекс навигатор, другие
                            навигаторы не показывают этот адрес)</p>
                        </div>
                    </div>
                    <div className={'button mobil'}>
                        <button onClick={() => {
                            props.modal(true)
                        }}>Заказать звонок
                        </button>
                    </div>
                </div>
                <div className={'links'}>
                    <a href="#prices">Стоимость</a>
                    <a href="#product_info">Комплектация</a>
                    <a href="#manual">Инструкция по сборке</a>
                    <a href="#questions">Вопросы</a>
                    <a href="#footer">Контакты</a>
                </div>
                <div className={'button'}>
                    <button onClick={() => {
                        props.modal(true)
                    }}>Заказать звонок</button>
                </div>
            </div>
            <h2 className={'bottom container'}>ФИЗИЧЕСКИМ ЛИЦАМ И ОРГАНИЗАЦИЯМ, У КОГО ИМЕЕТСЯ
                ЗАДОЛЖЕННОСТЬ ПО ИСПОЛНИТЕЛЬНЫМ ДОКУМЕНТАМ, ОБОРУДОВАНИЕ В АРЕНДУ НЕ ПРЕДОСТАВЛЯЕМ.</h2>
        </div>
    )
}