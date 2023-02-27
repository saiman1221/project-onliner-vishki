import React, { useState } from "react";
import './FirstHeaderMobil.css';
import logo from './images/logo.svg';
import {MobilMenu} from "./MobilMenu/MobilMenu";

export function FirstHeaderMobil() {
    const [burgerMenu, setBurgerMenu] = useState(false);
    const [sticky, setSticky] = useState(false);

    return (
        <header className={sticky ? "First_header__mobil fixed" : "First_header__mobil"} id='first_header_mobil'>
            <div className='container'>
                <div className={"display"}>
                    <img src={logo} alt="Логотип"/>
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