// import { CardsProps } from './Cards';
// import '../styles/styles.css';

export interface MainDashProps {
  title: string;
  // cardsProps?: CardsProps;
  children: React.ReactNode;
}

// MainDash as a reusable component
const MainDash = ({ title, children }: MainDashProps) => {
  return (
    <div className='MainDash'>
      <h1
        className='title'
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
