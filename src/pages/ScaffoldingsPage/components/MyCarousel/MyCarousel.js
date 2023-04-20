import React, {useState} from 'react';
import './MyCarousel.css'
import { CarouselCard } from "../CarouselCard/CarouselCard";
import {CarouselProvider, Slider, Slide, Dot} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export const MyCarousel = (props) => {
    const [visibleSlides] = useState(4)
    const [selectedDotClassName, setSelectedDotClassName] = useState('select__dot__0')
    const cardsRender = (cards) => {
        return cards.map((card, id) => <Slide index={id}><CarouselCard cardData={card}/></Slide>)
    }

    const dotsRender = (cards) => {
        return cards.map((card, id) => {
            if(id <= cards.length - visibleSlides){
                return (
                    <Dot slide={id} className={selectedDotClassName === ('select__dot__' + id) ? 'carousel__dot dot__selected' : 'carousel__dot'} disabled={false} onClick={() => {setSelectedDotClassName('select__dot__' + id)}}>
                        <div className={'carousel__dot_selected'}></div>
                    </Dot>
                )
            }
            else return null;
        })
    }

    return (
        <div className={'MyCarousel container'}>
            <h2 className={'MyCarousel__title'}>
                При аренде лесов мы предоставляем следующей элементы:
            </h2>
            <CarouselProvider
                isPlaying={true}
                playDirection={'forward'}
                step={1}
                interval={5000}
                naturalSlideWidth={10}
                naturalSlideHeight={15}
                totalSlides={props.content.length}
                visibleSlides={visibleSlides}
                infinite={true}
            >
                <Slider>
                    {cardsRender(props.content)}
                </Slider>
                <div className="carousel__dots__group">
                    {dotsRender(props.content)}
                </div>
            </CarouselProvider>
        </div>
    );
}