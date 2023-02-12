import React from "react";
import './Links.css'
import {NavLink} from "react-router-dom";

export function Links(props) {
    return (
        <div className={'Links'}>
            <div className={'display container'}>
                {props.content.links.map(el => (
                    <div className={'item'}>
                        <p>{el.linkText}</p>
                        <div><NavLink to={el.link} className={'link'}>Подробнее</NavLink></div>
                    </div>
                ))}
            </div>
        </div>
    );
}