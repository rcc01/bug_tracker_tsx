import RecentEmployees from './RecentEmployees';
import '../styles/styles.css';

function RightSide() {
  return (
    <div className='right-side'>
      <div className='employees-div'>
        <h2
          style={{
            fontFamily: 'Be Vietnam Pro, sans-serif',
            fontWeight: '900',
          }}
        >
          Recent Employees
        </h2>
        <RecentEmployees />
      </div>
    </div>
  );
}

export default RightSide;
