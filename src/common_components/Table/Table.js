import React from "react";
import './Table.css';

export function Table(props) {
    return (
        <div className={`Table ${props.className} container`}>
            <h2 className={props.content.title ? '' : 'disable'}>{props.content.title}</h2>
            <table>
                <thead>
                <tr>{props.content.table[0].map(item => <td>{item}</td>)}</tr>
                </thead>
                <tbody>
                {props.content.table.map((el, index) => {
                    if(index > 0) return (<tr>{el.map(item => <td>{item}</td>)}</tr>)
                    else return (<></>)
                })}
                </tbody>
            </table>
        </div>
    );
}