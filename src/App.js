import React from "react";
import {MainScreen} from "./components/MainScreen/MainScreen";
import {ProductInfoTable} from "./components/ProductInfoTable/ProductInfotable";
import {Feedback} from "./components/Feedback/Feedback";

export function App() {
    return (
        <div className="App">
            <MainScreen/>
            <ProductInfoTable/>
            <Feedback/>
        </div>
    );
}