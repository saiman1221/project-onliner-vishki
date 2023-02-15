import React, {useState} from "react";
import './TowersPage.css'

import {VideoManual} from "./components/VideoManual/VideoManual";
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

    return (
        <div className="TowersPage">
            <FirstScreen content={props.pageContent.first_screen} modal={setModalActive}/>
            <Cards modal={setModalActive}/>
            <div className={'TowersPage__table product_info_table container'}>
                <Table content={props.pageContent.product_info_table} className={'product_info'}/>
            </div>
            <Benefits/>
            <LinksBar content={props.pageContent.first_screen}/>
            <Feedback/>
            <div className={'TowersPage__table spec_table container'}>
                <Table content={props.pageContent.spec_table}/>
            </div>
            <Form/>
            <Manual content={props.pageContent.manual}/>
            <VideoManual/>
            <Questions/>
            <Footer modal={setModalActive}/>
            <YandexMaps/>
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    );
}


