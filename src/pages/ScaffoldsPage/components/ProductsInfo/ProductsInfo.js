import React from "react";
import './ProductsInfo.css';

import img from './images/slider_img1.svg';

export const ProductsInfo = () => {
    return (
        <div className={'ProductsInfo'}>
            <div className={'title'}>
                <div/>
                <h4>Технические характеристики и стоимость</h4>
                <div/>
            </div>
            <div className={'content container'}>
                <div className={'part'}>
                    <img src={img} alt=""/>
                </div>
                <div className={'part'}>
                    <table>
                        <thead>
                        <tr>
                            <td colSpan={2}>Технические характеристики помоста ПМ 200</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Длина, мм</td>
                            <td>1710</td>
                        </tr>
                        <tr>
                            <td>Ширина, мм</td>
                            <td>550</td>
                        </tr>
                        <tr>
                            <td>Высота, мм</td>
                            <td>1800</td>
                        </tr>
                        <tr>
                            <td>Допустимая нагрузка, кг</td>
                            <td>200</td>
                        </tr>
                        <tr>
                            <td>Max. высота рабочей площадки</td>
                            <td>1260/1620*</td>
                        </tr>
                        <tr>
                            <td>Min. высота рабочей площадки</td>
                            <td>180</td>
                        </tr>
                        <tr>
                            <td>Вес, кг</td>
                            <td>35</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}