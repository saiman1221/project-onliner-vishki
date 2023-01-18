import React, {useState, useRef} from "react";
import emailjs from "@emailjs/browser";

import './Feedback.css';

export function Feedback() {
    const form = useRef();
    const [buttonActive, setButtonActive] = useState(false);

    const [userName, setUserName] = useState('');
    const [userPhone, setUserPhone] = useState('');

    const handleInputName = (inputValue) => {
        let name = inputValue.replace(/[^a-zA-Zа-яА-Я\s]+$/g, '');
        setUserName(name);
    }

    const handleInputPhone = (inputValue) => {
        let phone;
        if (inputValue.length === 17) {
            phone = inputValue;
        } else if (inputValue.length > userPhone.length) {
            let newNumber = inputValue[inputValue.length - 1].replace(/\D+$/g, '');
            phone = userPhone + newNumber;
            if (phone.length === 8) {
                phone = phone.substring(0, 7) + ' ' + phone[7];
            }
            if (phone.length === 12) {
                phone = phone.substring(0, 11) + ' ' + phone[11];
            }
            if (phone.length === 15) {
                phone = phone.substring(0, 14) + ' ' + phone[14];
            }
        } else {
            phone = inputValue;
        }
        if (inputValue.length === 1 && inputValue.length > userPhone.length) {
            phone = '+375 ' + inputValue.replace(/\D+$/g, '');
        }
        setUserPhone(phone);
    }

    const sendEmail = (e) => {
        e.preventDefault();
        setButtonActive(true);
        setTimeout(() => {
            if (userName && userPhone.length === 17) {
                // emailjs.sendForm('service_3h9i74t', 'template_2raobfu', form.current, 'iRtzOZ-9E05qG4kZV')
                //     .then((result) => {
                //         alert('Заказ оформлен успешно...')
                //         console.log(result.text);
                //     }, (error) => {
                //         alert('К сожалению, возникли неполадки...')
                //         console.log(error.text);
                //     });
                alert('Ok')
            }
            else {
                alert('Номер телефона введен неправильно или не полностью...')
            }
            setButtonActive(false)
        }, 400);
    };

    return (
        <div className={"Feedback__feedback"}>
            <h3>Остались вопросы?</h3>
            <p>Оставьте заявку, мы перезвоним и с удовольствием ответим на все интересующие вопросы.</p>
            <form ref={form} onSubmit={sendEmail} className={"Feedback__form"}>
                <input type="text" placeholder={'Ваше имя'} name="user_name" value={userName} onChange={(e) => {
                    handleInputName(e.currentTarget.value)
                }} className={'input'}/>
                <input type="tel" placeholder={'Ваш номер телефона'} name="user_phone" value={userPhone}
                       onFocus={() => {
                           if (userPhone.length < 5) setUserPhone('+375 ')
                       }} onChange={(e) => {
                    handleInputPhone(e.currentTarget.value)
                }} className={'input'} maxLength={17}/>
                <button type={'submit'} className={buttonActive ? 'button active' : 'button'}>Заказать звонок</button>
            </form>
            <hr/>
            <p className={"Feedback__text_phone"}>Или позвоните нам прямо сейчас</p>
            <a href="tel:+375339161619" className={"Feedback__phone"}>+375 (33) 916 16 19</a>
        </div>
    );
}