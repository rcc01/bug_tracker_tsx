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

const MainDash = ({ title, children }: MainDashProps) => {
  return (
    <div className='MainDash'>
      <h1>{title}</h1>
      <div>{children}</div>
    </div>
  );
};

export default MainDash;
