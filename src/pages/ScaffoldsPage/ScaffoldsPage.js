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
    const anchor = {
        paddingTop: '100px',
        marginTop: '-100px'
    }

    return (
        <div className="ScaffoldsPage">
            <FirstScreen content={props.pageContent.first_screen} modal={setModalActive}/>
            <AboutProduct content={props.pageContent.about_product}/>
            {/*Якорь*/}
            <div id={'scaffolds_params'} style={anchor}/>
            <ProductsInfo/>
            {/*Якорь*/}
            <div id={'scaffolds_price'} style={anchor}/>
            <div className={'price_table container'}>
                <Table content={props.pageContent.price}/>
            </div>
            <Form/>
            {/*Якорь*/}
            <div id={'scaffolds_manual'} style={anchor}/>
            <Manual content={props.pageContent.manual}/>
            <Feedback/>
            {/*Якорь*/}
            <div id={'scaffolds_contacts'} style={anchor}/>
            <Footer address={'д.Лесковка, Центральная ул., 2Б'} modal={setModalActive} content={props.pageContent.footer}/>
            <YandexMaps address={props.pageContent.mapData}/>
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    );
}


