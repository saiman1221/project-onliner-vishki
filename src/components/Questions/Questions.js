import React from "react";
import './Questions.css'
import {Answers} from "./Answers/Answers";

const questionsData = [
    {
        "question": "Почему именно вышка тура?",
        "answer": "Большое разнообразие ремонтных, строительных работ проводится на высоте. Для этого создаются специальные устройства, обеспечивающие удобный доступ к отдельным участкам. Активно задействуется вышка тура передвижная, отличающиеся относительной простотой конструкции. Визуально они напоминают строительные леса, однако выгодно отличаются от последних гораздо большей мобильностью и простотой сборки. Если надо, то удастся собрать вышку в течение часа без привлечения большого количества работников, спецсредств."
    },
    {
        "question": "Какие преимущества аренды вышек тур?",
        "answer": "Есть выбор разных размеров и высоты. Организована подача непосредственно на строительную площадку, к любому месту, где будут проводиться манипуляции. Иногда пользователи затрудняются назвать точно, какая модель им подходит в зависимости от функционала. Например, в узких пространствах целесообразно выбирать сборно-разборные аналоги, а монолитные не всегда могут вместиться в них. Целесообразно обращаться к специалистам прежде чем остановить выбор на аренде какого-то определённого вида."
    },
    {
        "question": "На сколько безопасны вышки?",
        "answer": "Эти устройства являются максимально безопасными, поэтому учитывается структура поверхности, возможность зафиксировать стойки на требуемой высоте.\n" +
            "Есть не менее популярные вышки-туры ВСР, имеющие небольшие колёса. Они способны поворачиваться вправо-влево либо под определённым углом, в некоторых случаях до 360. Это важное конструктивное решение, позволяющее обрабатывать конфигурацию пространства с многочисленными углами, выступами. Поворачивая вышку под нужным углом в разные стороны, удастся получить доступ к труднодоступным местам. Как видно, технические возможности действительно впечатляют, поэтому можно взять вышку туру напрокат для исполнения проектов разной сложности, срочности."
    },
    {
        "question": "Что мне надо иметь при себе, чтобы взять в аренду вышку?",
        "answer": "Чтобы взять в аренду вышку туру, при себе необходимо иметь ПАСПОРТ для заключения договора"
    }
]

export function Questions() {
    return (
        <div className={'Questions__questions container'} id={'questions'}>
            <h2>Вопрос / ответ</h2>
            <div className={'Questions__questions_content'}>
                {questionsData.map(el => <Answers question={el.question} answer={el.answer}/>)}
            </div>
        </div>
    );
}