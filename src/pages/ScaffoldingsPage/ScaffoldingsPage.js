import React, {useState, useEffect} from "react";
import './ScaffoldingsPage.css';

import {Prices} from "./components/Prices/Prices";
import {FirstScreen} from "../../common_components/MainScreen/FirstScreen";
import {LinksBar} from "../../common_components/LinksBar/LinksBar";
import {Feedback} from "../../common_components/Feedback/Feedback";
import {Manual} from "../../common_components/Manual/Manual";
import {Footer} from "../../common_components/Footer/Footer";
import {Modal} from "../../common_components/Modal/Modal";
import {Table} from "../../common_components/Table/Table";
import {Docs} from "./components/Docs/Docs";
import {AboutProduct} from "../../common_components/AboutProduct/AboutProduct";
import {YandexMaps} from "../../common_components/YandexMaps/YandexMaps";
import {Form} from "../../common_components/Form/Form";
import {VideoManual} from "../../common_components/VideoManual/VideoManual";
import {Questions} from "../TowersPage/components/Questions/Questions";
import {Benefits} from "../TowersPage/components/Benefits/Benefits";

export function ScaffoldingsPage(props){
    const [modalActive, setModalActive] = useState(false);
    const anchor = {
        paddingTop: '100px',
        marginTop: '-100px'
    }

    useEffect(() => {
        document.getElementById('title').innerText = 'Аренда строительных лесов в Минске от 6 коп. за кв.м. с доставкой';
    })

    return (
        <div className="ScaffoldingsPage">
            <FirstScreen content={props.pageContent.first_screen} modal={setModalActive}/>
            <AboutProduct content={props.pageContent.about_product}/>
            {/*Якорь*/}
            <div id={'scaffoldings_docs'} style={anchor}/>
            <Docs/>
            {/*Якорь*/}
            <div id={'scaffoldings_params'} style={anchor}/>
            <div className={'container ScaffoldingsPage_table'}>
                <Table content={props.pageContent.spec_table} className={'product_spec'}/>
            </div>
            {/*Якорь*/}
            <div id={'scaffoldings_price'} style={anchor}/>
            <Prices content={props.pageContent.prices}/>
            {/*--------------------- Карусель ---------------------------------*/}
            <Benefits/>
            <Form/>
            <LinksBar content={props.pageContent.first_screen}/>
            {/*Якорь*/}
            <div id={'scaffoldings_manual'} style={anchor}/>
            <Questions content={props.pageContent.questions}/>
            <Manual content={props.pageContent.manual}/>
            <VideoManual content={props.pageContent.video}/>
            <Feedback/>
            {/*Якорь*/}
            <div id={'scaffoldings_contacts'} style={anchor}/>
            <Footer address={'д. Лесковка, Центральная ул., 2Б'} modal={setModalActive} content={props.pageContent.footer}/>
            <YandexMaps address={props.pageContent.mapData}/>
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    );
}


