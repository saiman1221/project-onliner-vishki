import React from "react";
import {FirstScreen} from "../../common_components/MainScreen/FirstScreen";
import './NoMatch.css'

export const NoMatch = (props) => {
    return (
        <div className={'nomatch'}>
            <FirstScreen content={props.pageContent}/>
        </div>
    )
}