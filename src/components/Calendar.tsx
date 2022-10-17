import Sidebar from './Sidebar';
import MainDash from './MainDash';
import '../styles/styles.css';
import CalendarTable from './CalendarTable';

const Calendar = () => {
  return (
    <div className='dashboard-div'>
      <div className='dashboard-glass-wider'>
        <Sidebar />
        <MainDash title='Calendar'>
          <CalendarTable />
        </MainDash>
      </div>
    </div>
  );
};

export default Calendar;
