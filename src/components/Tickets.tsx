import MainDash from './MainDash';
import Sidebar from './Sidebar';
import '../styles/styles.css';
import TicketsTable from './TicketsTable/TicketsTable';
import { Container } from 'react-bootstrap';

const Tickets = () => {
  return (
    <Container className='dashboard-div' fluid>
      <div className='dashboard-glass-wider'>
        <Sidebar />
        <MainDash title='Tickets'>
          <TicketsTable />
        </MainDash>
      </div>
    </Container>
  );
};

export default Tickets;
