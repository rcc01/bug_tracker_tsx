import './Customers.css';
import Sidebar from '../Sidebar/Sidebar';
import MainDash from '../MainDash/MainDash';

const Customers = () => {
  return (
    <div className='dashboard-div-customers'>
      <div className='dashboard-glass-customers'>
        <Sidebar />
        <MainDash title='Customers' otherThing='otherThingBla' />
      </div>
    </div>
  );
};

export default Customers;
