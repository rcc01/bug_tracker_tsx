import { useReducer, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import StoreContext from '../contexts/StoreContext';
import PermissionLevel from '../models/PermissionLevel';
import { Container } from 'react-bootstrap';
import '../styles/styles.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      width: 400,
      margin: `${theme.spacing(0)} auto`,
    },
    loginBtn: {
      marginTop: theme.spacing(2),
      flexGrow: 1,
    },
    header: {
      textAlign: 'center',
      background: '#212121',
      color: '#fff',
    },
    card: {
      marginTop: theme.spacing(30),
    },
  })
);

//state type

type State = {
  username: string;
  password: string;
  isButtonDisabled: boolean;
  helperText: string;
  isError: boolean;
};

const initialState: State = {
  username: '',
  password: '',
  isButtonDisabled: true,
  helperText: '',
  isError: false,
};

type Action =
  | { type: 'setUsername'; payload: string }
  | { type: 'setPassword'; payload: string }
  | { type: 'setIsButtonDisabled'; payload: boolean }
  | { type: 'loginSuccess'; payload: string }
  | { type: 'loginFailed'; payload: string }
  | { type: 'setIsError'; payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setUsername':
      return {
        ...state,
        username: action.payload,
      };
    case 'setPassword':
      return {
        ...state,
        password: action.payload,
      };
    case 'setIsButtonDisabled':
      return {
        ...state,
        isButtonDisabled: action.payload,
      };
    case 'loginSuccess':
      return {
        ...state,
        helperText: action.payload,
        isError: false,
      };
    case 'loginFailed':
      return {
        ...state,
        helperText: action.payload,
        isError: true,
      };
    case 'setIsError':
      return {
        ...state,
        isError: action.payload,
      };
  }
};

const Login = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { singletonUserStore } = useContext(StoreContext);

  useEffect(() => {
    if (state.username.trim() && state.password.trim()) {
      dispatch({
        type: 'setIsButtonDisabled',
        payload: false,
      });
    } else {
      dispatch({
        type: 'setIsButtonDisabled',
        payload: true,
      });
    }
  }, [state.username, state.password]);

  const handleLogin = () => {
    if (state.username === 'admin@admin.com' && state.password === 'admin123') {
      singletonUserStore.setEmail(state.username);
      singletonUserStore.setPermissionLevel(PermissionLevel.ADMIN);
      navigate('/dashboard');
      dispatch({
        type: 'loginSuccess',
        payload: 'Login Successfully',
      });
    } else {
      dispatch({
        type: 'loginFailed',
        payload: 'Incorrect username or password',
      });
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      state.isButtonDisabled || handleLogin();
    }
  };

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: 'setUsername',
      payload: event.target.value,
    });
  };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: 'setPassword',
      payload: event.target.value,
    });
  };
  return (
    <Container className='login-container' fluid>
      <form className={classes.container} noValidate autoComplete='off'>
        <Card className={classes.card}>
          <CardHeader className={classes.header} title='Bug Tracker App' />
          <CardContent>
            <div>
              <TextField
                error={state.isError}
                fullWidth
                id='username'
                type='email'
                label='Username'
                placeholder='Username'
                margin='normal'
                onChange={handleUsernameChange}
                onKeyPress={handleKeyPress}
              />
              <TextField
                error={state.isError}
                fullWidth
                id='password'
                type='password'
                label='Password'
                placeholder='Password'
                margin='normal'
                helperText={state.helperText}
                onChange={handlePasswordChange}
                onKeyPress={handleKeyPress}
              />
            </div>
          </CardContent>
          <CardActions>
            <Button
              variant='contained'
              size='large'
              color='secondary'
              className={classes.loginBtn}
              onClick={handleLogin}
              disabled={state.isButtonDisabled}
            >
              Login
            </Button>
          </CardActions>

          <CardActions>
            <Button
              variant='outlined'
              size='large'
              color='secondary'
              className={classes.loginBtn}
              onClick={() => navigate('/register')}
            >
              Register
            </Button>
          </CardActions>
        </Card>
      </form>
    </Container>
  );
};

export default Login;
