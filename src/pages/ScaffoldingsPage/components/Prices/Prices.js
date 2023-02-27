import React from "react";
import './Prices.css'
import {Table} from "../../../../common_components/Table/Table";

export const Prices = (props) => (
    <div className={'Prices container'}>
        <Table content={props.content.first_table}/>
        <Table content={props.content.second_table}/>
    </div>
)