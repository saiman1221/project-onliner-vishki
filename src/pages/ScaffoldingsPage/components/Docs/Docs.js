import React from "react";
import './Docs.css';
import docsIco from "./images/docs_ico.svg";
import {NavLink} from "react-router-dom";

export const Docs = () => {
    return (
        <div className={'Docs'}>
            <div className={'title'}><div/><h4>Здесь вы можете ознакомиться с инструкцией по эксплуатацией и сертификатом соответствия:</h4><div/></div>
            <div className={'content'}>
                <NavLink target={'_blank'} to="../assets/instruktsiia-po-ekspluatatsii-lrsp-40.pdf" className={'item'}>
                    <img src={docsIco} alt="Иконка"/>
                    <p >Инструкция по эксплуатации (PDF)</p>
                </NavLink>
                <NavLink target={'_blank'} to="../assets/lesa-ramnye-stroitelnye2.pdf" className={'item'}>
                    <img src={docsIco} alt="Иконка"/>
                    <p >Сертификат (PDF)</p>
                </NavLink>
            </div>
        </div>
    )
}