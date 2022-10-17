import axios from 'axios';
import { FormEvent } from 'react';
import apiUrls from '../../constants/apiUrls';
import { RowDataTicket } from './TicketsTable';

interface Props {
  contact: RowDataTicket;
  setEditable: any;
  rerenderTable: () => void;
}

const ReadOnlyTicketRow = ({ contact, setEditable, rerenderTable }: Props) => {
  const deleteRow = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await axios.delete(apiUrls.tickets.DELETE(contact.id));
    rerenderTable();
  };

  return (
    <tr key={contact.id}>
      <td>{contact.title}</td>
      <td>{contact.type}</td>
      <td>{contact.description}</td>
      <td>{contact.status}</td>
      <td>{contact.priority}</td>
      <td>
        <button className='edit-btn' onClick={() => setEditable(contact.id)}>
          Edit
        </button>
        <button className='dlt-btn' onClick={deleteRow}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyTicketRow;
