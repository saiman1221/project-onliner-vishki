import React from "react";
import './Manual.css';

import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img5 from './images/img5.png';

export function Manual(props) {
    return (
        <div className={'Manual container'}>
            <h2>{props.content.title}</h2>
            <div className={'cards'}>
                {props.content.text.map((el, id) => (
                    <div className={'card'}>
                        <p className={'number'}><p className={'number back'}>0{id + 1}</p>0{id + 1}</p>
                        <div className={'text'}>
                            {el.text}
                            {/*<img src={el.imgUrl} alt="Фото"/>*/}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}