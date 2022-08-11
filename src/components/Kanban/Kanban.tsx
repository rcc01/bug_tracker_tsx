import Sidebar from '../../components/Sidebar/Sidebar';
import AddBoard from '../KanbanTable/AddBoard';
import Board from '../KanbanTable/Board';
import Home from '../KanbanTable/Home';

import MainDash from '../MainDash/MainDash';

const Kanban = () => {
  return (
    <div className='dashboard-div'>
      <div className='dashboard-glass'>
        <Sidebar />
        <MainDash title='Kanban'>
          <Home />
        </MainDash>
      </div>
    </div>
  );
};

export default Kanban;
