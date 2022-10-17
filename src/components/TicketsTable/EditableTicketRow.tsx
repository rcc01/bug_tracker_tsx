import axios from 'axios';
import { FormEvent, useState } from 'react';
import apiUrls from '../../constants/apiUrls';
import { RowDataTicket } from './TicketsTable';

interface Props {
  data: RowDataTicket;
  setEditable: any;
  rerenderTable: () => void;
}

const EditableTicketRow = ({ data, setEditable, rerenderTable }: Props) => {
  const [editFormData, setEditFormData] = useState({
    id: data.id,
    projectId: data.projectId,
    title: data.title,
    type: data.type,
    description: data.description,
    status: data.status,
    priority: data.priority,
  });

  const handleEditFormChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: value,
    });
  };

  const update = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await axios.put(apiUrls.tickets.PUT, editFormData);
    setEditable(null);
    rerenderTable();
  };

  return (
    <tr>
      <td>
        <input
          type='text'
          required
          placeholder='Ticket Title'
          name='title'
          value={editFormData.title}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <label htmlFor='type'>Ticket Type:</label>
        <select
          name='type'
          required
          onChange={handleEditFormChange}
          value={editFormData.type}
        >
          <option value='' disabled>
            Choose
          </option>
          <option value='Issue'>Issue</option>
          <option value='Bug'>Bug</option>
          <option value='Feature'>Feature</option>
        </select>
      </td>
      <td>
        <input
          type='text'
          required
          placeholder='Ticket Description'
          name='description'
          value={editFormData.description}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <label htmlFor='status'>Status:</label>
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
      <label htmlFor='status'>Priority:</label>
      <select
        name='priority'
        required
        onChange={handleEditFormChange}
        value={editFormData.priority}
      >
        <option value='' disabled>
          Choose
        </option>
        <option value='Immediate'>Immediate</option>
        <option value='High'>High</option>
        <option value='Medium'>Medium</option>
        <option value='Low'>Low</option>
      </select>
      <td>
        <button onClick={update}>Save</button>
      </td>
    </tr>
  );
};

export default EditableTicketRow;
