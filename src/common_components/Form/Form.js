import React from "react";
import './Form.css';

import img from './images/img.png'

export const Form = () => {
    return (
        <div className={'Form'}>
            <div className={'content container'}>
                <form action="">
                    <label>
                        <p>Ваше имя:</p>
                        <input type="text"/>
                    </label>
                    <label>
                        <p>Ваш телефон:</p>
                        <input type="tel"/>
                    </label>
                    <label>
                        <p>Опишите ваш заказ:</p>
                        <input type="text"/>
                    </label>
                    <button type='submit'>Отправить заявку</button>
                </form>
                <img src={img} alt="Фото"/>
            </div>
        </div>
    )
}