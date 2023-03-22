import React, {useState} from "react";
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

export function ScaffoldingsPage(props){
    const [modalActive, setModalActive] = useState(false);
    const anchor = {
        paddingTop: '100px',
        marginTop: '-100px'
    }

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
            <Form/>
            <LinksBar content={props.pageContent.first_screen}/>
            {/*Якорь*/}
            <div id={'scaffoldings_manual'} style={anchor}/>
            <Manual content={props.pageContent.manual}/>
            <Feedback/>
            {/*Якорь*/}
            <div id={'scaffoldings_contacts'} style={anchor}/>
            <Footer address={'д. Лесковка, Центральная ул., 2Б'} modal={setModalActive} content={props.pageContent.footer}/>
            <YandexMaps address={props.pageContent.mapData}/>
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    );
}


