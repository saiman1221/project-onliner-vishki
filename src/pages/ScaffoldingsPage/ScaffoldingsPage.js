import React, {useState} from "react";
import './ScaffoldingsPage.css';

import {Prices} from "../TowersPage/components/Prices/Prices";
import {FirstScreen} from "../../common_components/MainScreen/FirstScreen";
import {LinksBar} from "../../common_components/LinksBar/LinksBar";
import {Feedback} from "../../common_components/Feedback/Feedback";
import {Manual} from "../../common_components/Manual/Manual";
import {Footer} from "../../common_components/Footer/Footer";
import {Modal} from "../../common_components/Modal/Modal";
import {AboutProduct} from "./components/AboutProduct/AboutProduct";
import {Table} from "../../common_components/Table/Table";

export function ScaffoldingsPage(props){
    const [modalActive, setModalActive] = useState(false);

    return (
        <div className="ScaffoldingsPage">
            <FirstScreen modal={setModalActive} content={props.pageContent.first_screen}/>
            <AboutProduct/>
            <div className={'container ScaffoldingsPage_table'}>
                <Table content={props.pageContent.spec_table} className={'product_spec'}/>
            </div>
            <Prices/>
            <LinksBar content={props.pageContent.first_screen}/>
            <Feedback/>
            <Manual content={props.pageContent.manual}/>
            <Footer/>
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    );
}


