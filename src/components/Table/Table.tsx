import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css';

function createData(
  name: string,
  description: string,
  contributors: string,
  status: string
) {
  return { name, description, contributors, status };
}

const rows = [
  //change the data for the table here
  createData('Bug Tracker', 'Demo 1', 'A. Thomas', 'Approved'),
  createData('Bug Tracker 2 ', 'Demo 2', 'A. Thomas, J.Bond', 'Pending'),
  createData('Bug Tracker 3', 'Demo 3', 'A. Thomas', 'Approved'),
  createData('Bug Tracker 4', 'Demo 4', 'A. Thomas', 'Delivered'),
];

const makeStyle = (status: string) => {
  if (status === 'Approved') {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    };
  } else if (status === 'Pending') {
    return {
      background: '#ffadad8f',
      color: 'red',
    };
  } else {
    return {
      background: '#59bfff',
      color: 'white',
    };
  }
};

const BasicTable = () => {
  return (
    <div className='Table'>
      <h4>Recent Projects</h4>

      <TableContainer
        component={Paper}
        style={{
          boxShadow: '0px 13px 20px 0px #80808029',
          width: 'inherit',
          padding: '2rem',
          borderRadius: '0.7rem',
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Projects</TableCell>
              <TableCell align='left'>Description</TableCell>
              <TableCell align='left'>Contributors</TableCell>
              <TableCell align='left'>Status</TableCell>
              <TableCell align='left'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell align='left'>{row.description}</TableCell>
                <TableCell align='left'>{row.contributors}</TableCell>
                <TableCell align='left'>
                  <span className='status' style={makeStyle(row.status)}>
                    {row.status}
                  </span>
                </TableCell>
                <TableCell align='left' className='Details'>
                  Details
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BasicTable;
