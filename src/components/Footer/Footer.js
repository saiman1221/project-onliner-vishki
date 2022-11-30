import React from "react";
import s from './Footer.module.css'

export const Footer = () => {
    return(
        <div className={s.footer}>
            <div className={s.footer_content + ' container'}>
                <div className={s.left}>
                    <h2>Контакты</h2>
                    <ul>
                        <li>
                            <div className={s.list_item}>
                                <h4>Телефон:</h4><a href={'tel: +375 33 916 16 19'} className={s.text}>+375 33 916 16 19</a>
                            </div>
                            <span>Предварительно ОБЯЗАТЕЛЬНО звонить!</span>
                        </li>
                        <li>
                            <div className={s.list_item}>
                                <h4>Адрес:</h4><p>д. Лесковка, улица Центральная, 6а (только яндекс навигатор, другие навигаторы не показывают этот адрес)</p>
                            </div>
                        </li>
                        <li>
                            <div className={s.list_item}><h4>E-mail:</h4><a href='' className={s.text}>gradovichnicolay@gmail.com</a></div>
                        </li>
                    </ul>
                </div>
                <div className={s.middle}>
                    <a href="">Стоимость</a>
                    <a href="">Комплектация</a>
                    <a href="">Инструкция по сборке</a>
                    <a href="">Вопросы</a>
                    <a href="">Контакты</a>
                </div>
                <div className={s.right}>
                    <button>Заказать звонок</button>
                </div>
            </div>
            <h2 className={'container ' + s.bottom_footer}>ФИЗИЧЕСКИМ ЛИЦАМ И ОРГАНИЗАЦИЯМ, У КОГО ИМЕЕТСЯ ЗАДОЛЖЕННОСТЬ ПО ИСПОЛНИТЕЛЬНЫМ ДОКУМЕНТАМ, ОБОРУДОВАНИЕ В АРЕНДУ НЕ ПРЕДОСТАВЛЯЕМ.</h2>
        </div>
    )
}