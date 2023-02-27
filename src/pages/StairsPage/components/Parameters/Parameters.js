import React from "react"
import './Parameters.css'
import {Table} from "../../../../common_components/Table/Table";

export function Parameters(props) {
    return (
        <div className="Parameters">
            <div className={'container'}>
                <h3>{props.content.title}</h3>
                <ul>{props.content.list.map(el => <li>{el}</li>)}</ul>
            </div>
            <img src={props.photo} className={'display_mobil'} alt="Фото лестницы"/>
            <div className={'title'}><div/><h4>Технические характеристики</h4><div/></div>
            <div className={'characteristics  container'}>
                <div className={'table'}>
                    <Table content={props.content.paramsTable}/>
                </div>
                <img src={props.photo} alt="Фото лестницы"/>
            </div>
            <div className={'title'}><div/><h4>Стоимость</h4><div/></div>
            <div className={'prices container'}>
                <div className={'content'}>
                    <Table content={props.content.pricesTable}/>
                    <p>* Минимальная сумма для заключения договора - 20 рублей.</p>
                </div>
            </div>
        </div>
    );
}