import React, {useState} from "react";
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

export function StairsPage(props) {
    const [modalActive, setModalActive] = useState(false);
    const images = [img1, img2, img3]
    const anchor = {
        paddingTop: '100px',
        marginTop: '-100px'
    }

    return (
        <div className="StairsPage">
            <FirstScreen content={props.pageContent.first_screen} modal={setModalActive}/>
            <div className={'Products container'}>
                {props.pageContent.products.map(el => <Products content={el}/>)}
            </div>
            {props.pageContent.stairs_data.map((el, index) => <><div id={'stairs_product_' + (index + 1)} style={anchor}/><Parameters content={el} photo={images[index]}/></>)}
            <Form/>
            {/*Якорь*/}
            <div id={'stairs_contacts'} style={anchor}/>
            <Footer address={'д. Лесковка, Центральная ул., 2Б'} modal={setModalActive} content={props.pageContent.footer}/>
            <YandexMaps address={props.pageContent.mapData}/>
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    );
}


