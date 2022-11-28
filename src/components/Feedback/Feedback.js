import React from "react";
import s from './Feedback.module.css';

export function Feedback() {
    return (
        <div className={s.feedback}>
            <h3>Остались вопросы?</h3>
            <p>Оставьте заявку, мы перезвоним и с удовольствием ответим на все интересующие вопросы.</p>
            <form className={s.form}>
                <input type="tel" placeholder={'+375 (_ _) _ _ _- _ _- _ _'}/>
                <button type={'submit'}>Заказать звонок</button>
            </form>
            <hr/>
            <p className={s.text_phone}>Или позвоните нам прямо сейчас</p>
            <a href="tel:+375336361227" className={s.phone}>+375 (33) 916 16 19</a>
        </div>
    );
}