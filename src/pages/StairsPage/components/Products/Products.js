import React, {useEffect, useState} from "react";

import './Products.css';

import img0 from './images/img1.png';
import img1 from './images/img2.png';
import img2 from './images/img3.png';

export const Products = (props) => {
    const [sliderPosition, setSliderPosition] = useState(0);
    const images = [img0, img1, img2];
    const prevButton = React.createRef();
    const nextButton = React.createRef();

    const changeSliderPosition = (position) => {
        if (position >= 0 && position < props.content.slider.length) {
            setSliderPosition(position);
            if (position === 0) {
                prevButton.current.style.opacity = '0';
                nextButton.current.style.opacity = '1';
                prevButton.current.style.pointerEvents = 'none';
                nextButton.current.style.pointerEvents = 'auto';
            } else if (position === (props.content.slider.length - 1)) {
                prevButton.current.style.opacity = '1';
                nextButton.current.style.opacity = '0';
                nextButton.current.style.pointerEvents = 'none';
                prevButton.current.style.pointerEvents = 'auto';
            } else {
                prevButton.current.style.opacity = '1';
                nextButton.current.style.opacity = '1';
                prevButton.current.style.pointerEvents = 'auto';
                nextButton.current.style.pointerEvents = 'auto';
            }
        } else {
            console.log('false value of slider position');
        }
    }

    useEffect(() => {
        changeSliderPosition(sliderPosition)
    })

    return (
        <div className={'card'}>
            <h2>{props.content.title}</h2>
            <img src={images[props.content.img]} alt="Фото лестницы"/>
            <div className={'slider_title'}>
                <div className="slider_wrapper" style={{transform: `translateX(${-(sliderPosition * 50) + 25}%)`}}>
                    {props.content.slider.map((item, id) => <h4 onClick={() => {
                        changeSliderPosition(id)
                    }} className={sliderPosition === id ? 'active' : 'not_active'}>{item.title}</h4>)}
                </div>
            </div>
            <div className={'slider_buttons'}>
                <button ref={prevButton} className={'button prev'} onClick={() => {
                    changeSliderPosition(sliderPosition - 1)
                }}></button>
                <button ref={nextButton} className={'button next'} onClick={() => {
                    changeSliderPosition(sliderPosition + 1)
                }}></button>
            </div>
            <div className="slider_info">
                <div className={'slider_wrapper'} style={{transform: `translateX(-${sliderPosition * 100}%)`}}>
                    {props.content.slider.map((item) =>
                        <div className={'item'}>
                            <h3 className={'title'}>{item.name}</h3>
                            <ul>
                                {item.price.map(li => <li><span className={'price'}>{li.value}</span>{' рублей / '}<span
                                    className={'days'}>{li.days}</span>{' ' + (li.days > 1 ? 'дней' : 'сутки')}</li>)}
                            </ul>
                        </div>)}
                </div>
            </div>
            <button className={'bottom_button'}>Заказать аренду</button>
        </div>
    )
}