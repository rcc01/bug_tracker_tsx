import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/esm/Form';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import '../../styles/styles.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import Row from 'react-bootstrap/Row';
import CardEmployees from './CardEmployees';

interface RowDataEmployee {
  country: string;
  designation: string;
  hireDate: '2022-09-13T16:02:31.936Z';
  id: '3fa85f64-5717-4562-b3fc-2c963f66afa6';
  imageUrl: string;
  reportsTo: string;
}

const EmployeesTable = () => {
  // for post
  const [dataEmployee, setDataEmployee] = useState({
    hireDate: '',
    country: '',
    designation: '',
    id: '',
    imageUrl: '',
    reportsTo: '',
  });

  const [updateList, setUpdateList] = useState(false);
  const [list, setList] = useState<any[]>([]);

  const handleChange = ({ target }: any) => {
    setDataEmployee({
      ...dataEmployee,
      [target.name]: target.value,
    });
  };

  // clear forms - modal to add new employee

  const clearForm = () => {
    setDataEmployee({
      hireDate: '',
      country: '',
      designation: '',
      id: '',
      imageUrl: '',
      reportsTo: '',
    });
  };

  // handle Save - Add new Employee from Modal
  const handleSaveSubmit = async (e: any) => {
    e.preventDefault();
    console.log(dataEmployee);
    const response = await axios.post(
      'http://localhost:8080/Employee',
      dataEmployee
    );
    setUpdateList(!updateList);
    if (response.status === 200) {
      Swal.fire('Saved!', `The record has been saved successfully!`);

      handleClose();
    } else {
      Swal.fire('Error!', 'There was a problem recording the data!', 'error');
    }
    clearForm();
  };

  // GET

  const getData = async () => {
    const response = await axios.get('http://localhost:8080/Employee');
    response.data.forEach((element: any) => {
      if (element.hireDate !== '') {
        element.hireDate = element.hireDate.slice(0, 10);
      }
    });
    return response;
  };

  useEffect(() => {
    getData().then((response) => {
      setList(response.data);
    });
  }, [updateList]);

  //render here as well

  //1. modal - same as tickets table
  // MODAL HERE!! - New Employee - close and show

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <div className='btn-div employee'>
        <Button
          className='add-employee-btn btn btn-primary'
          variant='primary'
          onClick={handleShow}
        >
          New Employee
        </Button>
      </div>

      {/* Add new Employee Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Employee</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/* Form within modal body, apply submit below? */}
          <Form>
            <Form.Group className='mb-3'>
              <Form.Label>Employee ID</Form.Label>
              <Form.Control
                type='text'
                name='id'
                placeholder='ID...'
                value={dataEmployee.id}
                onChange={handleChange}
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
                value={dataEmployee.country}
                onChange={handleChange}
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
                value={dataEmployee.imageUrl}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Designation</Form.Label>
              <Form.Select
                className='form-control'
                name='designation'
                placeholder='Designation'
                value={dataEmployee.designation}
                onChange={handleChange}
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
                value={dataEmployee.hireDate}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Reports To..</Form.Label>
              <Form.Select
                className='form-control'
                name='reportsTo'
                value={dataEmployee.reportsTo}
                onChange={handleChange}
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
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleSaveSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Cards */}

      <Row className='row-employee-cards'>
        {list.map((employee, id) => {
          return (
            <CardEmployees
              employee={employee}
              key={id}
              setUpdateList={setUpdateList}
              updateList={updateList}
              handleShow={handleShow}
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default EmployeesTable;
