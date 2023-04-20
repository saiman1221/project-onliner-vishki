import React from 'react';
import './CarouselCard.css';

export const CarouselCard = ({cardData}) => {
    return (
        <div className={'CarouselCard'}>
            <h3 className={'CarouselCard__title'}>{cardData.title}</h3>
            <div className={'CarouselCard__image'}>
                <img src={require(`/src/assets/images/scaffoldings_page/carousel/${cardData.img}`)} alt="Фото элемента"/>
            </div>
            <div className={'CarouselCard__properties'}>
                <p className={'CarouselCard__text'}>Размер элемента:</p>
                <p className={'CarouselCard__text orange'}>{cardData.size} мм</p>
            </div>
            <div className={'CarouselCard__properties'}>
                <p className={'CarouselCard__text'}>Масса элемента:</p>
                <p className={'CarouselCard__text orange'}>{cardData.weight} кг</p>
            </div>
        </div>
    );
}