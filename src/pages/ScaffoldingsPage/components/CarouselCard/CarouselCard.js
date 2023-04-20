import React from 'react';
import './CarouselCard.css';

export const CarouselCard = ({cardData}) => {
    return (
        <div className={'CarouselCard'}>
            <h3 className={'CarouselCard__title'}>{cardData.title}</h3>
            <div className={'CarouselCard__image'}>
                <img src={require(`/src/assets/images/scaffoldings_page/carousel/${cardData.img}`)} alt="Фото элемента"/>
            </div>
            <p>Размер элемента: {cardData.size} мм</p>
            <p>Масса элемента: {cardData.weight} кг</p>
        </div>
    );
}