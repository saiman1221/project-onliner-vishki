import React, {useState} from 'react';
import './MyCarousel.css'
import { CarouselCard } from "../CarouselCard/CarouselCard";
import {CarouselProvider, Slider, Slide, Dot, DotGroup, ButtonBack, ButtonNext} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const cardsRender = (cards) => {
    return cards.map((card, id) => <Slide index={id}><CarouselCard cardData={card}/></Slide>)
}

export const MyCarousel = (props) => {
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
                visibleSlides={4}
                infinite={true}
            >
                <Slider>
                    {cardsRender(props.content)}
                </Slider>
                <div className="carousel__dots__group">
                    <Dot slide={0} className={'carousel__dot'} disabled={false}/>
                    <Dot slide={1} className={'carousel__dot'} disabled={false}/>
                    <Dot slide={2} className={'carousel__dot'} disabled={false}/>
                    <Dot slide={3} className={'carousel__dot'} disabled={false}/>
                    <Dot slide={4} className={'carousel__dot'} disabled={false}/>
                </div>
            </CarouselProvider>
        </div>
    );
}