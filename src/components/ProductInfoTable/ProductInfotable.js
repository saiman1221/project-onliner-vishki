import React from "react";
import s from './ProductInfoTable.module.css';

const tableData = [
    ['Комплектация', 'Рабочая высота (м)', 'Общая высота (м)', 'Высота до настила (м)', 'Вес (ВСР-1), кг', 'Вес (ВСР-4), кг', 'Вес (ВСР-7), кг'],
    ['dwad', 'dwad', 'dwad', 'dwad', 'dwad', 'dwad', 'dwad'],
    ['dwad', 'dwad', 'dwad', 'dwad', 'dwad', 'dwad', 'dwad'],
    ['dwad', 'dwad', 'dwad', 'dwad', 'dwad', 'dwad', 'dwad'],
    ['dwad', 'dwad', 'dwad', 'dwad', 'dwad', 'dwad', 'dwad'],
    ['dwad', 'dwad', 'dwad', 'dwad', 'dwad', 'dwad', 'dwad'],
    ['dwad', 'dwad', 'dwad', 'dwad', 'dwad', 'dwad', 'dwad'],
    ['dwad', 'dwad', 'dwad', 'dwad', 'dwad', 'dwad', 'dwad'],
    ['dwad', 'dwad', 'dwad', 'dwad', 'dwad', 'dwad', 'dwad'],
    ['dwad', 'dwad', 'dwad', 'dwad', 'dwad', 'dwad', 'dwad'],
    ['dwad', 'dwad', 'dwad', 'dwad', 'dwad', 'dwad', 'dwad'],
    ['dwad', 'dwad', 'dwad', 'dwad', 'dwad', 'dwad', 'dwad'],
    ['dwad', 'dwad', 'dwad', 'dwad', 'dwad', 'dwad', 'dwad'],
    ['dwad', 'dwad', 'dwad', 'dwad', 'dwad', 'dwad', 'dwad'],
    ['dwad', 'dwad', 'dwad', 'dwad', 'dwad', 'dwad', 'dwad'],
    ['dwad', 'dwad', 'dwad', 'dwad', 'dwad', 'dwad', 'dwad'],
    ['dwad', 'dwad', 'dwad', 'dwad', 'dwad', 'dwad', 'dwad']
]

export function ProductInfoTable() {
    return (
        <div className={s.table + ' container'}>
            <h2>Технические характеристики вышки туры передвижной</h2>
            <table>
                {tableData.map(el => <tr>{el.map(item => <td>{item}</td>)}</tr>)}
            </table>
        </div>
    );
}