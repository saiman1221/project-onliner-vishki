import React, {useRef, useState} from "react";
import './Form.css';

import img from './images/img.png'
import emailjs from "@emailjs/browser";


export const Form = () => {
    const form = useRef();

    const [userName, setUserName] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userComm, setUserComm] = useState('');

    const handleInputName = (inputValue) => {
        let name = inputValue.replace(/[^a-zA-Zа-яА-Я\s]+$/g, '');
        setUserName(name);
    }

    const handleInputPhone = (inputValue) => {
        let phone;
        if (inputValue.length === 17 || inputValue.length === 13) {
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
        setTimeout(() => {
            if (userName && (userPhone.length === 17 || userPhone.length === 13)) {
                emailjs.sendForm('service_3h9i74t', 'template_2raobfu', form.current, 'iRtzOZ-9E05qG4kZV')
                    .then((result) => {
                        alert('Заказ оформлен успешно...')
                        console.log(result.text);
                    }, (error) => {
                        alert('К сожалению, возникли неполадки...')
                        console.log(error.text);
                    });
            } else {
                alert('Проверьте правильность введенных данных...')
            }
        }, 400);
    };

    return (
        <div className={'Form'}>
            <h2 className={'container'}>Оставьте заявку на расчет стоимости и сроков поставки:</h2>
            <div className={'wrapper'}>
                <div className={'content container'}>
                    <form onSubmit={sendEmail} ref={form}>
                        <label>
                            <p>Ваше имя:</p>
                            <input type="text" onChange={(e) => {
                                handleInputName(e.currentTarget.value)
                            }} value={userName} name="user_name"/>
                        </label>
                        <label>
                            <p>Ваш телефон:</p>
                            <input type="tel" onChange={(e) => {
                                handleInputPhone(e.currentTarget.value)
                            }} value={userPhone} name="user_phone"/>
                        </label>
                        <label>
                            <p>Опишите ваш заказ:</p>
                            <input type="text" value={userComm} name="user_comm" onChange={(e) => {
                                setUserComm(e.currentTarget.value)
                            }}/>
                        </label>
                        <button type='submit'>Отправить заявку</button>
                    </form>
                    <img src={img} alt="Фото"/>
                </div>
            </div>
        </div>
    )
}