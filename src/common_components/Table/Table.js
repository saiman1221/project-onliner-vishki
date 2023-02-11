import React from "react";
import './Table.css';

export function Table(props) {
    return (
        <div className={`Table ${props.className} container`}>
            <h2>{props.content.title}</h2>
            <table>
                {props.content.table.map(el => <tr>{el.map(item => <td>{item}</td>)}</tr>)}
            </table>
        </div>
    );
}