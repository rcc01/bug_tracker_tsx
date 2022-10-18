import axios from 'axios';
import { useState } from 'react';
import { Button, Card, Form, ListGroup, ListGroupItem } from 'react-bootstrap';
import Swal from 'sweetalert2';
import Modal from 'react-bootstrap/Modal';

interface Props {
  handleShow: any;
  setUpdateList: any;
  updateList: any;
  employee: {
    country: string;
    designation: string;
    hireDate: '2022-09-13T16:02:31.936Z';
    id: '3fa85f64-5717-4562-b3fc-2c963f66afa6';
    imageUrl: string;
    reportsTo: string;
  };
}

const CardEmployees = ({
  employee,
  setUpdateList,
  updateList,
  handleShow,
}: Props) => {
  const URL = 'http://localhost:8080/Employee';

  const handleDelete = () => {
    Swal.fire({
      title: `Are you sure you want to delete this employee ?`,
      text: 'This action cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancel',
      confirmButtonText: 'Delete',
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${URL}/${employee.id}`).then((response) => {
          if (response.status === 200) {
            Swal.fire(
              'Deleted!',
              `Employee ${employee.id} deleted successfully!`,
              'success'
            );
            setUpdateList(!updateList);
          } else {
            Swal.fire(
              'Error!',
              'There was an issue deleting the employee',
              'error'
            );
          }
        });
      }
    });
  };

  // Modal - EDIT MOdal

  const [editModal, setEditModal] = useState(false);

  const handleEditClose = () => setEditModal(false);
  const handleEditShow = () => setEditModal(true);

  const [dataModal, setDataModal] = useState({
    id: '',
    country: '',
    designation: '',
    hireDate: '',
    imageUrl: '',
    reportsTo: '',
  });

  const handleChangeModal = ({ target }: any) => {
    setDataModal({
      ...dataModal,
      [target.name]: target.value,
    });
  };

  const handleEditButton = () => {
    handleEditShow();
    setDataModal(employee);
  };

  // PUT

  const handleEditSubmit = async (e: any) => {
    e.preventDefault();
    const response = await axios.put(`${URL}`, dataModal);
    console.log(response);
    if (response.status === 200) {
      Swal.fire(
        'Saved!',
        `The data ${response.data} has been saved successfully!`,
        'success'
      );
      handleEditClose();
      setUpdateList(!updateList);
    } else {
      Swal.fire(
        'Error!',
        'There was an issue updating the information!',
        'error'
      );
      console.log(response);
    }
  };

  return (
    <>
      <div className='col-4 mb-3'>
        <Card>
          {/* Change ID to Empoyee Name, do I need to modify the API swaggers? */}
          <Card.Title className='text-center m-2'>{employee.id}</Card.Title>
          <img
            src={employee.imageUrl}
            alt={employee.id}
            className='card-img-top image-card'
          />
          <Card.Body>
            <ListGroup className='mb-2'>
              <ListGroupItem>
                <strong>Country: </strong>
                {employee.country}
              </ListGroupItem>
              <ListGroupItem>
                <strong>Designation: </strong>
                {employee.designation}
              </ListGroupItem>
              <ListGroupItem>
                <strong>Hire Date: </strong>
                {employee.hireDate}
              </ListGroupItem>
              <ListGroupItem>
                <strong>Reports to: </strong>
                {employee.reportsTo}
              </ListGroupItem>
            </ListGroup>
            <button className='btn btn-danger m-2' onClick={handleDelete}>
              Delete
            </button>
            <Button className='btn btn-primary m-2' onClick={handleEditButton}>
              Edit
            </Button>
          </Card.Body>
        </Card>

        {/* EDIT MODAL */}
        <Modal show={editModal} onHide={handleEditClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Employee Info</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group className='mb-3'>
                <Form.Label>Employee ID</Form.Label>
                <Form.Control
                  type='text'
                  name='id'
                  placeholder='ID...'
                  value={dataModal.id}
                  onChange={handleChangeModal}
                  required
                />
                <Form.Text className='text-muted'>
                  Never share your ID with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label>Country</Form.Label>
                <Form.Select
                  className='form-control'
                  name='country'
                  placeholder='Country'
                  value={dataModal.country}
                  onChange={handleChangeModal}
                  required
                >
                  <option value=''>Country...</option>
                  <option value='United Kingdom'>United Kingdom</option>
                  <option value='Spain'>Spain</option>
                  <option value='Germany'>Germany</option>
                  <option value='USA'>USA</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label>Employees Picture</Form.Label>
                <Form.Control
                  type='text'
                  name='imageUrl'
                  placeholder='Image Url'
                  value={dataModal.imageUrl}
                  onChange={handleChangeModal}
                  required
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label>Designation</Form.Label>
                <Form.Select
                  className='form-control'
                  name='designation'
                  placeholder='Designation'
                  value={dataModal.designation}
                  onChange={handleChangeModal}
                  required
                >
                  <option value=''>Designation...</option>
                  <option value='Software Developer'>Software Developer</option>
                  <option value='DevOp'>DevOp</option>
                  <option value='Back-End Dev'>Back-End Dev</option>
                  <option value='Front-End Dev'>Front-End Dev</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label>Hire Date</Form.Label>
                <Form.Control
                  type='date'
                  name='hireDate'
                  placeholder='Hire Date'
                  value={dataModal.hireDate}
                  onChange={handleChangeModal}
                  required
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label>Reports To..</Form.Label>
                <Form.Select
                  className='form-control'
                  name='reportsTo'
                  value={dataModal.reportsTo}
                  onChange={handleChangeModal}
                  required
                >
                  <option value=''>Manager...</option>
                  <option value='Stephen Bell'>Stephen Bell</option>
                  <option value='Jordan Goodwin'>Jordan Goodwin</option>
                  <option value='Maribel Lopez'>Maribel Lopez</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant='secondary' onClick={handleEditClose}>
              Close
            </Button>
            <Button variant='primary' type='submit' onClick={handleEditSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default CardEmployees;