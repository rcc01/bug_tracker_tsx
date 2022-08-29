import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'picture', headerName: '', width: 50 },
  { field: 'employee', headerName: 'Employee', width: 90 },
  { field: 'designation', headerName: 'Designation', width: 130 },
  {
    field: 'country',
    headerName: 'Country',
    width: 130,
  },
  {
    field: 'hireDate',
    headerName: 'Hire Date',
    sortable: true,
    width: 160,
  },
  {
    field: 'reportsTo',
    headerName: 'Reports To',
    sortable: true,
    width: 160,
  },
];

const rows = [
  {
    id: 1,
    employee: 'Jon Snow',
    designation: 'Marketing Head',
    country: 'Spain',
    hireDate: '11/09/2019',
    reportsTo: 'Derek Diaz',
  },
  {
    id: 2,
    employee: 'Cersei',
    designation: 'Sales Rep',
    country: 'Spain',
    hireDate: '11/09/2019',
    reportsTo: 'Derek Diaz',
  },
  {
    id: 3,
    employee: 'Jaime',
    designation: 'CEO',
    country: 'Spain',
    hireDate: '11/09/2019',
    reportsTo: 'Derek Diaz',
  },
  {
    id: 4,
    employee: 'Arya',
    designation: 'CFO',
    country: 'Spain',
    hireDate: '11/09/2019',
    reportsTo: 'Derek Diaz',
  },
  {
    id: 5,
    employee: 'Daenerys',
    designation: 'HR',
    country: 'Spain',
    hireDate: '11/09/2019',
    reportsTo: 'Derek Diaz',
  },
  {
    id: 6,
    employee: 'Pepito Perez',
    designation: 'HR',
    country: 'Spain',
    hireDate: '11/09/2019',
    reportsTo: 'Derek Diaz',
  },
  {
    id: 7,
    employee: 'Ferrara',
    designation: 'HR',
    country: 'Spain',
    hireDate: '11/09/2019',
    reportsTo: 'Derek Diaz',
  },
  {
    id: 8,
    employee: 'Rossini',
    designation: 'HR',
    country: 'Spain',
    hireDate: '11/09/2019',
    reportsTo: 'Derek Diaz',
  },
  {
    id: 9,
    employee: 'Harvey',
    designation: 'HR',
    country: 'Spain',
    hireDate: '11/09/2019',
    reportsTo: 'Derek Diaz',
  },
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
