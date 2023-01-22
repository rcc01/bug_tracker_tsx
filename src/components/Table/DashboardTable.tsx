import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import '../../styles/styles.css';
import { v4 as uuidv4 } from 'uuid';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';
import RowData from './RowData';
import apiUrls from '../../constants/apiUrls';
import useRerender from '../../hooks/useRerender';
import React from 'react';
import Table from 'react-bootstrap/Table';
import { Button, Form, Modal } from 'react-bootstrap';
import StoreContext from '../../contexts/StoreContext';
import { render } from 'react-dom';

const DashboardTable = () => {
  const { singletonDataStore } = useContext(StoreContext);
  const [rowData, setRowData] = useState<RowData[] | null>(null);
  const [renderState, rerenderTable] = useRerender();

  interface ProjectsGetResponseData {
    data: RowData[];
  }

  const getData: () => Promise<ProjectsGetResponseData> = async () => {
    const data = singletonDataStore.readProjects();
    return {
      data: data,
    };
  };

  // useEffect(() => {
  //   // GET within useEffect
  //   // read more about useEffect

  //   const response = axios
  //     .get<RowData[]>(apiUrls.projects.GET)
  //     .then((result) => setRowData(result.data));
  // }, [renderState]);

  useEffect(() => {
    getData().then((result) => setRowData(result.data));
  }, [renderState]);

  const [addFormData, setAddFormData] = useState({
    title: '',
    description: '',
    contributors: '',
    status: '',
  });

  // for POST:
  const handleAddFormChange = (event: any) => {
    event.preventDefault();
    const { name, value } = event.target as HTMLTextAreaElement;
    setAddFormData({
      ...addFormData,
      [name]: value,
    });
  };

  //create a data in DashboardTable POST:
  const create = async (e: any) => {
    e.preventDefault();
    const newContact = {
      id: uuidv4(),
      title: addFormData.title,
      description: addFormData.description,
      contributors: addFormData.contributors,
      status: addFormData.status,
    };
    console.log(newContact); //tengo que enviar esto a post
    singletonDataStore.createUpdateProjects(newContact);

    // const response = await axios.post(apiUrls.projects.POST, newContact);
    rerenderTable();
    handleClose();
  };

  // PUT
  const [editContactId, setEditContactId] = useState<string | null>(null);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <h3
        style={{
          fontFamily: 'Be Vietnam Pro, sans-serif',
          fontWeight: '900',
        }}
        className='recent-projects'
      >
        Recent Projects
      </h3>
      <div className='btn-div'>
        <button className='icon-btn add-btn' onClick={handleShow}>
          <div className='add-icon'></div>
          <div className='btn-txt'>New Project</div>
        </button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
          // onSubmit={create}
          >
            <Form.Group className='mb-3'>
              <Form.Label>Project Title</Form.Label>
              <Form.Control
                type='text'
                name='title'
                required
                placeholder='Name...'
                onChange={handleAddFormChange}
              />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Project Description</Form.Label>
              <Form.Control
                type='text'
                name='description'
                required
                placeholder='Description...'
                onChange={handleAddFormChange}
              />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Contributors </Form.Label>
              <Form.Control
                type='text'
                name='contributors'
                required
                placeholder='Contributors...'
                onChange={handleAddFormChange}
              />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Project Status</Form.Label>
              <Form.Select
                required
                name='status'
                onChange={handleAddFormChange}
              >
                <option>Choose...</option>
                <option value='New'>New</option>
                <option value='In Progress'>In Progress</option>
                <option value='Resolved'>Resolved</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={create}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      <div className='dimension-table'>
        <Table bordered hover responsive>
          <thead>
            <tr>
              <td>Name</td>
              <td>Description</td>
              <td>Contributors</td>
              <td>Status</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {rowData !== null
              ? rowData.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      {editContactId === item.id ? (
                        <EditableRow
                          data={item}
                          setEditable={setEditContactId}
                          rerenderTable={rerenderTable}
                        />
                      ) : (
                        <ReadOnlyRow
                          projectInfo={item}
                          key={index}
                          setEditable={setEditContactId}
                          rerenderTable={rerenderTable}
                        />
                      )}
                    </React.Fragment>
                  );
                })
              : undefined}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default DashboardTable;
