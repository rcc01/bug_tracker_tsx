import React from 'react';
import './Cards.css';
import Card, { CardProps } from '../Card/Card';

export interface CardsProps {
  cardsData: CardProps[];
  children?: React.ReactNode;
}

const Cards = ({ cardsData }: CardsProps) => {
  return (
    <div className='Cards'>
      {cardsData.map((card, id) => {
        return (
          <div className='parentContainer' key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
