import React from "react";
import './Docs.css';
import docsIco from "./images/docs_ico.svg";

export const Docs = () => {
    return (
        <div className={'Docs'}>
            <div className={'title'}><div/><h4>Здесь вы можете ознакомиться с инструкцией по эксплуатацией и сертификатом соответствия:</h4><div/></div>
            <div className={'content'}>
                <div className={'item'}>
                    <img src={docsIco} alt="Иконка"/>
                    <a target={'_blank'} href="https://dzsl.ru/media/com_idshop/documents/instruktsiia-po-ekspluatatsii-lrsp-40.pdf">Инструкция по эксплуатации (PDF)</a>
                </div>
                <div className={'item'}>
                    <img src={docsIco} alt="Иконка"/>
                    <a target={'_blank'} href="https://dzsl.ru/media/com_idshop/documents/lesa-ramnye-stroitelnye2.pdf">Сертификат (PDF)</a>
                </div>
            </div>
        </div>
    )
}