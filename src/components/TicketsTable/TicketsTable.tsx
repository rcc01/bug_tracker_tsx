import { useState, useEffect } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import axios from 'axios';

// 1. Try API here
// 2. See if you can make it work first with the guide of freeCodeCamp
// 3. After making it work, go to your API from swaggers
// CORS is causing issues here => solved with

const rows = [
  {
    id: 1,
    project: 'Bug Tracker',
    ticket: 'Create Schema',
    status: 'Resolved',
    priority: 'Immediate',
  },
  {
    id: 2,
    project: 'Bug Tracker',
    ticket: 'Create login page',
    status: 'In Progress',
    priority: 'High',
  },
  {
    id: 3,
    project: 'Bug Tracker 2',
    ticket: 'Different Auth Layouts',
    status: 'In Progress',
    priority: 'Medium',
  },
  {
    id: 4,
    project: 'Bug Tracker 2',
    ticket: 'Create APIs',
    status: 'New',
    priority: 'Low',
  },
  {
    id: 5,
    project: 'Bug Tracker 3',
    ticket: 'Install React Routes',
    status: 'Resolved',
    priority: 'High',
  },
  {
    id: 6,
    project: 'Bug Tracker 3',
    ticket: 'Log user out on token expiration',
    status: 'In Progress',
    priority: 'High',
  },
  {
    id: 7,
    project: 'Bug Tracker 3',
    ticket: 'Log user out on token expiration',
    status: 'In Progress',
    priority: 'High',
  },
  {
    id: 8,
    project: 'Bug Tracker 4',
    ticket: 'Log user out on token expiration',
    status: 'In Progress',
    priority: 'High',
  },
  {
    id: 9,
    project: 'Bug Tracker 4',
    ticket: 'Log user out on token expiration',
    status: 'Resolved',
    priority: 'High',
  },
];
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'name', headerName: 'Name', width: 160 },
  { field: 'status', headerName: 'Status', width: 110 },
  { field: 'gender', headerName: 'Gender', width: 110 },
  { field: 'email', headerName: 'Email', width: 190 },
];

const TicketsTable = () => {
  const [dataApi, setDataApi] = useState([]);

  const URL = 'http://localhost:8080/Employee';
  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    setDataApi(data);
  };

  return (
    <div
      style={{
        height: 360,
        width: '100%',
        position: 'relative',
        top: '75px',
        left: '30px',
      }}
    >
      <DataGrid
        rows={dataApi}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default TicketsTable;
