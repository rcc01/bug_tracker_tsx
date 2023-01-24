import MainDash from './MainDash';
import Sidebar from './Sidebar';
import Cards from './Cards';
import DashboardTable from './Table/DashboardTable';
import RightSide from './RightSide';
import '../styles/styles.css';
import { Container } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Container className='dashboard-div' fluid>
      <div className='dashboard-glass'>
        <Sidebar />
        <MainDash title='Dashboard'>
          <Cards />
          <DashboardTable />
        </MainDash>
        <RightSide />
      </div>
    </Container>
  );
};

export default Dashboard;
