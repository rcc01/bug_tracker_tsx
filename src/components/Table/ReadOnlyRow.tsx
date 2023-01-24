import axios from 'axios';
import { FormEvent, useContext } from 'react';
import apiUrls from '../../constants/apiUrls';
import RowData from './RowData';
import '../../styles/styles.css';
import ModeEditTwoToneIcon from '@mui/icons-material/ModeEditTwoTone';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import StoreContext from '../../contexts/StoreContext';

interface Props {
  projectInfo: RowData;
  setEditable: (projectInfoId: string | null) => void;
  rerenderTable: () => void;
}

const ReadOnlyRow = ({ projectInfo, setEditable, rerenderTable }: Props) => {
  const { singletonDataStore } = useContext(StoreContext);
  const deleteRow = async (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // await axios.delete(apiUrls.projects.DELETE(projectInfo.id));
    singletonDataStore.deleteProject(projectInfo.id);
    rerenderTable();
  };

  return (
    <tr key={projectInfo.id}>
      <td>{projectInfo.title}</td>
      <td>{projectInfo.description}</td>
      <td>{projectInfo.contributors}</td>
      <td>{projectInfo.status}</td>
      <td>
        <button
          className='edit-btn'
          onClick={() => setEditable(projectInfo.id)}
        >
          <ModeEditTwoToneIcon />
        </button>
        <button className='dlt-btn' onClick={deleteRow}>
          <DeleteOutlineOutlinedIcon />
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
