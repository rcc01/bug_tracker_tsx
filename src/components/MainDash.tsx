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
      <h1
        style={{
          marginBottom: '10px',
          fontFamily: 'Be Vietnam Pro, sans-serif',
          fontWeight: '900',
        }}
      >
        {title}
      </h1>
      <div>{children}</div>
    </div>
  );
};

export default MainDash;
