import axios from 'axios';
import { FormEvent } from 'react';
import apiUrls from '../../constants/apiUrls';
import RowData from './RowData';
import '../../styles/styles.css';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

interface Props {
  contact: RowData;
  setEditable: (contactId: string | null) => void;
  rerenderTable: () => void;
}

const ReadOnlyRow = ({ contact, setEditable, rerenderTable }: Props) => {
  const deleteRow = async (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    await axios.delete(apiUrls.projects.DELETE(contact.id));
    rerenderTable();
  };

  return (
    <tr key={contact.id}>
      <td>{contact.title}</td>
      <td>{contact.description}</td>
      <td>{contact.contributors}</td>
      <td>{contact.status}</td>
      <td>
        <button className='edit-btn' onClick={() => setEditable(contact.id)}>
          <EditOutlinedIcon />
        </button>
        <button className='dlt-btn' onClick={deleteRow}>
          <DeleteOutlineOutlinedIcon />
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
