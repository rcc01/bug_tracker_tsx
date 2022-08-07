import './RightSide.css';
import RecentEmployees from '../RecentEmployees/RecentEmployees';

function RightSide() {
  return (
    <div className='RightSide'>
      <div>
        <h2>Recent Employees</h2>
        <RecentEmployees />
      </div>
    </div>
  );
}

export default RightSide;
