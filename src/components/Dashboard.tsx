import MainDash from './MainDash';
import Sidebar from './Sidebar';
import Cards from './Cards';
import DashboardTable from './Table/DashboardTable';
import RightSide from './RightSide';
import '../styles/styles.css';

const Dashboard = () => {
  return (
    <div className='dashboard-div'>
      <div className='dashboard-glass'>
        <Sidebar />
        <MainDash title='Dashboard'>
          <Cards />
          <DashboardTable />
        </MainDash>
        <RightSide />
      </div>
    </div>
  );
};

export default Dashboard;
