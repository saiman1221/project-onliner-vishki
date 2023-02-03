import React from "react";
import './SecondHeader.css';

export function SecondHeader() {
    return (
        <header className={'Second_header'}>
            <div className={'display'}>
                <a href="tel:+3753391619" className={'link'}>+375 (33) 916 16 19</a>
                <a href="mailto:gradovichnicolay@gmail.com" className={'link'}>gradovichnicolay@gmail.com</a>
                <p className={'link'}>Пн - Пт: 8:00 - 17:00</p>
            </div>
        </header>
    );
}