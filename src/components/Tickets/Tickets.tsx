import MainDash from '../MainDash/MainDash';
import Sidebar from '../Sidebar/Sidebar';
import './Tickets.css';
import TicketsTable from '../TicketsTable/TicketsTable';

const Tickets = () => {
  return (
    <div className='dashboard-div-tickets'>
      <div className='dashboard-glass-tickets'>
        <Sidebar />
        <MainDash title='Tickets' whatever='solo'>
          <TicketsTable />
        </MainDash>
      </div>
    </div>
  );
};

export default Tickets;
