import React from "react";
import'./Feedback.css';
import {useRef} from "react";
import emailjs from "@emailjs/browser";

export function Feedback() {
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
        <div className={"Feedback__feedback"}>
            <h3>Остались вопросы?</h3>
            <p>Оставьте заявку, мы перезвоним и с удовольствием ответим на все интересующие вопросы.</p>
            <form ref={form} onSubmit={sendEmail} className={"Feedback__form"}>
                <input type="tel" placeholder={'+375 (_ _) _ _ _- _ _- _ _'} name="user_phone"/>
                <button type={'submit'}>Заказать звонок</button>
            </form>
            <hr/>
            <p className={"Feedback__text_phone"}>Или позвоните нам прямо сейчас</p>
            <a href="tel:+375336361227" className={"Feedback__phone"}>+375 (33) 916 16 19</a>
        </div>
    );
}