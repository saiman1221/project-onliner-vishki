import React, { useState, useEffect } from "react";
import './FirstHeaderMobil.css';
import logo from './images/logoMin.svg';
import {MobilMenu} from "./MobilMenu/MobilMenu";

export function FirstHeaderMobil() {
    const [burgerMenu, setBurgerMenu] = useState(false);
    let header = React.createRef();
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (document.documentElement.scrollTop < 30) {
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
                header.current.style.height = '60px';
            }
        })
    })

    return (
        <header className="First_header__mobil" ref={header}>
            <div className='container'>
                <div className={"display"}>
                    <div className={'logo'} onClick={()=>{window.scrollTo(0,0)}}>
                        <img src={logo} alt="Логотип"/>
                    </div>
                    <div onClick={()=>{setBurgerMenu(true)}} className={'burger_button'}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <MobilMenu menuShow={burgerMenu} setMenuShow={setBurgerMenu}/>
        </header>
    );
}