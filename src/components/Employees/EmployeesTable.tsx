import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'picture', headerName: '', width: 80 },
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'fullName', headerName: 'Full Name', width: 130 },
  {
    field: 'designation',
    headerName: 'Designation',
    width: 130,
  },
  {
    field: 'manager',
    headerName: 'Manager',
    sortable: true,
    width: 160,
  },
];

const rows = [
  {
    id: 1,
    fullName: 'Jon Snow',
    designation: 'Marketing Head',
    manager: 'Derek Diaz',
  },
  { id: 2, fullName: 'Cersei', designation: 'Sales Rep' },
  { id: 3, fullName: 'Jaime', designation: 'CEO' },
  { id: 4, fullName: 'Arya', designation: 'CFO' },
  { id: 5, fullName: 'Daenerys', designation: 'HR' },
  { id: 6, fullName: 'Pepito Perez', designation: 'HR' },
  { id: 7, fullName: 'Ferrara', designation: 'HR' },
  { id: 8, fullName: 'Rossini', designation: 'HR' },
  { id: 9, fullName: 'Harvey', designation: 'HR' },
];

const EmployeesTable = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
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

export default EmployeesTable;
