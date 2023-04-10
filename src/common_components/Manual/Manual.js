import React from "react";
import './Manual.css';

export function Manual(props) {
    const tryRequire = (path) => {
        try {
            return require(`${path}`);
        } catch (err) {
            return null;
        }
    };

    return (
        <div className={'Manual container'}>
            <h2>{props.content.title}</h2>
            <div className={'cards'}>
                {props.content.text.map((el, id) => (
                    <div className={'card'}>
                        <p className={'number'}><p className={'number back'}>0{id + 1}</p>0{id + 1}</p>
                        <div className={'text'}>
                            {el.text}
                            {tryRequire(`./images/${props.content.page_name}/img${id+1}.png`) ? <img src={tryRequire(`./images/${props.content.page_name}/img${id+1}.png`)} alt="Фото"/> : ''}
                            {tryRequire(`./images/${props.content.page_name}/img${id+1}.jpg`) ? <img style={{width: '100%'}} src={tryRequire(`./images/${props.content.page_name}/img${id+1}.jpg`)} alt="Фото"/> : ''}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

