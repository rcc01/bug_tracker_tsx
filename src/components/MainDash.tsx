import { CardsProps } from './Cards';
import '../styles/styles.css';
import DashboardTable from './Table/DashboardTable';

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
          fontFamily: 'Be Vietnam Pro, sans-serif',
          fontWeight: '900',
          marginTop: '6rem',
        }}
      >
        {title}
      </h1>
      <div>{children}</div>
    </div>
  );
};

export default MainDash;
