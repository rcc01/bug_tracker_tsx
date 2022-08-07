import MainDash from '../MainDash/MainDash';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';
import { cardsData } from '../../Data/Data';
import Cards from '../Cards/Cards';
import Table from '../Table/Table';
import RightSide from '../RightSide/RightSide';

const Dashboard = () => {
  return (
    <div className='dashboard-div'>
      <div className='dashboard-glass'>
        <Sidebar />
        <MainDash title='Dashboard'>
          <Cards cardsData={cardsData} />
          <Table />
        </MainDash>
        <RightSide />
      </div>
    </div>
  );
};

export default Dashboard;
