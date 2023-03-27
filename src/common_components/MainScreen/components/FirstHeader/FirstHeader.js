import React, {useEffect} from "react";
import './FirstHeader.css';
import logo from './images/logoMin.svg';
import {NavLink} from "react-router-dom";

export const FirstHeader = (props) => {
    let header = React.createRef();
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (document.documentElement.scrollTop < 40) {
                if(document.documentElement.scrollTop > 5){
                    header.current.classList.add('fixed');
                }
                else{
                    header.current.classList.remove('fixed');
                }
                header.current.style.height = `${90 - document.documentElement.scrollTop}px`;
            }
            else{
                header.current.classList.add('fixed');
                header.current.style.height = '50px';
            }
        })
    })

    return (
        <header className="First_header" ref={header}>
            <div className='display container'>
                <NavLink to={'/'} className={'logo'} onClick={()=>{window.scrollTo(0,0)}}>
                    <img src={logo} alt="Логотип"/>
                    <p>ArendaTur</p>
                </NavLink>
                <div className={'links'}>
                    {props.content.map(el => <a href={`#${el.linkURL}`}>{el.linkText}</a>)}
                </div>
            </div>
        </header>
    )
}