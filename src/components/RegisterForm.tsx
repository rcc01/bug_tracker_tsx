import '../styles/styles.css';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../Images/carousel1.jpeg';
import carousel2 from '../Images/carousel2.jpeg';
import carousel3 from '../Images/carousel3.jpeg';

const RegisterForm = (e: any) => {
  const navigate = useNavigate();

  return (
    <div className='register-page-cover'>
      <div className='signup__container'>
        <div className='container__child carousel'>
          <Carousel controls={false} fade slide={false} interval={null}>
            <Carousel.Item>
              <img
                className='carousel1-img'
                src={carousel1}
                alt='First slide'
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='carousel2-img'
                src={carousel2}
                alt='Second slide'
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='carousel3-img'
                src={carousel3}
                alt='Third slide'
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className='container__child carousel'>
          <Form className=' signup__form'>
            <Form.Group className='mb-3 '>
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Full Name'
                required
                defaultValue='Raul Contreras'
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                required
                defaultValue='admin@admin.com'
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                required
                defaultValue='admin123'
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword2'>
              <Form.Label>Password Repeat</Form.Label>
              <Form.Control
                type='password'
                placeholder='Retype your Password'
                required
                defaultValue='admin123'
              />
            </Form.Group>

            <Button
              variant='outlined'
              size='large'
              color='secondary'
              onClick={() => navigate('/dashboard')}
            >
              REGISTER
            </Button>
            <div
              style={{ marginTop: '10px', textAlign: 'center' }}
              className='mb-3'
            >
              <Link
                to='/login'
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <p
                  id='already-member'
                  style={{
                    fontFamily: 'Be Vietnam Pro',
                    marginTop: '1.5rem',
                    textDecorationLine: 'underline',
                    fontSize: '0.8rem',
                  }}
                >
                  I already have an account!
                </p>
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
