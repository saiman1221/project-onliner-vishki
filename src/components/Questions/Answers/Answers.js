import React, {useState} from "react";
import './Answers.css'

export function Answers(props) {
    const [hidden, setHidden] = useState(true);

    return (
        <div className={'Answers'}>
            <div className={'question content'}  onClick={e => { setHidden(!hidden);}}>
                <h3>{props.question}</h3>
                <div className={'button'}>
                    <div className={'line'}></div>
                    <div className={'line'} style={hidden ? {} : {transform: 'rotateZ(90deg) rotateY(90deg)'}}></div>
                </div>
            </div>
            <div className={'answer content'}>
                <p className={hidden ? 'hidden' : 'visible'}>{props.answer}</p>
            </div>
        </div>
    );
}