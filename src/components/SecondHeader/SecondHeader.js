import React from "react";
import './SecondHeader.css';

export function SecondHeader() {
    return (
        <header className={'SecondHeader__header'}>
            <div className={'SecondHeader__display'}>
                <a href="#">+375 (33) 916 16 19</a>
                <a href="#">gradovichnicolay@gmail.com</a>
                <a href="#">9:00 - 20:00</a>
            </div>
        </header>
    );
}