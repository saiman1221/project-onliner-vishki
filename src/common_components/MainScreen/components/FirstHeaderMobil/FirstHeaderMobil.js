import React, { useState } from "react";
import './FirstHeaderMobil.css';
import logo from './images/logo.svg';
import {MobilMenu} from "./MobilMenu/MobilMenu";

export function FirstHeaderMobil() {
    const [burgerMenu, setBurgerMenu] = useState(false);
    const [sticky, setSticky] = useState(false);

    window.addEventListener('scroll', handleScroll);

    function handleScroll(){
        let headerHeight = getComputedStyle(document.getElementById('first_header_mobil')).height;
        if(window.visualViewport.pageTop - 100 > headerHeight.substring(0, headerHeight.length - 2)){
            setSticky(true);
        } else if(window.visualViewport.pageTop < 15) setSticky(false);
    }

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