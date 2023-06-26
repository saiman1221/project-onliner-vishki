import React, {useState, useEffect} from "react";
import './StairsPage.css'

import {FirstScreen} from "../../common_components/MainScreen/FirstScreen";
import {Products} from "./components/Products/Products";
import {Parameters} from "./components/Parameters/Parameters";
import {Modal} from "../../common_components/Modal/Modal";

import img1 from'./images/img1.png';
import img2 from'./images/img2.png';
import img3 from'./images/img3.png';
import {Form} from "../../common_components/Form/Form";
import {Footer} from "../../common_components/Footer/Footer";
import {YandexMaps} from "../../common_components/YandexMaps/YandexMaps";
import {Questions} from "../TowersPage/components/Questions/Questions";
import {LinksBar} from "../../common_components/LinksBar/LinksBar";

export function StairsPage(props) {
    const [modalActive, setModalActive] = useState(false);
    const images = [img1, img2, img3]
    const anchor = {
        paddingTop: '100px',
        marginTop: '-100px'
    }

    useEffect(() => {
        document.getElementById('title').innerText = 'Аренда лестниц и стремянок в Минске от 3 руб/сутки.';
    })

    return (
        <div className="StairsPage">
            <FirstScreen content={props.pageContent.first_screen} modal={setModalActive}/>
            {/*Якорь*/}
            <div id={'stairs_prices'} style={anchor}/>
            <div className={'container'}>
                <div className={'Products'}>
                    {props.pageContent.products.map(el => <Products content={el} setModalActive={setModalActive}/>)}
                </div>
                <p className={'Products_price_condition'}>* Минимальная сумма для заключения договора - 20 рублей.</p>
            </div>
            <div className={'products_parameters'}>
                {props.pageContent.stairs_data.map((el, index) => <div className={'products_parameters_item'}><div id={'stairs_product_' + (index + 1)} style={anchor}/><Parameters content={el} photo={images[index]}/></div>)}
            </div>
            <Form/>
            <LinksBar content={props.pageContent.first_screen}/>
            <Questions content={props.pageContent.questions}/>
            {/*Якорь*/}
            <div id={'stairs_contacts'} style={anchor}/>
            <Footer address={'д. Лесковка, Центральная ул., 2Б'} modal={setModalActive} content={props.pageContent.footer}/>
            <YandexMaps address={props.pageContent.mapData}/>
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    );
}


