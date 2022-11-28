import React from "react";
import s from './Manual.module.css';

import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img5 from './images/img5.png';

export function Manual() {
    return (
        <div className={s.manual + ' container'}>
            <h2>Инструкция по сборке вышки туры</h2>
            <div className={s.cards}>
                <div className={s.card}>
                    <p className={s.number}>01</p>
                    <div className={s.text}>
                        <p>Монтаж вышки туры начинается с установки двухколесных балок. Вывернутые винтовые опоры ставим балки на ровную поверхность с замками внутрь параллельно друг другу. <br/><br/>
                            Сверху на стаканы базы прикладываем длинную объемную диагональ синего цвета. Обратите внимание на то, что эта деталь не вставляется в колесную базу, а именно прикладывается сверху.
                        </p>
                        <img src={img1} alt=""/>
                    </div>
                </div>
                <div className={s.card}>
                    <p className={s.number}>02</p>
                    <div className={s.text}>
                        <p>Далее вставляем лестницы секции через объемную диагональ длинными концами вниз, тем самым скрепляя предыдущие детали.<br/><br/>
                            Берем 4 стяжки желтого цвета, которые соединяют между собой лестницы и основание. Соединяем их между собой с помощью флажков замков последовательно по часовой стрелке.<br/><br/>
                            Теперь на лестнице основания надеваем гантели синего цвета и также закрепляем их между собой в той же последовательности с помощью желтых стяжек.</p>
                        <img src={img2} alt=""/>
                        <p>После того как мы собрали полностью первую секцию, необходимо слегка встряхнуть получившуюся конструкцию и такую манипуляцию нужно будет проделать каждой последующей секции, чтобы убедиться, что все соединения плотно сели на свои места.</p>
                    </div>
                </div>
                <div className={s.card}>
                    <p className={s.number}>03</p>
                    <div className={s.text}>
                        <p>Теперь можно приступить к выравниванию туры по уровню с четырех сторон с помощью винтовых опор. На этом сборка первой части завершена.<br/><br/>
                            Теперь мы по такому же принципу можем продолжить монтаж последующих секций. На гантели синего цвета надеваем желтый рамы, крепим конструкции четырьмя стяжками, на этом моменте можно установить настил.<br/><br/>
                            Далее сверху снова установленных гантели и еще 4 стяжки. Когда все промежуточные секции готовы, у нас остаются детали красного цвета. Это секция ограждения. Берем лестницы ограждения и вставляем в гантели последней секции, также друг напротив друга.<br/><br/>
                            Далее берем 4 стяжки и закрепляем ими лестницы к гантелям предыдущий секции.</p>
                        <img src={img3} alt=""/>
                    </div>
                </div>
                <div className={s.card}>
                    <p className={s.number}>04</p>
                    <div className={s.text}>
                        <p>На поперечные лестницы ограждения устанавливаем настил с люком и перекладину ограждения с помощью тех же флажковых соединений, к которым крепились стяжки. Устанавливаем гантели ограждения.<br/><br/>
                            Теперь осталось закрепить гантели. Для этого берем оставшийся 4 стяжки и соединяем ими гантели с лестницами. За счет расстояния между ступенями мы можем регулировать высоту установки настила каждые 40 сантиметров.</p>
                        <img src={img4} alt=""/>
                    </div>
                </div>
                <div className={s.card}>
                    <p className={s.number}>05</p>
                    <div className={s.text}>
                        <p>Для обеспечения дополнительной устойчивости предусмотрена установка двух стабилизаторов, которые рекомендуют устанавливать при высоте вышки более 6 метров. Cтабилизаторы крепится хомутами к основной конструкции вышки.</p>
                        <img src={img5} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}