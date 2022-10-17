import Sidebar from './Sidebar';
import MainDash from './MainDash';
import EmployeesTable from './Employees/EmployeesTable';
import '../styles/styles.css';

const Employees = () => {
  return (
    <div className='dashboard-div'>
      <div className='dashboard-glass-wider'>
        <Sidebar />
        <MainDash title='Employees'>
          <EmployeesTable />
        </MainDash>
      </div>
    </div>
  );
};

export default Employees;
