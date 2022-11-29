import React, {useEffect, useState} from "react";
import s from './Answers.module.css'

export function Answers(props) {
    const [hidden, setHidden] = useState(true)

    useEffect(() => {

    }, [hidden])

    return (
        <div className={s.answers}>
            <div className={s.question_content} onClick={e => {setHidden(!hidden)}}>
                <h3>{props.question}</h3>
                <div className={s.button}>
                    <div className={s.line}></div>
                    <div className={s.line} style={hidden ? {} : {transform: 'rotateZ(90deg) rotateY(90deg)'}}></div>
                </div>
            </div>
            <div className={s.answer_content}>
                <p className={hidden ? s.hidden : s.visible}>{props.answer}</p>
            </div>
        </div>
    );
}