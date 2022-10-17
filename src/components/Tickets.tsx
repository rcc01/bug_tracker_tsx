import MainDash from './MainDash';
import Sidebar from './Sidebar';
import '../styles/styles.css';
import TicketsTable from './TicketsTable/TicketsTable';

const Tickets = () => {
  return (
    <div className='dashboard-div'>
      <div className='dashboard-glass-wider'>
        <Sidebar />
        <MainDash title='Tickets'>
          <TicketsTable />
        </MainDash>
      </div>
    </div>
  );
};

export default Tickets;
