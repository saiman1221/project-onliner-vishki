import React, {useState} from "react"

import {FirstScreen} from "../../common_components/MainScreen/FirstScreen";


export function ScaffoldsPage(props){
    const [modalActive, setModalActive] = useState(false);

    return (
        <div className="ScaffoldsPage">
            <FirstScreen page={'scaffolds'} modal={setModalActive} content={props.pageContent.first_screen}/>
        </div>
    );
}


