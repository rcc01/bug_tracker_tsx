import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { resolveModuleName } from 'typescript';

const columns: GridColDef[] = [
  { field: 'project', headerName: 'Project', width: 160 },
  { field: 'ticket', headerName: 'Ticket', width: 160 },
  { field: 'status', headerName: 'Status', width: 110 },
  { field: 'priority', headerName: 'Priority', width: 110 },
];

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

const TicketsTable = () => {
  return (
    <div style={{ height: 360, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default TicketsTable;
