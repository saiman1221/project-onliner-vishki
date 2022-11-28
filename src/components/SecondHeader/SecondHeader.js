import React from "react";
import s from './SecondHeader.module.css';

// import phone from './images/phone.svg';
// import mail from './images/mail.svg';
// import time from './images/time.svg';


export function SecondHeader() {
    return (
        <header className={s.header}>
            <div className={s.display}>
                <a href="#">+375 (33) 916 16 19</a>
                <a href="#">gradovichnicolay@gmail.com</a>
                <a href="#">9:00 - 20:00</a>
            </div>
        </header>
    );
}