import React, {useState} from "react"
import {FirstScreen} from "../../components/MainScreen/FirstScreen";
import {Cards} from "../../components/Cards/Cards";
import {ProductInfoTable} from "../../components/ProductInfoTable/ProductInfotable";
import {Feedback} from "../../components/Feedback/Feedback";
import {SpecificationsTable} from "../../components/SpecificationsTable/SpecificationsTable";
import {Benefits} from "../../components/Benefits/Benefits";
import {Manual} from "../../components/Manual/Manual";
import {VideoManual} from "../../components/VideoManual/VideoManual";
import {Questions} from "../../components/Questions/Questions";
import {Footer} from "../../components/Footer/Footer";
import {YandexMaps} from "../../components/YandexMaps/YandexMaps";
import Modal from "../../components/Modal/Modal";

export function ScaffoldsPage(props){
    const [modalActive, setModalActive] = useState(false);

    return (
        <div className="ScaffoldsPage">
            <FirstScreen page={'scaffolds'} modal={setModalActive} content={props.pageContent.first_screen}/>
            <Cards modal={setModalActive}/>
            <ProductInfoTable/>
            <Feedback/>
            <SpecificationsTable/>
            <Benefits/>
            <Manual/>
            <VideoManual/>
            <Questions/>
            <Footer modal={setModalActive}/>
            <YandexMaps/>
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    );
}


