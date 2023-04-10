import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {TowersPage} from "./pages/TowersPage/TowersPage";
import {ScaffoldsPage} from "./pages/ScaffoldsPage/ScaffoldsPage";
import {ScaffoldingsPage} from "./pages/ScaffoldingsPage/ScaffoldingsPage";
import {StairsPage} from "./pages/StairsPage/StairsPage";
import {NoMatch} from "./pages/NoMatch/NoMatch";

export function App(props) {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<TowersPage pageContent={props.store.pagesContent.towers}/>}/>
                    <Route path={'/towers'} element={<TowersPage pageContent={props.store.pagesContent.towers}/>}/>
                    <Route path={'/scaffoldings'} element={<ScaffoldingsPage pageContent={props.store.pagesContent.scaffoldings}/>}/>
                    <Route path={'/scaffolds'} element={<ScaffoldsPage pageContent={props.store.pagesContent.scaffolds}/>}/>
                    <Route path={'/stairs'} element={<StairsPage pageContent={props.store.pagesContent.stairs}/>}/>
                    {/*<Route path={'*'} element={<NoMatch pageContent={props.store.pagesContent.nomatch}/>}/>*/}
                </Routes>
            </BrowserRouter>
        </div>
    );
}