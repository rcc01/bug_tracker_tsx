import axios from 'axios';
import { FormEvent, useContext, useState } from 'react';
import apiUrls from '../../constants/apiUrls';
import RowData from './RowData';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import '../../styles/styles.css';
import StoreContext from '../../contexts/StoreContext';

interface Props {
  data: RowData;
  setEditable: (contactId: string | null) => void;
  rerenderTable: () => void;
}

const EditableRow = ({ data, setEditable, rerenderTable }: Props) => {
  const { singletonDataStore } = useContext(StoreContext);
  const [editFormData, setEditFormData] = useState({
    id: data.id,
    title: data.title,
    description: data.description,
    contributors: data.contributors,
    status: data.status,
  });

  const handleEditFormChange = (event: any) => {
    event.preventDefault();
    const { name, value } = event.target;
    setEditFormData({
      ...editFormData,
      [name]: value,
    });
  };

  const update = async (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // await axios.put(apiUrls.projects.PUT, editFormData);
    singletonDataStore.createUpdateProjects(editFormData);
    setEditable(null);
    rerenderTable();
  };

  return (
    <tr className='dimension-table'>
      <td>
        <input
          style={{ width: '125px' }}
          type='text'
          required
          placeholder='Project Name'
          name='title'
          value={editFormData.title}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          style={{ width: '125px' }}
          type='text'
          required
          placeholder='Description'
          name='description'
          value={editFormData.description}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          style={{ width: '125px' }}
          type='text'
          required
          placeholder='Contributors'
          name='contributors'
          value={editFormData.contributors}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <select
          name='status'
          required
          onChange={handleEditFormChange}
          value={editFormData.status}
        >
          <option value='' disabled>
            Choose
          </option>
          <option value='Resolved'>Resolved</option>
          <option value='New'>New</option>
          <option value='In Progress'>In Progress</option>
        </select>
      </td>
      <td>
        <button onClick={update}>
          <SaveOutlinedIcon />
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
