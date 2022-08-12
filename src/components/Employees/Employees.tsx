import './Employees.css';
import Sidebar from '../Sidebar/Sidebar';
import MainDash from '../MainDash/MainDash';
import EmployeesTable from './EmployeesTable';

const Customers = () => {
  return (
    <div className='dashboard-div-customers'>
      <div className='dashboard-glass-customers'>
        <Sidebar />
        <MainDash title='Employees'>
          <EmployeesTable />
        </MainDash>
      </div>
    </div>
  );
};

export default Customers;
