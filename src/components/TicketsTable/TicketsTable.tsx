import '../../styles/styles.css';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import RowData from '../Table/RowData';
import { Fragment, useEffect, useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import apiUrls from '../../constants/apiUrls';
import axios from 'axios';
import useRerender from '../../hooks/useRerender';
import EditableTicketRow from './EditableTicketRow';
import ReadOnlyTicketRow from './ReadOnlyTicketRow';
import Table from 'react-bootstrap/Table';
import StoreContext from '../../contexts/StoreContext';

export interface RowDataTicket {
  id: string;
  projectId: string;
  title: string;
  type: string;
  description: string;
  status: string;
  priority: string;
}

const TicketsTable = () => {
  // 1. add singleton
  const { singletonDataStore } = useContext(StoreContext);

  const [rowDataTicket, setRowDataTicket] = useState<RowDataTicket[] | null>(
    null
  );
  const [rowDataProject, setRowDataProject] = useState<RowData[] | null>(null);
  const [renderState, rerenderTable] = useRerender();

  // These 3 are for the modal only
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // ------
  //add data from Modal to table
  const [addFormData, setAddFormData] = useState({
    projectId: '',
    title: '',
    type: '',
    description: '',
    status: '',
    priority: '',
  });

  //posting from modal
  const handleAddFormChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target as HTMLTextAreaElement;
    setAddFormData({
      ...addFormData,
      [name]: value,
    });
  };

  const createTicket = async (e: any) => {
    e.preventDefault();
    const newTicket = {
      id: uuidv4(),
      projectId: addFormData.projectId,
      type: addFormData.type,
      title: addFormData.title,
      description: addFormData.description,
      status: addFormData.status,
      priority: addFormData.priority,
    };
    console.log(newTicket);

    singletonDataStore.createUpdateTickets(newTicket);

    // const response = await axios.post(apiUrls.tickets.POST, newTicket);
    // console.log(response)
    rerenderTable();
    handleClose();
  };

  interface TicketsGetResponseData {
    data: RowDataTicket[];
  }

  const getData: () => Promise<TicketsGetResponseData> = async () => {
    const data = singletonDataStore.readTickets();
    return {
      data: data,
    };
  };

  useEffect(() => {
    getData().then((result) => setRowDataTicket(result.data));
  }, [renderState]);

  // GET

  //

  // useEffect(() => {
  //   axios
  //     .get<RowData[]>(apiUrls.projects.GET)
  //     .then((result) => setRowDataProject(result.data));
  // }, [renderState]);

  // useEffect(() => {
  //   axios
  //     .get<RowDataTicket[]>(apiUrls.tickets.GET)
  //     .then((result) => setRowDataTicket(result.data));
  // }, [renderState]);

  // PUT!
  const [editRowId, setEditRowId] = useState<string | null>(null);

  return (
    <>
      <div className='btn-div__tickets'>
        <button className='icon-btn add-btn' onClick={handleShow}>
          <div className='add-icon'></div>
          <div className='btn-txt'>New Ticket</div>
        </button>
      </div>
      <p className='p--new-projects-tickets'>
        Use the + button to add a new ticket!
      </p>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Ticket</Modal.Title>
        </Modal.Header>

        {/* onSubmit on the other input form */}
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3'>
              <Form.Label>Ticket Title</Form.Label>
              <Form.Control
                type='text'
                name='title'
                required
                placeholder='Title...'
                onChange={handleAddFormChange}
              />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Ticket by Type</Form.Label>
              <Form.Select name='type' required onChange={handleAddFormChange}>
                <option>Type...</option>
                <option value='Issue'>Issue</option>
                <option value='Bug'>Bug</option>
                <option value='Feature'>Feature</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Ticket Description</Form.Label>
              <Form.Control
                type='text'
                name='description'
                placeholder='Description...'
                required
                onChange={handleAddFormChange}
              />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Ticket by Status</Form.Label>
              <Form.Select
                name='status'
                required
                onChange={handleAddFormChange}
              >
                <option>Status...</option>
                <option value='Resolved'>Resolved</option>
                <option value='New'>New</option>
                <option value='In Progress'>In Progress</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Ticket by Priority</Form.Label>
              <Form.Select
                name='priority'
                required
                onChange={handleAddFormChange}
              >
                <option>Priority...</option>
                <option value='Immediate'>Immediate</option>
                <option value='High'>High</option>
                <option value='Medium'>Medium</option>
                <option value='Low'>Low</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className='btn btn-secondary'
            type='reset'
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className='btn btn-success'
            type='submit'
            onClick={createTicket}
          >
            Save
          </button>
        </Modal.Footer>
      </Modal>

      <div className='dimension-table tickets-table'>
        <Table bordered hover responsive size='sm' striped>
          <thead>
            <tr>
              <td>Title</td>
              <td>Type</td>
              <td>Description</td>
              <td>Status</td>
              <td>Priority</td>
              <td>Actions</td>
            </tr>
          </thead>

          <tbody>
            {rowDataTicket !== null
              ? rowDataTicket.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      {editRowId === item.id ? (
                        <EditableTicketRow
                          data={item}
                          setEditable={setEditRowId}
                          rerenderTable={rerenderTable}
                        />
                      ) : (
                        <ReadOnlyTicketRow
                          ticketInfo={item}
                          key={index}
                          setEditable={setEditRowId}
                          rerenderTable={rerenderTable}
                        />
                      )}
                    </Fragment>
                  );
                })
              : undefined}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default TicketsTable;
