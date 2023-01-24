import React, {useState} from "react"
import {FirstScreen} from "../../components/MainScreen/FirstScreen";
import Modal from "../../components/Modal/Modal";
import {AboutProduct} from "../../components/AboutProduct/AboutProduct";
import {Prices} from "../../components/Prices/Prices";
import {LinksBar} from "../../components/LinksBar/LinksBar";
import {SpecificationsTable} from "../../components/SpecificationsTable/SpecificationsTable";
import {Feedback} from "../../components/Feedback/Feedback";
import {Manual} from "../../components/Manual/Manual";
import {Footer} from "../../components/Footer/Footer";

export function ScaffoldingsPage(props){
    const [modalActive, setModalActive] = useState(false);

    return (
        <div className="ScaffoldingsPage">
            <FirstScreen page={'scaffoldings'} modal={setModalActive} content={props.pageContent.first_screen}/>
            <AboutProduct/>
            <Prices/>
            <LinksBar/>
            <SpecificationsTable content={props.pageContent.spec_table}/>
            <Feedback/>
            <Manual content={props.pageContent.manual}/>
            <Footer/>
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    );
}


