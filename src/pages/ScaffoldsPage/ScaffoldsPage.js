import React, {useState} from "react";
import './ScaffoldsPage.css';

import {FirstScreen} from "../../common_components/MainScreen/FirstScreen";
import {Form} from "../../common_components/Form/Form";
import {Footer} from "../../common_components/Footer/Footer";
import {YandexMaps} from "../../common_components/YandexMaps/YandexMaps";
import {Manual} from "../../common_components/Manual/Manual";
import {Modal} from "../../common_components/Modal/Modal";
import {AboutProduct} from "../../common_components/AboutProduct/AboutProduct";
import {ProductsInfo} from "./components/ProductsInfo/ProductsInfo";
import {Feedback} from "../../common_components/Feedback/Feedback";
import {Table} from "../../common_components/Table/Table";

export function ScaffoldsPage(props){
    const [modalActive, setModalActive] = useState(false);

    return (
        <div className="ScaffoldsPage">
            <FirstScreen content={props.pageContent.first_screen} modal={setModalActive}/>
            <AboutProduct content={props.pageContent.about_product}/>
            <ProductsInfo/>
            <div className={'price_table container'}>
                <Table content={props.pageContent.price}/>
            </div>
            <Form/>
            <Manual content={props.pageContent.manual}/>
            <Feedback/>
            <Footer address={'д.Лесковка, Центральная ул., 2Б'}/>
            <YandexMaps address={props.pageContent.mapData}/>
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    );
}


