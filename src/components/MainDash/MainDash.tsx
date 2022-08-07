import React from 'react';
import Cards, { CardsProps } from '../Cards/Cards';
import { cardsData } from '../../Data/Data';
import './MainDash.css';

export interface MainDashProps {
  title?: string;
  cardsProps?: CardsProps;
  whatever?: string;
  otherThing?: string;
  children?: React.ReactNode;
}

const MainDash = ({
  title,
  cardsProps,
  whatever,
  otherThing,
  children,
}: MainDashProps) => {
  return (
    <div className='MainDash'>
      <h1>{title}</h1>
      <h2>{whatever}</h2>
      <h2>{otherThing}</h2>
      <h2>{children}</h2>
    </div>
  );
};

export default MainDash;
