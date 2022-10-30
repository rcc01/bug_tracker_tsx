import { RowDataTicket } from "../../components/TicketsTable/TicketsTable";
import { RowDataEmployee } from "../../components/Employees/EmployeesTable";
import RowData from "../../components/Table/RowData";

class DataStoreClass {
  private projects: RowData[];
  private tickets: RowDataTicket[];
  private employees: RowDataEmployee[];

  constructor() {
    this.projects = [];
    this.tickets = [];
    this.employees = [];
  }

  // PROJECTS

  // 1. Create & update
  // TODO
  
  // 2. Read
  // TODO

  // 3. Delete
  // TODO

  // TICKETS

  // 1. Create & update
  // TODO
  
  // 2. Read
  // TODO

  // 3. Delete
  // TODO

  // EMPLOYEES

  // 1. Create & update
  createUpdateEmployee(inputEmployee: RowDataEmployee) {
    const index = this.employees.findIndex(employee => employee.id === inputEmployee.id); // TODO: Refactor to a private function.
    if (index > -1) {
      this.employees[index] = inputEmployee;
    } else {
      this.employees.push(inputEmployee);
    }
  }

  // 2. Read
  readEmployees(): RowDataEmployee[] {
    return this.employees;
  }

  readEmployee(id: string): RowDataEmployee | null {
    const index = this.employees.findIndex(employee => employee.id === id); // TODO: Refactor to a private function.
    if (index > -1) {
      this.employees[index];
    }
    return null;
  }

  // 3. Delete
  deleteEmployee(id: String) {
    this.employees = this.employees.filter(employee => employee.id !== id);
  }
}

const dataStore = new DataStoreClass();
export default dataStore;
export { DataStoreClass };
