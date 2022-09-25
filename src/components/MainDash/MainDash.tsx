import { CardsProps } from '../Cards/Cards';
import './MainDash.css';

export interface MainDashProps {
  title?: string;
  cardsProps?: CardsProps;
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
