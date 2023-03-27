import React, {useEffect, useState} from "react";
import './TowersPage.css'

import {VideoManual} from "../../common_components/VideoManual/VideoManual";
import {FirstScreen} from "../../common_components/MainScreen/FirstScreen";
import {Modal} from "../../common_components/Modal/Modal";
import {Feedback} from "../../common_components/Feedback/Feedback";
import {Manual} from "../../common_components/Manual/Manual";
import {Footer} from "../../common_components/Footer/Footer";
import {YandexMaps} from "../../common_components/YandexMaps/YandexMaps";
import {Questions} from "./components/Questions/Questions";
import {Benefits} from "./components/Benefits/Benefits";
import {Cards} from "./components/Cards/Cards";
import {Table} from "../../common_components/Table/Table";
import {LinksBar} from "../../common_components/LinksBar/LinksBar";
import {Form} from "../../common_components/Form/Form";

export function TowersPage(props){
    const [modalActive, setModalActive] = useState(false);
    const anchor = {
        paddingTop: '100px',
        marginTop: '-100px'
    }

    useEffect(() => {
        document.getElementById('title').innerText = 'Аренда вышек тур в Минске с доставкой. Вышка тура высотой до 21 метра. Тура на прокат.'
    })

    return (
        <div className="TowersPage">
            <FirstScreen content={props.pageContent.first_screen} modal={setModalActive}/>
            {/*Якорь*/}
            <div id={'towers_price'} style={anchor}/>
            <Cards modal={setModalActive}/>
            {/*Якорь*/}
            <div id={'towers_params'} style={anchor}/>
            <div className={'product_info_table container'}>
                <Table content={props.pageContent.product_info_table}/>
            </div>
            <Benefits/>
            <div className={'spec_table container'}>
                <Table content={props.pageContent.spec_table}/>
            </div>
            <Form/>
            <LinksBar content={props.pageContent.first_screen}/>
            {/*Якорь*/}
            <div id={'towers_manual'} style={anchor}/>
            <Manual content={props.pageContent.manual}/>
            <VideoManual content={props.pageContent.video}/>
            <Feedback/>
            {/*Якорь*/}
            <div id={'towers_questions'} style={anchor}/>
            <Questions content={props.pageContent.questions}/>
            {/*Якорь*/}
            <div id={'towers_contacts'} style={anchor}/>
            <Footer modal={setModalActive} content={props.pageContent.footer}/>
            <YandexMaps address={props.pageContent.mapData}/>
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    );
}


