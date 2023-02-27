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

    return (
        <div className="StairsPage">
            <FirstScreen content={props.pageContent.first_screen} modal={setModalActive}/>
            <Products/>
            {props.pageContent.stairs_data.map((el, index) => <Parameters content={el} photo={images[index]}/>)}
            <Form/>
            <Footer address={'д. Лесковка, Центральная ул., 2Б'}/>
            <YandexMaps address={props.pageContent.mapData}/>
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    );
}


