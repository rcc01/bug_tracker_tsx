import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/esm/Form';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import '../../styles/styles.css';
// import axios from 'axios'; // NOTE: Only uncomment when using API.
import Swal from 'sweetalert2';
import Row from 'react-bootstrap/Row';
import CardEmployees from './CardEmployees';
import useRerender from '../../hooks/useRerender';
import StoreContext from '../../contexts/StoreContext';

export interface RowDataEmployee {
  country: string;
  designation: string;
  hireDate: string;
  id: string;
  imageUrl: string;
  reportsTo: string;
}

const EmployeesTable = () => {
  const { singletonDataStore } = useContext(StoreContext);
  // for post
  const [dataEmployee, setDataEmployee] = useState({
    hireDate: '',
    country: '',
    designation: '',
    id: '',
    imageUrl: '',
    reportsTo: '',
  });
  const [renderState, rerenderTable] = useRerender();
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
    // console.log(dataEmployee);
    // const response = await axios.post(
    //   'http://localhost:8080/Employee',
    //   dataEmployee
    // );
    try {
      singletonDataStore.createUpdateEmployee(dataEmployee);
      rerenderTable();
      Swal.fire('Saved!', `The record has been saved successfully!`);
      handleClose();
    } catch (exception) {
      Swal.fire('Error!', 'There was a problem recording the data!', 'error');
    }
    clearForm();
    // NOTE: Only uncomment when using API.
    // if (response.status === 200) {
    //   Swal.fire('Saved!', `The record has been saved successfully!`);
    //   handleClose();
    // } else {
    //   Swal.fire('Error!', 'There was a problem recording the data!', 'error');
    // }
  };

  // GET

  interface EmployeesGetResponseData {
    data: RowDataEmployee[];
  }

  const getData: () => Promise<EmployeesGetResponseData> = async () => {
    // NOTE: Only uncomment when using API.
    // const response = await axios.get('http://localhost:8080/Employee');
    // response.data.forEach((element: any) => {
    //   if (element.hireDate !== '') {
    //     element.hireDate = element.hireDate.slice(0, 10);
    //   }
    // });
    const data = singletonDataStore.readEmployees();
    data.forEach((element: any) => {
      if (element.hireDate !== '') {
        element.hireDate = element.hireDate.slice(0, 10);
      }
    });
    return {
      data: data
    };
  };

  useEffect(() => {
    getData().then((response) => {
      setList(response.data);
    });
  }, [renderState]);

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
              rerenderTable={rerenderTable}
              handleShow={handleShow}
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default EmployeesTable;
