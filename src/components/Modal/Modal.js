import React, {useRef, useState} from "react";
import emailjs from '@emailjs/browser';

import './Modal.css';

const Modal = (props) => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_uqbbxzs', 'template_i683h0n', form.current, '2MO8k-LlB9WezUuHW')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className={props.active ? 'Modal__modal Modal__active' : 'Modal__modal'} onClick={() => props.setActive(false)}>
            <div className={props.active ? 'Modal__content Modal__active' : 'Modal__content'} onClick={(e) => e.stopPropagation()}>
                <button className={'Modal__close'} onClick={() => props.setActive(false)}></button>
                <h3>Обратный звонок</h3>
                <p>Оставьте заявку, мы перезвоним и с удовольствием ответим на все интересующие вопросы.</p>
                <form ref={form} onSubmit={sendEmail} className={'Modal__form'}>
                    <input type="tel" placeholder={'+375 (_ _) _ _ _- _ _- _ _'} name="user_phone"/>
                    <button type="submit" value="Send">Заказать звонок</button>
                </form>
                <hr/>
                <p className={'Modal__text_phone'}>Или позвоните нам прямо сейчас</p>
                <a href="tel:+375336361227" className={'Modal__phone'}>+375 (33) 916 16 19</a>
            </div>
        </div>
    )
}

export default Modal;