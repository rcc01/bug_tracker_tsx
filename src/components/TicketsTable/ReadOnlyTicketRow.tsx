// import axios from 'axios';
import { FormEvent, useContext } from 'react';
import StoreContext from '../../contexts/StoreContext';
// import apiUrls from '../../constants/apiUrls';
import { RowDataTicket } from './TicketsTable';

interface Props {
  ticketInfo: RowDataTicket;
  setEditable: any;
  rerenderTable: () => void;
}

const ReadOnlyTicketRow = ({
  ticketInfo,
  setEditable,
  rerenderTable,
}: Props) => {
  const { singletonDataStore } = useContext(StoreContext);
  const deleteRow = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    singletonDataStore.deleteTicket(ticketInfo.id);
    // await axios.delete(apiUrls.tickets.DELETE(ticketInfo.id));
    rerenderTable();
  };

  return (
    <tr key={ticketInfo.id}>
      <td>{ticketInfo.title}</td>
      <td>{ticketInfo.type}</td>
      <td>{ticketInfo.description}</td>
      <td>{ticketInfo.status}</td>
      <td>{ticketInfo.priority}</td>
      <td>
        <button className='edit-btn' onClick={() => setEditable(ticketInfo.id)}>
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
