import { CardsProps } from './Cards';
import '../styles/styles.css';

export interface MainDashProps {
  title?: string;
  cardsProps?: CardsProps;
  children?: React.ReactNode;
}

const MainDash = ({ title, children }: MainDashProps) => {
  return (
    <div className='MainDash'>
      <h1 style={{ marginBottom: '10px' }}>{title}</h1>
      {/* Aqui tienes tu Reusable component - children!!! */}
      <div>{children}</div>
    </div>
  );
};

export default MainDash;
