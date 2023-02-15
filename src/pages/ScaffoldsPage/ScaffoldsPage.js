import React, {useState} from "react"

import {FirstScreen} from "../../common_components/MainScreen/FirstScreen";
import {Form} from "../../common_components/Form/Form";
import {Footer} from "../../common_components/Footer/Footer";
import {YandexMaps} from "../../common_components/YandexMaps/YandexMaps";
import {Manual} from "../../common_components/Manual/Manual";
import {Modal} from "../../common_components/Modal/Modal";
import {AboutProduct} from "./AboutProduct/AboutProduct";


export function ScaffoldsPage(props){
    const [modalActive, setModalActive] = useState(false);

    return (
        <div className="ScaffoldsPage">
            <FirstScreen page={'scaffolds'} modal={setModalActive} content={props.pageContent.first_screen}/>
            <AboutProduct/>
            <Form/>
            <Manual content={props.pageContent.manual}/>
            <Footer/>
            <YandexMaps/>
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    );
}


