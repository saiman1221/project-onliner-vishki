import React from "react";
import {MainScreen} from "./components/MainScreen/MainScreen";
import {ProductInfoTable} from "./components/ProductInfoTable/ProductInfotable";
import {Feedback} from "./components/Feedback/Feedback";
import {SpecificationsTable} from "./components/SpecificationsTable/SpecificationsTable";
import {Benefits} from "./components/Benefits/Benefits";
import {Manual} from "./components/Manual/Manual";
import {VideoManual} from "./components/VideoManual/VideoManual";
import {Questions} from "./components/Questions/Questions";
import {Footer} from "./components/Footer/Footer";
import {YandexMaps} from "./components/YandexMaps/YandexMaps";



export function App() {
    return (
        <div className="App">
            <MainScreen/>
            <ProductInfoTable/>
            <Feedback/>
            <SpecificationsTable/>
            <Benefits/>
            <Manual/>
            <VideoManual/>
            <Questions/>
            <Footer/>
            <YandexMaps/>
        </div>
    );
}