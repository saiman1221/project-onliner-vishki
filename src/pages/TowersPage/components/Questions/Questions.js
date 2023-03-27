import React from "react";
import './Questions.css'
import {Answers} from "./Answers/Answers";

export function Questions(props) {
    return (
        <div className={'Questions container'} id={'questions'}>
            <h2>Вопрос / ответ</h2>
            <div className={'content'}>
                {props.content.map(el => <Answers question={el.question} answer={el.answer}/>)}
            </div>
        </div>
    );
}