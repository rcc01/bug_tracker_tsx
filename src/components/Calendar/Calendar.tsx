import Sidebar from '../Sidebar/Sidebar';
import MainDash from '../MainDash/MainDash';
import './Calendar.css';
import CalendarTable from '../CalendarTable/CalendarTable';

const Calendar = () => {
  return (
    <div className='dashboard-div-calendar'>
      <div className='dashboard-glass-calendar'>
        <Sidebar />
        <MainDash title='Calendar'>
          <CalendarTable />
        </MainDash>
      </div>
    </div>
  );
};

export default Calendar;
