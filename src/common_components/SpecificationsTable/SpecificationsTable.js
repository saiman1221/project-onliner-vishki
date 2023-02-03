import React from "react";
import '../ProductInfoTable/ProductInfoTable.css';
import './SpecificationsTable.css'

export function SpecificationsTable(props) {
    return (
        <div className={'Product_info_table container'}>
            <h2>Подробные технические характеристики вышки туры передвижной</h2>
            <table className={'Specifications_table'}>
                {props.content.map(el => <tr>{el.map(item => <td>{item}</td>)}</tr>)}
            </table>
        </div>
    );
}