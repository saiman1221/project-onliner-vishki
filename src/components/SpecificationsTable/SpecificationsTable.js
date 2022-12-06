import React from "react";
import '../ProductInfoTable/ProductInfoTable.css';
import './SpecificationsTable.css'


const tableData = [
    ['Параметр','Вышка тура ВСР-1','Вышка тура ВСР-4','Вышка тура ВСР-7'],
    ['Максимальная высота вышки, м','7,6','18,7','21'],
    ['Размеры рабочей площадки, м:','0,7х1,6','1,2х2','1,2х2'],
    ['Максимальная нагрузка на вышку, кг','250','250','250'],
    ['Количество настилов, шт','1','2','4'],
    ['Высота секции вышки, м','1,23','1,23','1,23'],
    ['Размер колесного основания в сборе: м','0,84х2','1,33х2,4','2,13х2,4']
]

export function SpecificationsTable() {
    return (
        <div className={'ProductInfoTable__table container'}>
            <h2>Подробные технические характеристики вышки туры передвижной</h2>
            <table className={'SpecificationsTable__table'}>
                {tableData.map(el => <tr>{el.map(item => <td>{item}</td>)}</tr>)}
            </table>
        </div>
    );
}