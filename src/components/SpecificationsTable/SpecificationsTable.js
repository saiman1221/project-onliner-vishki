import React from "react";
import s from '../ProductInfoTable/ProductInfoTable.module.css';
import new_s from './SpecificationsTable.module.css'


const tableData = [
    ['Параметр','Вышка тура ВСР-1','Вышка тура ВСР-4','Вышка тура ВСР-7'],
    ['Параметр','Вышка тура ВСР-1','Вышка тура ВСР-4','Вышка тура ВСР-7'],
    ['Параметр','Вышка тура ВСР-1','Вышка тура ВСР-4','Вышка тура ВСР-7'],
    ['Параметр','Вышка тура ВСР-1','Вышка тура ВСР-4','Вышка тура ВСР-7'],
    ['Параметр','Вышка тура ВСР-1','Вышка тура ВСР-4','Вышка тура ВСР-7'],
    ['Параметр','Вышка тура ВСР-1','Вышка тура ВСР-4','Вышка тура ВСР-7'],
    ['Параметр','Вышка тура ВСР-1','Вышка тура ВСР-4','Вышка тура ВСР-7']
]

export function SpecificationsTable() {
    return (
        <div className={s.table + ' container'}>
            <h2>Подробные технические характеристики вышки туры передвижной</h2>
            <table className={new_s.table}>
                {tableData.map(el => <tr>{el.map(item => <td>{item}</td>)}</tr>)}
            </table>
        </div>
    );
}