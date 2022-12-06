import React, {useState} from "react";
import './Answers.css'

export function Answers(props) {
    const [hidden, setHidden] = useState(true);

    return (
        <div className={'Answers__answers'}>
            <div className={'Answers__question_content'}  onClick={e => { setHidden(!hidden);}}>
                <h3>{props.question}</h3>
                <div className={'Answers__button'}>
                    <div className={'Answers__line'}></div>
                    <div className={'Answers__line'} style={hidden ? {} : {transform: 'rotateZ(90deg) rotateY(90deg)'}}></div>
                </div>
            </div>
            <div className={'Answers__answer_content'}>
                <p className={hidden ? 'Answers__hidden' : 'Answers__visible'}>{props.answer}</p>
            </div>
        </div>
    );
}