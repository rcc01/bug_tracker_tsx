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
              labels={card.labels}
              color={card.color}
              compactSeries={card.compactSeries}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
