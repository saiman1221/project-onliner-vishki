import React from "react";
import './Prices.css'

export const Prices = () => (
    <div className={'Prices container'}>
        <div>
            <h2>Стоимость по секциям:</h2>
            <div className={'cards'}>
                <div className="card">
                    <p>1 секция</p>
                    <ul>
                        <li>1 сутки – 10 руб</li>
                        <li>7 суток – 35 руб</li>
                        <li>30 суток – 50 руб</li>
                    </ul>
                </div>
                <div className="card">
                    <p>2 секция</p>
                    <ul>
                        <li>1 сутки – 10 руб</li>
                        <li>7 суток – 40 руб</li>
                        <li>30 суток – 60 руб</li>
                    </ul>
                </div>
                <div className="card">
                    <p>3 секция</p>
                    <ul>
                        <li>1 сутки – 12 руб</li>
                        <li>7 суток – 45 руб</li>
                        <li>30 суток – 70 руб</li>
                    </ul>
                </div>
            </div>
        </div>
        <div>
            <h2>Стоимость по кв.метрам:</h2>
            <div className={'cards'}>
                <div className="card">
                    <p>до 30 кв.м.</p>
                    <ul>
                        <li>1 сутки – 15 руб</li>
                        <li>7 суток – 75 руб</li>
                        <li>30 суток – 150 руб</li>
                    </ul>
                </div>
                <div className="card">
                    <p>до 50 кв.м.</p>
                    <ul>
                        <li>1 сутки – 20 руб</li>
                        <li>7 суток – 110 руб</li>
                        <li>30 суток – 220 руб</li>
                    </ul>
                </div>
                <div className="card">
                    <p>до 100 кв.м.</p>
                    <ul>
                        <li>1 сутки – 30 руб</li>
                        <li>7 суток – 175 руб</li>
                        <li>30 суток – 350 руб</li>
                    </ul>
                </div>
            </div>
            <p className={'ps'}>* Минимальный срок аренды - 3 дня</p>
        </div>
    </div>
)